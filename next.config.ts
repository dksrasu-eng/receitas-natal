
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
      { protocol: 'https', hostname: 'www.wine.com.br' },
      { protocol: 'https', hostname: 'www.comidaereceitas.com.br' },
      { protocol: 'https', hostname: 'www.receitasnestle.com.br' },
      { protocol: 'https', hostname: 'guiadacozinha.com.br' },
      { protocol: 'https', hostname: 'lechef.com.br' },
      { protocol: 'https', hostname: 'baggiocafe.com.br' },
      { protocol: 'https', hostname: 'amopaocaseiro.com.br' },
      { protocol: 'https', hostname: 'www.seara.com.br' },
      { protocol: 'https', hostname: 'www.dicasdetreino.com.br' },
      { protocol: 'https', hostname: 'chaparadois.com.br' },
      { protocol: 'https', hostname: 'anamariareceitas.com.br' },
      { protocol: 'https', hostname: 'www.vilma.com.br' },
      { protocol: 'https', hostname: 'www.receitadevovo.com.br' },
      { protocol: 'https', hostname: 'naturaves.com.br' },
      { protocol: 'https', hostname: 'www.sadia.com.br' },
      { protocol: 'https', hostname: 'benditosalgado.com.br' },
      { protocol: 'https', hostname: 'www.oitedi.com.br' },
      { protocol: 'https', hostname: 'sabordasespeciarias.com.br' },
      { protocol: 'https', hostname: 'www.entrepratosecopos.com.br' },
      { protocol: 'https', hostname: 'www.doceiguaria.com.br' },
      { protocol: 'https', hostname: 'melevacontigo.com.br' },

      // Wildcards for Brazilian Media & Recipe Sites
      { protocol: 'https', hostname: '**.glbimg.com' },
      { protocol: 'https', hostname: '**.itdg.com.br' },
      { protocol: 'https', hostname: '**.umcomo.com.br' },
      { protocol: 'https', hostname: '**.tudoreceitas.com' },
      
      // Other specific domains
      { protocol: 'https', hostname: 'docepedia.com' },
      { protocol: 'https', hostname: 'cozinhafitsemsegredos.com' },
      { protocol: 'https', hostname: 'minhasreceitinhas.com.br' }
    ],
  },
};

export default nextConfig;
