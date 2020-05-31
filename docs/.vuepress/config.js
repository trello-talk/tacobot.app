const sidebar = require('./sidebar.js');

const config = {
  title: 'Taco Bot',
  description: 'The Taco Bot Support/Docs site',
  main: 'layouts/Layout.vue',
  head: [
    ['link', { rel: 'icon', href: '/logo_happy.png' }],
    ['meta', { name: 'theme-color', content: '#93a01e' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['meta', { name: 'og:title', content: 'Taco Bot' }],
    ['meta', { name: 'og:description', content: 'The Taco Bot Support/Docs site.' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:url', content: 'https://tacobot.app/' }],
    ['meta', { name: 'og:locale', content: 'en_US' }],
    ['meta', { name: 'og:image', content: '/logo_happy.png' }],
  ],
  plugins: [
    [
      '@vuepress/google-analytics',
      { ga: 'UA-167866550-1' }
    ],
    [
      'vuepress-plugin-zooming',
      { 
        selector: 'img:not(.logo):not([no-zoom])',
        options: {
          bgColor: 'black',
          bgOpacity: 0.5
        }
      }
    ]
  ],
  themeConfig: {
    search: false,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Support', link: 'https://discord.gg/fJrZZ7V' },
      { text: 'Invite Taco', link: 'https://discord.com/oauth2/authorize?client_id=617830404103077928&permissions=536931392&scope=bot' }
    ],
    sidebar,
    nextLinks: true,
    prevlinks: true,
    repo: 'trello-talk/TrelloBot',
    repoLabel: 'Contribute on GitHub!',
    docsRepo: 'trello-talk/tacobot.app',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Improve this page on GitHub!',
    logo: '/logo_happy.png',
    smoothScroll: true
  }
}

for (const group of Object.values(config.themeConfig.sidebar)) {
	for (const section of group) {
		if (section.collapsable) continue;
		section.collapsable = false;
	}
}
module.exports = config;
