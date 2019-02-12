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

const getMetaData = function(pageName, metaData = {}) {
  let page = pages[pageName]
  let meta = [
    {
      hid: 'og:url',
      property: 'og:url',
      content: 'https://freamap.co.jp' + page.url
    }
  ]

  if (page.meta.title || metaData.title) {
    meta.push({
      hid: 'og:title',
      property: 'og:title',
      content: metaData.title ? metaData.title : page.meta.title
    })
  }

  if (page.meta.description || metaData.description) {
    meta.push({
      hid: 'description',
      name: 'description',
      content: metaData.description
        ? metaData.description
        : page.meta.description
    })
    meta.push({
      hid: 'og:description',
      property: 'og:description',
      content: metaData.description
        ? metaData.description
        : page.meta.description
    })
  }

  if (page.meta.image || metaData.image) {
    meta.push({
      hid: 'og:image',
      property: 'og:image',
      content: metaData.image ? metaData.image : page.meta.image
    })
  }

  if (page.meta.type || metaData.type) {
    meta.push({
      hid: 'og:type',
      property: 'og:type',
      content: metaData.type ? metaData.type : page.meta.type
    })
  }

  return meta
}

const pages = {
  top: {
    url: '/',
    title: 'freamap',
    globalMenu: false,
    footerMenu: false
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
    footerMenu: true,
    meta: {
      title: '企業理念',
      description: '株式会社freamapの企業理念ページです。',
      type: 'article'
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
    globalMenu: true,
    footerMenu: true,
    meta: {
      title: '開発実績',
      description: '株式会社freamapの開発実績ページです。',
      type: 'article'
    }
  },
  worksDetail: {
    url: '/works/:id',
    title: '開発実績詳細',
    upContents: true,
    box: true,
    upContentsMobile: true,
    boxMobile: true,
    globalMenu: false,
    footerMenu: false,
    meta: {
      title: '開発実績詳細',
      type: 'article'
    }
  },
  blogs: {
    url: '/blogs',
    title: 'ブログ',
    subTitle: 'Blog',
    upContents: false,
    box: false,
    upContentsMobile: false,
    boxMobile: false,
    globalMenu: true,
    footerMenu: true,
    meta: {
      title: 'ブログ',
      description: '株式会社freamapのブログ一覧ページです。',
      type: 'article'
    }
  },
  company: {
    url: '/company',
    title: '企業情報',
    subTitle: 'Company',
    upContents: true,
    box: true,
    upContentsMobile: true,
    boxMobile: true,
    globalMenu: true,
    footerMenu: true,
    meta: {
      title: '企業情報',
      description: '株式会社freamapの企業情報ページです。',
      type: 'article'
    }
  },
  news: {
    url: '/news',
    title: 'ニュース',
    subTitle: 'News',
    upContents: true,
    box: true,
    upContentsMobile: true,
    boxMobile: true,
    globalMenu: false,
    footerMenu: false,
    meta: {
      title: 'ニュース',
      description: '株式会社freamapのニュースページです。',
      type: 'article'
    }
  },
  newsDetail: {
    url: '/news/:id',
    title: 'ニュース詳細',
    upContents: true,
    box: true,
    upContentsMobile: true,
    boxMobile: true,
    globalMenu: false,
    footerMenu: false,
    meta: {
      title: 'ニュース詳細',
      type: 'article'
    }
  },
  recruits: {
    url: '/recruits',
    title: '採用情報',
    subTitle: 'Recruit',
    upContents: true,
    box: true,
    upContentsMobile: true,
    boxMobile: true,
    globalMenu: true,
    footerMenu: true,
    meta: {
      title: '採用情報',
      description: '株式会社freamapの採用情報ページです。',
      type: 'article'
    }
  },
  recruitsDetail: {
    url: '/recruits/:id',
    title: '採用情報詳細',
    upContents: true,
    box: true,
    upContentsMobile: true,
    boxMobile: true,
    globalMenu: false,
    footerMenu: false,
    meta: {
      title: '採用情報詳細',
      type: 'article'
    }
  },
  privacyPolicy: {
    url: '/privacy-policy',
    title: 'プライバシーポリシー',
    subTitle: 'privacy policy',
    upContents: true,
    box: true,
    upContentsMobile: true,
    boxMobile: true,
    globalMenu: false,
    footerMenu: true,
    meta: {
      title: 'プライバシーポリシー',
      description: '株式会社freamapホームページにおけるプライバシーポリシーページです。',
      type: 'article'
    }
  },
  contact: {
    url: '/contact',
    title: 'お問い合わせ',
    subTitle: 'Contact',
    upContents: true,
    box: true,
    upContentsMobile: true,
    boxMobile: true,
    globalMenu: true,
    footerMenu: true,
    meta: {
      title: 'お問い合わせ',
      description: '株式会社freamapのお問い合わせページです。',
      type: 'article'
    }
  },
  contactThunks: {
    url: '/contact/thunks',
    title: 'お問い合わせ',
    upContents: true,
    box: true,
    upContentsMobile: true,
    boxMobile: true,
    globalMenu: false,
    footerMenu: false,
    meta: {
      title: 'お問い合わせ',
      type: 'article'
    }
  }
}
