// Renders inline HTML produced by scripts/build-content.mjs. That HTML is
// generated from the audited Markdown by our own escaping parser and only
// contains <strong>, <em> and <a>.
export default function Html({ as: Tag = 'span', html, ...rest }) {
  return <Tag {...rest} dangerouslySetInnerHTML={{ __html: html }} />;
}
