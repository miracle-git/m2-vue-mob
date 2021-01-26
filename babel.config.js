module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      'component',
      {
        'libraryName': 'm2-mobui',
        'styleLibraryName': 'theme-grace'
      }, 'm2-mobui'
    ],
    [
      'import',
      {
        'libraryName': 'vant',
        'styleLibraryName': 'es',
        'style': (name) => `${name}/style/less`
      }, 'vant'
    ]
  ]
}
