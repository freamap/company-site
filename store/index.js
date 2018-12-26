export const state = () => ({
  topicPath: [],
  originPage: null,
  title: ''
})

export const mutations = {
  set_page(state, pageInfo) {
    state.topicPath = pageInfo['topicPath']
    state.originPage = pageInfo['originPage']
    state.title = pageInfo['title']
  }
}

export const actions = {
  changePage(context, url) {
    this.app.router.push(url)
  },

  setPage(context, pageInfo) {
    context.commit('set_page', pageInfo)
  }
}
