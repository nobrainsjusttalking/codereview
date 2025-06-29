import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   output: 'export', // Статическая сборка (обязательно для GitHub Pages)

//   images: {
//     unoptimized: true, // Отключает оптимизацию next/image (иначе не будет работать без сервера)
//   },

//   basePath: process.env.PAGES_BASE_PATH,
//   trailingSlash: true, // Чтобы ссылки работали на GitHub Pages

//   eslint: {
//     ignoreDuringBuilds: true,
//   },

//   typescript: {
//     ignoreBuildErrors: true,
//   },
// };

// export default nextConfig;