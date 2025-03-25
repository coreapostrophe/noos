/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [
    { source: "/", destination: "/app", permanent: true },
  ],
};

export default nextConfig;
