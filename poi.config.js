module.exports = {
  cssModules: true,
  autoprefixer: {
    browsers: ['> 5%']
  },
  html: {
    template: 'src/index.html'
  },
  webpack (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: [
        { loader: 'html-loader' },
        { loader: 'markdown-loader' }
      ]
    })

    return config
  }
}
