import { img } from '@/lib/content';

// Plain <img> with a srcset of pre-optimised local WebP derivatives.
// (Next.js image optimisation is disabled for this project.)
export default function Picture({ src, alt = '', sizes = '100vw', priority = false, className, style, fit, position }) {
  const i = img(src);
  if (!i) return null;
  return (
    <img
      src={i.src}
      srcSet={i.srcSet}
      sizes={sizes}
      width={i.width}
      height={i.height}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      decoding="async"
      className={className}
      style={{ ...(fit ? { objectFit: fit, width: '100%', height: '100%' } : null), ...(position ? { objectPosition: position } : null), ...style }}
    />
  );
}
