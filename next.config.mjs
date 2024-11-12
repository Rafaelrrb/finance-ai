/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // Configuração para otimizar o uso do Prisma em Vercel
  // Outras configurações opcionais:
  experimental: {
    appDir: true, // Caso esteja usando o diretório 'app' do Next.js
  },
};

module.exports = nextConfig;
