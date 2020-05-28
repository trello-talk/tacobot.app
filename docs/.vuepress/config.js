module.exports = {
  title: 'Taco Bot',
  description: 'The Taco Bot Support/Docs site',
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
    logo: '/assets/img/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' }
    ],
    nextLinks: true,
    prevlinks: true,
    repo: 'trello-talk/TrelloBot',
    repoLabel: 'Contribute to the project!',
    docsRepo: 'trello-talk/tacobot.app',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Help improve this page!'
  }
}
