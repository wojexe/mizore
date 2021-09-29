const path = require("path")

const i18n_config = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "pl"],
    reloadOnPrerender: process.env.NODE_ENV === "development",
  },
  localePath: path.resolve("./public/locales"),
}

module.exports = i18n_config
