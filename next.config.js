const withPlugins = require("next-compose-plugins");
const withLess = require("next-with-less");
module.exports = withPlugins([
  withLess({
    lessLoaderOptions: {
      lessOptions: {
        modifyVars: {
          "@primary-color": "#343943",
          "@link-color": "#262626",
          "@text-color": "#262626",
        },
        javascriptEnabled: true,
      },
    },
  }),
  {
    i18n: {
      locales: ["en"],
      defaultLocale: "en",
    },
    publicRuntimeConfig: {
      baseURL: process.env.REACT_APP_API_BASE_URL,
      rpcURL: process.env.RPC_URL,
      NETWORK: process.env.NETWORK,
      address: process.env.ADDRESS,
    },
  },
]);
