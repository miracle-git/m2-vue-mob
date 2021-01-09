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
      }, 'sdc-mobui'
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
