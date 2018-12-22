export const state = () => ({
  newsDetail: null
})

export const mutations = {
  set_news_detail(state, newsDetail) {
    state.newsDetail = newsDetail
  },
  remove_news_detail(state) {
    state.newsDetail = null
  }
}

export const actions = {
  setNewsDetail(context, data) {
    context.commit('set_news_detail', data)
  },
  removeNewsDetail(context) {
    context.commit('remove_news_detail')
  }
}
