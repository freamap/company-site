export const state = () => ({
  currentOriginPageName: '',
  topicPath: []
})

export const mutations = {
  change_page(state, page) {
    state.currentOriginPageName = page['originName']
    state.topicPath = page['topicPath']
  }
}

export const actions = {
  changePage(context, url) {
    this.app.router.push(url)
  },

  setPage(context, topicPath) {
    let originName = 'top'
    let url = this.app.router.currentRoute.fullPath

    if (url !== context.state.pages.pages.top.url) {
      originName = url.split('/')[1]
    }

    context.commit('change_page', {
      originName: originName,
      topicPath: topicPath
    })
  }
}
