export const state = () => ({
  news: null,
  currentNews: null
})

export const mutations = {
  set_news(state, news) {
    state.news = news
  },
  set_current_news(state, news) {
    state.currentNews = news
  }
}

export const actions = {
  setNews(context, data) {
    context.commit('set_news', data)
  },
  setCurrentNews(context, data) {
    context.commit('set_current_news', data)
  }
}
