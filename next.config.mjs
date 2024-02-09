/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    webpack: (config, { isServer }) => {
      // Add support for importing .md files
      config.module.rules.push({
        test: /\.md$/,
        type: "asset/source",
      });
  
      return config;
    },
};

export default nextConfig;
