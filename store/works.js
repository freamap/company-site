import moment from 'moment'

export const state = () => ({
  works: null,
  currentWork: null,
  worksLatestUpdateDate: null
})

export const mutations = {
  set_works(state, works) {
    state.works = works
    state.worksLatestUpdateDate = works.reduce(
      (latestWork, currentWork) =>
        moment(latestWork.update, 'YYYY-MM-DD').fromNow() <
        moment(currentWork.update, 'YYYY-MM-DD').fromNow()
          ? latestWork
          : currentWork
    ).update
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
