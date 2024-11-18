import withNextra from "nextra"

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/utsjekk-docs" : undefined,
  basePath: process.env.NODE_ENV === "production" ? "/utsjekk-docs" : undefined,
  images: {
    unoptimized: true,
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.ya?ml$/,
      loader: 'yml-loader'
    })

    return config
  }
}

export default withNextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
})(nextConfig)
