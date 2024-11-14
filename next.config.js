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
}

export default withNextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
})(nextConfig)
