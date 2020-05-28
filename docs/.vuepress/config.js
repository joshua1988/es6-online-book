module.exports = {
  title: 'Vue.js + ES6',
  description: 'Vue.js 개발자를 위한 ES6 입문서(무료)',
  base: "/es6-online-book/",
  head: [
		['link', { rel: 'icon', href: '/logo.png' }],
		// ['link', { rel: 'manifest', href: '/manifest.json' }],
		// ['meta', { name: 'theme-color', content: '#3eaf7c' }],
		// ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
		// [
		// 	'meta',
		// 	{ name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
		// ],
		// ['link', { rel: 'apple-touch-icon', href: '/images/icons/152x.png' }],
		// ['link', { rel: 'mask-icon', href: '/logo.png', color: '#ffffff' }],
		// [
		// 	'meta',
		// 	{ name: 'msapplication-TileImage', content: '/images/icons/144x.png' },
		// ],
		// ['meta', { name: 'msapplication-TileColor', content: '#ffffff' }],
	],
  plugins: {
		'@vuepress/pwa': {
			serviceWorker: true,
			updatePopup: {
				message: '새 컨텐츠가 등록되었습니다. 새로고침 버튼을 눌러주세요 😄',
				buttonText: '새로고침',
			},
		},
		'@vuepress/google-analytics': {
			ga: 'UA-87965695-1',
		},
	},
  themeConfig: {
    sidebar: [
      '/guide',
      '/const-let',
      '/fat-arrow',
      '/enhanced-object-literals',
      '/spread-operator',
      '/template-literal',
			'/destructuring',
			'/modules'
    ],
    nav: [
      {
        text: '📖 가이드',
        link: '/guide'
      },
      {
				text: '📹 온라인 강의',
				link:
					'https://www.inflearn.com/instructors/54224/courses/?utm_source=vuepress&utm_medium=githubio&utm_campaign=captianpangyo&utm_term=banner',
			},
			{
				text: '📆 오프라인 강의',
				link: 'https://www.fastcampus.co.kr/dev_camp_wap/',
			},
			{
				text: '📝 더 많은 글 보기',
				link: 'https://joshua1988.github.io/',
			},
    ]
  }
}