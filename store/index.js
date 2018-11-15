export const state = () => ({
  url: '',
  currentOriginPageName: ''
})

export const mutations = {
  change_page(state, page) {
    state.url = page['url']
    state.currentOriginPageName = page['originName']
  }
}

export const actions = {
  changePage(context, url) {
    context.dispatch('setPage', url)
    this.app.router.push(url)
  },

  setPage(context, url) {
    let originName = 'top'

    if (url !== context.state.pages.pages.top.url) {
      originName = url.split('/')[1]
    }

    context.commit('change_page', { url: url, originName: originName })
  }
}
