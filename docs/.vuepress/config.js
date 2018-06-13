module.exports = {
  title: 'Vue.js + ES6',
  description: 'Vue.js 개발자를 위한 ES6 입문서(무료)',
  base: "/",
  dest: "./dist",
  head: [
    ['link', {
      rel: 'icon',
      href: '/logo.png'
    }]
  ],
  themeConfig: {
    sidebar: [
      '/es6/guide',
      '/es6/const-let',
      '/es6/fat-arrow',
      '/es6/enhanced-object-literals',
      '/es6/spread-operator',
      '/es6/template-literal',
      '/es6/destructuring',
    ],
    nav: [{
        text: 'Guide',
        link: '/es6/guide'
      },
      {
        text: 'Video',
        link: 'https://www.inflearn.com/course/vue-pwa-vue-js-%EC%A4%91%EA%B8%89/'
      },
      {
        text: 'More Articles',
        link: 'https://joshua1988.github.io/'
      }
    ]
  }
}