export const state = () => ({
  recruits: null,
  currentRecruit: null
})

export const mutations = {
  set_recruits(state, recruits) {
    state.recruits = recruits
  },
  set_current_recruit(state, recruit) {
    state.currentRecruit = recruit
  }
}

export const actions = {
  setRecruits(context, data) {
    context.commit('set_recruits', data)
  },
  setCurrentRecruit(context, data) {
    context.commit('set_current_recruit', data)
  }
}
