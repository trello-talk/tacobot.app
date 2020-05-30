const sidebar = require('./sidebar.js');

const config = {
  title: 'Taco Bot',
  description: 'The Taco Bot Support/Docs site',
  head: [
	['link', { rel: 'icon', href: '/favicon.png' }],
	['meta', { name: 'theme-color', content: '#353b48' }],
	['meta', { name: 'twitter:card', content: 'summary' }],
	['meta', { name: 'og:title', content: 'Taco Bot Site' }],
	['meta', { name: 'og:description', content: 'The Taco Bot Support/Docs site.' }],
	['meta', { name: 'og:type', content: 'website' }],
	['meta', { name: 'og:url', content: 'https://tacobot.app/' }],
	['meta', { name: 'og:locale', content: 'en_US' }],
	['meta', { name: 'og:image', content: '/meta-image.png' }],
  ],
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-167866550-1' // UA-00000000-0
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
    editLinkText: 'Improve this page on GitHub!'
  }

}
for (const group of Object.values(config.themeConfig.sidebar)) {
	for (const section of group) {
		if (section.collapsable) continue;
		section.collapsable = false;
	}
}
module.exports = config;
