export default ({ app }, inject) => {
  app.getPage = getPage
  app.getPages = getPages
  app.getMetaData = getMetaData
}

const getPage = function(pageName) {
  return pages[pageName]
}

const getPages = function() {
  return pages
}

const getMetaData = function(pageName) {
  let page = pages[pageName]
  let meta = [
    {
      hid: 'og:url',
      property: 'og:url',
      content: 'https://freamap.co.jp' + page.url
    }
  ]

  if (page.meta.title) {
    meta.push({
      hid: 'og:title',
      property: 'og:title',
      content: page.meta.title
    })
  }

  if (page.meta.description) {
    meta.push({
      hid: 'description',
      name: 'description',
      content: page.meta.description
    })
    meta.push({
      hid: 'og:description',
      name: 'og:description',
      content: page.meta.description
    })
  }

  if (page.meta.image) {
    meta.push({
      hid: 'og:image',
      name: 'og:image',
      content: page.meta.image
    })
  }

  if (page.meta.image) {
    meta.push({
      hid: 'og:image',
      name: 'og:image',
      content: page.meta.image
    })
  }

  return meta
}

const pages = {
  top: {
    url: '/',
    title: 'freamap',
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
    globalMenu: true,
    meta: {
      title: '企業理念',
      description: 'freamapの企業理念ページです。',
      url: 'https://freamap.co.jp/philosophy',
      image: 'https://freamap.co.jp/'
    }
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
  },
  contactThunks: {
    url: '/contact/thunks',
    title: 'お問い合わせ',
    upContents: true,
    box: true,
    upContentsMobile: true,
    boxMobile: true,
    globalMenu: false
  }
}
