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
    subTitle: 'Philosophy',
    description:
      'フリーマップという社名の由来は、free + dream + map を組み合わせた造語です。<br class="br-sm">テクノロジーの発展が一巡した今、わたしたちが考えること。',
    upContents: true,
    box: true,
    upContentsMobile: true,
    boxMobile: true,
    globalMenu: true
  },
  works: {
    url: '/works',
    title: '開発実績',
    subTitle: 'Works',
    upContents: false,
    box: false,
    upContentsMobile: false,
    boxMobile: false,
    globalMenu: true
  },
  worksDetail: {
    url: '/works/:id',
    title: '開発実績詳細',
    upContents: true,
    box: true,
    upContentsMobile: true,
    boxMobile: true,
    globalMenu: false
  },
  blogs: {
    url: '/blogs',
    title: 'ブログ',
    subTitle: 'Blog',
    upContents: false,
    box: false,
    upContentsMobile: false,
    boxMobile: false,
    globalMenu: true
  },
  company: {
    url: '/company',
    title: '企業情報',
    subTitle: 'Company',
    upContents: true,
    box: true,
    upContentsMobile: true,
    boxMobile: true,
    globalMenu: true
  },
  news: {
    url: '/news',
    title: 'ニュース',
    subTitle: 'News',
    upContents: true,
    box: true,
    upContentsMobile: true,
    boxMobile: true,
    globalMenu: false
  },
  newsDetail: {
    url: '/news/:id',
    title: 'ニュース詳細',
    upContents: true,
    box: true,
    upContentsMobile: true,
    boxMobile: true,
    globalMenu: false
  },
  recruits: {
    url: '/recruits',
    title: '採用情報',
    subTitle: 'Recruit',
    upContents: true,
    box: true,
    upContentsMobile: true,
    boxMobile: true,
    globalMenu: true
  },
  recruitsDetail: {
    url: '/recruits/:id',
    title: '採用情報詳細',
    upContents: true,
    box: true,
    upContentsMobile: true,
    boxMobile: true,
    globalMenu: false
  },
  contact: {
    url: '/contact',
    title: 'お問い合わせ',
    subTitle: 'Contact',
    upContents: true,
    box: true,
    upContentsMobile: true,
    boxMobile: true,
    globalMenu: true
  }
}
