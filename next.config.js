/** @type {import('next').NextConfig} */
const nextConfig = {
  // Built-in image optimisation is disabled (Vercel free-plan quota).
  // Pre-optimised WebP derivatives live in /public/img (scripts/optimize-images.mjs).
  // Don't auto-generate AGENTS.md in the project root.
  agentRules: false,
  images: {
    unoptimized: true,
  },
  // Verified fixes for links that 404 on the source site (see docs/source-audit/06 §2).
  async redirects() {
    return [
      { source: '/hypnotherapy-packages-the-juicy-effect', destination: '/hypnotherapy-package', permanent: true },
      { source: '/courses-certifications', destination: '/online', permanent: true },
      { source: '/julia-guerre', destination: '/meet-julia', permanent: true },
      { source: '/meet-gita-desyanti', destination: '/meet-gita-sianipar', permanent: true },
      { source: '/the-next-chapter-personal-retreat', destination: '/the-next-chapter-private-retreat', permanent: true },
    ];
  },
};

module.exports = nextConfig;
