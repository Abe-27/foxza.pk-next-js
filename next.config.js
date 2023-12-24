/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    loader: 'custom',
    loaderFile: './my-loader.ts',
  },
}
 
module.exports = nextConfig

module.exports = nextConfig

// module.exports = {
//   basePath: '',
//   assetPrefix: '',
//   images: {
//     loader: 'imgix',
//     path: '',
//     exportPathMap: async function () {
//     return {
//       '/': { page: '/' },
//       '/about': { page: '/about' },
//       // Add other paths as needed
//     };
//   },
//   },
// };

