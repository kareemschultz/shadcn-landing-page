/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath:
    process.env.NODE_ENV === "production" ? "/shadcn-landing-page" : "",
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/shadcn-landing-page/" : "",
};

export default nextConfig;
