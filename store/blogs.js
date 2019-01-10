export const state = () => ({
  blogs: null
})

export const mutations = {
  set_blogs(state, wpBlogs) {
    let blogs = wpBlogs.map(wpBlog => {
      // let temp = document.createElement('div')
      // tempEl.innerHTML = wpBlog.excerpt.rendered
      // let description = tempEl.firstElementChild.innerText

      return {
        id: wpBlog.id,
        update: wpBlog.date.slice(0, 10),
        title: wpBlog.title.rendered,
        thumbnail: wpBlog.thumbnail_url,
        description: wpBlog.excerpt.rendered,
        category: wpBlog.category_name,
        url: wpBlog.link
      }
    })

    state.blogs = blogs
  }
}

export const actions = {
  setBlogs(context, blogs) {
    context.commit('set_blogs', blogs)
  }
}

// export const state = () => ({
//   blogs: [
//     {
//       id: 1,
//       update: '2016-01-01',
//       title: 'ブログタイトル１',
//       thumbnail:
//         'https://freamap.co.jp/wp-content/themes/affinger5/images/no-img.png',
//       description: 'ブログ説明１',
//       category: 'server',
//       url: 'https://freamap.co.jp/vue-cli-3-gui/'
//     },
//     {
//       id: 2,
//       update: '2016-01-01',
//       title: 'ブログタイトル２',
//       thumbnail:
//         'https://freamap.co.jp/wp-content/uploads/2018/10/scratch-eyecatch-150x150.png',
//       description: 'ブログ説明２',
//       category: 'プログラミング',
//       url: 'https://freamap.co.jp/vue-cli-3-gui/'
//     },
//     {
//       id: 3,
//       update: '2016-01-01',
//       title: 'ブログタイトル３',
//       thumbnail: '',
//       description: 'ブログ説明３'
//     },
//     {
//       id: 4,
//       update: '2016-01-01',
//       title: 'ブログタイトル４',
//       thumbnail: '',
//       description: 'ブログ説明４'
//     },
//     {
//       id: 5,
//       update: '2016-01-01',
//       title: 'ブログタイトル５',
//       thumbnail: '',
//       description: 'ブログ説明５'
//     },
//     {
//       id: 6,
//       update: '2016-01-01',
//       title: 'ブログタイトル６',
//       thumbnail: '',
//       description: 'ブログ説明６'
//     }
//   ]
// })
