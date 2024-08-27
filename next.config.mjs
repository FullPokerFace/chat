/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.externals.push({
                bufferutil: "bufferutil",
                "utf-8-validate": "utf-8-validate",
            });
        }
        return config;
    },
    env: {
        NEXT_PUBLIC_SOCKET_URL: process.env.NEXT_PUBLIC_SOCKET_URL,
    },
};

export default nextConfig;