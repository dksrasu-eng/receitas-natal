
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      // Placeholders
      { protocol: 'https', hostname: 'placehold.co' },
      { protocol: 'https', hostname: 'picsum.photos' },
      
      // Stock photos & CDNs
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'images.ctfassets.net' },
      { protocol: 'https', hostname: 'encrypted-tbn0.gstatic.com' },
      { protocol: 'https', hostname: 'i.s3.glbimg.com' },

      // Wildcards for Major Brazilian/International Recipe/Media Sites
      { protocol: 'https', hostname: '**.com.br' },
      { protocol: 'https', hostname: '**.glbimg.com' },
      { protocol: 'https', hostname: '**.static.cordonbleu.edu' },
      { protocol: 'https', hostname: '**.com' },
      { protocol: 'https', hostname: '**.pt' },
    ],
  },
};

export default nextConfig;
