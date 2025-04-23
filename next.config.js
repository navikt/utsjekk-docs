/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/utsjekk-docs" : undefined,
  basePath: process.env.NODE_ENV === "production" ? "/utsjekk-docs" : undefined,
}

export default nextConfig
