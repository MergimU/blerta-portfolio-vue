module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/styles/_index.scss";`,
      },
    },
    sourceMap: process.env.NODE_ENV !== "production",
  },
  publicPath: "./",
};
