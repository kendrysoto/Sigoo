/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
}

const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});
