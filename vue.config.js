module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/styles/_global.scss";`,
      },
    },
    sourceMap: process.env.NODE_ENV !== "production",
  },
  publicPath: "./",
};
