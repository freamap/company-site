export const state = () => ({
  works: null,
  currentWork: null
})

export const mutations = {
  set_works(state, works) {
    state.works = works
  },
  set_current_work(state, works) {
    state.currentWork = works
  }
}

export const actions = {
  setWorks(context, data) {
    context.commit('set_works', data)
  },
  setCurrentWork(context, data) {
    context.commit('set_current_work', data)
  }
}
