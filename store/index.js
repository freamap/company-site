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

  setPage(context, pageInfo) {
    let originName = 'top'
    let url = pageInfo.url

    if (url !== context.state.pages.pages.top.url) {
      originName = url.split('/')[1]
    }

    context.commit('change_page', {
      originName: originName,
      topicPath: pageInfo.topicPath
    })
  }
}
