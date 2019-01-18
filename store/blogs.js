export const state = () => ({
  blogs: null,
  blogLatestUpdateDate: null
})

export const mutations = {
  set_blogs(state, wpBlogs) {
    let blogs = wpBlogs.map(wpBlog => {
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
    state.blogLatestUpdateDate = blogs[0].update
  }
}

export const actions = {
  setBlogs(context, blogs) {
    context.commit('set_blogs', blogs)
  }
}
