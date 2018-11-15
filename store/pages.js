export const state = () => ({
  pages: {
    philosophy: {
      url: '/philosophy',
      title: '企業理念',
      subTitle: 'philosophy',
      explain:
        'フリーマップという社名の由来は、free + dream + map を組み合わせた造語です。テクノロジーの発展が一巡した今、わたしたちが考えること。'
    },
    works: {
      url: '/works',
      title: '開発実績',
      subTitle: 'works',
      subPage: {
        detail: {
          url: '/works/detail'
        }
      }
    },
    blog: {
      url: '/blog',
      title: 'ブログ',
      subTitle: 'blog'
    },
    company: {
      url: '/company',
      title: '会社情報',
      subTitle: 'company'
    },
    recruit: {
      url: '/recruit',
      title: '採用情報',
      subTitle: 'recruit'
    },
    contact: {
      url: '/contact',
      title: 'お問い合わせ',
      subTitle: 'contact'
    }
  }
})
