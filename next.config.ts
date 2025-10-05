
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
      { protocol: 'https', hostname: 'placehold.co' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'picsum.photos' },
      { protocol: 'https', hostname: '**.glbimg.com' },
      { protocol: 'https', hostname: 'minhasreceitinhas.com.br' },
      { protocol: 'https', hostname: '**.sadia.com.br' },
      { protocol: 'https', hostname: '**.tudoreceitas.com' },
      { protocol: 'https', hostname: 'melevacontigo.com.br' },
      { protocol: 'https', hostname: 'sabores-new.s3.amazonaws.com' },
      { protocol: 'https', hostname: '**.itdg.com.br' },
      { protocol: 'https', hostname: '**.umcomo.com.br' },
      { protocol: 'https', hostname: 'encrypted-tbn0.gstatic.com' },
      { protocol: 'https', hostname: 'chaparadois.com.br' },
      { protocol: 'https', hostname: '**.vilma.com.br' },
      { protocol: 'https', hostname: 'naturaves.com.br' },
      { protocol: 'https', hostname: 'sabordasespeciarias.com.br' },
      { protocol: 'https', hostname: '**.oitedi.com.br' },
      { protocol: 'https', hostname: 'conteudo.imguol.com.br' },
      { protocol