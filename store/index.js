export const state = () => ({
  currentPageName: '',
  currentOriginPageName: ''
})

export const mutations = {
  change_page(state, page) {
    state.currentPageName = page['name']
    state.currentOriginPageName = page['originName']
  }
}

export const actions = {
  changePage(context, name) {
    context.dispatch('setPage', name)
    this.app.router.push(name)
  },

  setPage(context, name) {
    let originName = ''
    switch (name) {
      case 'works':
        originName = 'works'
        break
      case 'philosophy':
        originName = 'philosophy'
        break
      case 'blog':
        originName = 'blog'
        break
      case 'company':
        originName = 'company'
        break
      case 'recruit':
        originName = 'recruit'
        break
      case 'contact':
        originName = 'contact'
        break
      default:
        originName = ''
    }

    context.commit('change_page', { name: name, originName: originName })
  }
}
