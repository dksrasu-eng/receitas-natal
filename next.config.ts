
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
      { protocol: 'https', hostname: 'sabores-new.s3.amazonaws.com' },
      { protocol: 'https', hostname: 'assets.unileversolutions.com' },
      { protocol: 'https', hostname: 'cdn.casaeculinaria.com' },
      
      // Specific domains from recipes
      { protocol: 'https', hostname: 'i.s3.glbimg.com' },
      { protocol: 'https', hostname: 's2.glbimg.com' },
      { protocol: 'https', hostname: 'static.cordonbleu.edu' },
      { protocol: 'https', hostname: 'proxy.site321.com.br' },
      { protocol: 'https', hostname: 'static.itdg.com.br' },
      { protocol: 'https', hostname: 'guiadacozinha.com.br' },
      { protocol: 'https', hostname: 'www.comidaereceitas.com.br' },
      { protocol: 'https', hostname: 'content.paodeacucar.com' },
      { protocol: 'https', hostname: 'blog.fungodequintal.com.br' },
      { protocol: 'https', hostname: 'www.receiteria.com.br' },
      { protocol: 'https', hostname: 'receitaskidelicia.com.br' },
      { protocol: 'https', hostname: 'static.ndmais.com.br' },
      { protocol: 'https', hostname: 'receitinhasdadani.com.br' },
      { protocol: 'https', hostname: 'i.panelinha.com.br' },
      { protocol: 'https', hostname: 'www.seara.com.br' },
      { protocol: 'https', hostname: 'smartfarmer.pt' },
      { protocol: 'https', hostname: 'baggiocafe.com.br' },
      { protocol: 'https', hostname: 'www.tribunapr.com.br' },
      { protocol: 'https', hostname: 're-comendo.com' },
      { protocol: 'https', hostname: 'amodadoflavio.pt' },

      // Wildcards for Major Brazilian/International Recipe/Media Sites
      { protocol: 'https', hostname: '**.com.br' },
      { protocol: 'https', hostname: '**.glbimg.com' },
      { protocol: 'https', hostname: '**.com' },
      { protocol: 'https', hostname: '**.pt' },
    ],
  },
};

export default nextConfig;

    
    
