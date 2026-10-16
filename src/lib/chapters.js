// Splits a page body into editorial "chapters" at its top heading level.
// Nothing is reordered or dropped: blocks keep their original sequence.
export function chapterize(blocks) {
  const levels = blocks.filter((b) => b.type === 'heading' && b.level >= 2 && b.level <= 4).map((b) => b.level);
  if (!levels.length) return [{ title: null, blocks }];
  const top = Math.min(...levels);
  const chapters = [];
  let cur = { title: null, blocks: [] };
  for (const b of blocks) {
    if (b.type === 'heading' && b.level === top) {
      if (cur.title || cur.blocks.length) chapters.push(cur);
      cur = { title: b, blocks: [] };
    } else cur.blocks.push(b);
  }
  if (cur.title || cur.blocks.length) chapters.push(cur);
  // An untitled chapter holding only images belongs with the text that follows it.
  for (let i = 0; i < chapters.length - 1; i++) {
    const c = chapters[i];
    if (!c.title && c.blocks.length && c.blocks.every((b) => b.type === 'image')) {
      chapters[i + 1] = { ...chapters[i + 1], blocks: [...c.blocks, ...chapters[i + 1].blocks] };
      chapters.splice(i, 1);
      i--;
    }
  }
  return chapters.map((c) => ({ ...c, kind: kindOf(c) }));
}

export function kindOf(c) {
  const t = c.title?.text || '';
  if (/investment|pricing/i.test(t)) return 'invest';
  if (/benefit|outcome/i.test(t)) return 'benefits';
  if (/faq/i.test(t)) return 'faq';
  if (/include/i.test(t)) return 'includes';
  if (/who (is )?this|is this .* for/i.test(t)) return 'who';
  return 'default';
}
