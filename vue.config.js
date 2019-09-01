module.exports = {
  publicPath: 'chatroom',
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/styles/main.scss";
        `
      }
    }
  }
}
