export const state = () => ({
  news: []
})

export const mutations = {
  set_news(state, news) {
    state.news = news
  }
}

export const actions = {
  setNews(context, data) {
    context.commit('set_news', data)
  }
}
