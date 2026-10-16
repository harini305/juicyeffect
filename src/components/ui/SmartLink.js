import Link from 'next/link';

// Internal paths use next/link; external URLs open in a new tab.
export default function SmartLink({ href, children, ...rest }) {
  if (!href) return <span {...rest}>{children}</span>;
  if (/^(https?:|mailto:|tel:)/.test(href)) {
    const ext = /^https?:/.test(href);
    return (
      <a href={href} {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
}
