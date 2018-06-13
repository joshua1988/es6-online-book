module.exports = {
  title: 'Vue.js + ES6',
  description: 'Vue.js 개발자를 위한 ES6 입문서(무료)',
  base: "/es6-online-book/",
  head: [
    ['link', {
      rel: 'icon',
      href: '/logo.png'
    }]
  ],
  themeConfig: {
    sidebar: [
      '/guide',
      '/const-let',
      '/fat-arrow',
      '/enhanced-object-literals',
      '/spread-operator',
      '/template-literal',
      '/destructuring',
    ],
    nav: [{
        text: 'Guide',
        link: '/guide'
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