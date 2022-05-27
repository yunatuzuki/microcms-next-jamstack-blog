loadEnv(process.env.API_KEY);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

function loadEnv(appEnv = "local") {
  const env = {
    ...require(`./env/.env.development.${appEnv}`),
    NEXT_PUBLIC_APP_ENV: appEnv,
  };

  Object.entries(env).forEach(([key, value]) => {
    process.env[key] = value;
  });
}