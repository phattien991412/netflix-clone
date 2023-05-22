/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
  env: {
    domain: "https://imdb-api.com/API",
    keyApi: 'k_vyo3b52m',
    keyDecode: "front-end-developer",
  },
}

// k_dyatonxb
// k_vyo3b52m
// k_unaj4g1r 
// -----------------
// k_itywe4h4 used
// k_jsi5btut used
// k_rci2wt5n used
// k_g04jd3mk used

module.exports = nextConfig
