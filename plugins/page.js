export default ({ app }, inject) => {
  app.getPage = getPage
  app.getPages = getPages
}

const getPage = function(pageName) {
  return pages[pageName]
}

const getPages = function() {
  return pages
}

const pages = {
  top: {
    url: '/',
    title: 'TOP',
    globalMenu: false
  },
  philosophy: {
    url: '/philosophy',
    title: '企業理念',
    subTitle: 'philosophy',
    description:
      'フリーマップという社名の由来は、free + dream + map を組み合わせた造語です。テクノロジーの発展が一巡した今、わたしたちが考えること。',
    upContents: true,
    box: true,
    globalMenu: true
  },
  works: {
    url: '/works',
    title: '開発実績',
    subTitle: 'works',
    upContents: false,
    box: false,
    globalMenu: true
  },
  blog: {
    url: '/blog',
    title: 'ブログ',
    subTitle: 'blog',
    upContents: false,
    box: false,
    globalMenu: true
  },
  company: {
    url: '/company',
    title: '企業情報',
    subTitle: 'company',
    upContents: true,
    box: true,
    globalMenu: true
  },
  news: {
    url: '/news',
    title: 'ニュース',
    subTitle: 'News',
    upContents: true,
    box: true,
    globalMenu: false
  },
  recruit: {
    url: '/recruit',
    title: '採用情報',
    subTitle: 'recruit',
    upContents: true,
    box: true,
    globalMenu: true
  },
  contact: {
    url: '/contact',
    title: 'お問い合わせ',
    subTitle: 'contact',
    upContents: true,
    box: true,
    globalMenu: true
  }
}
