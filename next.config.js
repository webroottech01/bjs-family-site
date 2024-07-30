const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");

const withPreact = require("next-plugin-preact");
const path = require("path");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const omitDuplicates = [
  "@babel/runtime",
  "@emotion/memoize",
  "prop-types",
  "react-is",
  "strip-ansi",
];



/** @type {import('next').NextConfig} */
module.exports = withBundleAnalyzer(withPreact({
  reactStrictMode: true,

  swcMinify: true,

  images: {
    minimumCacheTTL: 86400,
    formats: [//'image/avif',
     'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920], // 2048, 3800],

    domains: ["ca.slack-edge.com"],
  },
  
  compiler: {
    styledComponents: true
  },
  experimental: {
    outputStandalone: true
  },

  async rewrites() {
    return [
      {
        source: '/hi',
        destination: '/news',
      },
      {
        source: "/hello123",
        destination: "/",
      }
    ]
  },

  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    for (const duplicate of omitDuplicates) {
      config.resolve.alias[duplicate] = path.resolve(
        __dirname,
        "node_modules",
        duplicate
      );
    }
    config.resolve.alias["react"] = path.resolve(
      __dirname,
      "node_modules",
      "preact/compat"
    );
    config.resolve.alias["react"] = path.resolve(
      __dirname,
      "node_modules",
      "preact/compat"
    );
    config.plugins.push(new DuplicatePackageCheckerPlugin());
    return config;
  },
}));
