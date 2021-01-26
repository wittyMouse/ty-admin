module.exports = {
  lintOnSave: process.env.NODE_ENV === 'production',
  publicPath: '/ty/',
  outputDir: 'ty',
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.devtool('')
    }
    config
      .plugin('env')
      .use(require.resolve('webpack/lib/ProvidePlugin'), [{
        jQuery: 'jquery',
        $: 'jquery',
        _: 'lodash'
      }])
  }
}
