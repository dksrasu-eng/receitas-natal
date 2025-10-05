
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
      { protocol: 'https', hostname: 'i.panelinha.com.br' },
      { protocol: 'https', hostname: 'docepedia.com' },
      { protocol: 'https', hostname: 'bolinhodecoco.pt' },
      { protocol: 'https', hostname: 'smartfarmer.pt' },
      { protocol: 'https', hostname: 'www.nattyspantry.com' },
      { protocol: 'https', hostname: 'amodadoflavio.pt' },

      // Wildcards for Major Brazilian Recipe/Media Sites
      { protocol: 'https', hostname: '**.com.br' },
      { protocol: 'https', hostname: '**.glbimg.com' },
      { protocol: 'https', hostname: '**.itdg.com.br' },
      { protocol: 'https', hostname: '**.tudoreceitas.com' },
      { protocol: 'https', hostname: '**.static.cordonbleu.edu' },
    ],
  },
};

export default nextConfig;
