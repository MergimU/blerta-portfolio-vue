module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/styles/_global.scss";`,
      },
    },
    sourceMap: true,
  },
  publicPath:
    process.env.NODE_ENV === "production" ? "/blerta-portfolio-vue/" : "/",
};
