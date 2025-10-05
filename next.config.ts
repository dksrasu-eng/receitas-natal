
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
      { protocol: 'https', hostname: 'img.freepik.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'images.ctfassets.net' },
      { protocol: 'https', hostname: 'p2.trrsf.com' },
      { protocol: 'https', hostname: 'i0.wp.com' },
      { protocol: 'https', hostname: 'encrypted-tbn0.gstatic.com' },
      { protocol: 'https', hostname: 'sabores-new.s3.amazonaws.com' },
      { protocol: 'https', hostname: 'lirp.cdn-website.com' },

      // Brazilian Media & Recipe Sites (with wildcards)
      { protocol: 'https', hostname: '**.glbimg.com' },
      { protocol: 'https', hostname: '**.itdg.com.br' },
      { protocol: 'https', hostname: '**.com.br' },
      { protocol: 'https', hostname: '**.edu' },
      { protocol: 'https', hostname: '**.pt' },

      // Other specific domains
      { protocol: 'https', hostname: 'docepedia.com' },
      { protocolcdn: 'https', hostname: 'cozinhafitsemsegredos.com' },
      { protocol: 'https', hostname: 'minhasreceitinhas.com.br' }
    ],
  },
};

export default nextConfig;
