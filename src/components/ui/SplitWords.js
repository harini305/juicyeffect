// Splits an inline-HTML heading into masked word spans on the server so GSAP
// can reveal them without client-side DOM surgery. Tags are preserved.
export function splitHtml(raw = '') {
  // Source headings sometimes butt a light word against a bold one
  // ("The Juicy Effect<strong>Story</strong>"); they rendered as separate words.
  const html = raw.replace(/([^\s>])<strong>/g, '$1 <strong>').replace(/<\/strong>([^\s<.,:;!?…])/g, '</strong> $1');
  const tokens = html.split(/(<[^>]+>)/g).filter((t) => t !== '');
  return tokens
    .map((t) => {
      if (t.startsWith('<')) return t;
      return t
        .split(/(\s+)/)
        .map((w) => (w.trim() ? `<span class="sw"><span>${w}</span></span>` : w))
        .join('');
    })
    .join('');
}

export default function SplitWords({ as: Tag = 'h1', html, className, reveal = true, ...rest }) {
  return (
    <Tag
      className={className}
      data-reveal={reveal ? 'words' : undefined}
      dangerouslySetInnerHTML={{ __html: splitHtml(html) }}
      {...rest}
    />
  );
}
