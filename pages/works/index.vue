<template>
  <div>
    works page
  </div>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'

export default {
  layout: 'sub',
  head() {
    return {
      title: this.title
    }
  },
  async fetch({ app, route, store, params }) {
    let baseUrl = process.server
      ? process.env.apiBaseURLLocal
      : process.env.apiBaseURL
    let { data } = await axios.get(baseUrl + '/api/works')
    store.dispatch('work/setWorks', data)

    let page = app.getPage('works')
    let topicPath = [
      {
        url: page.url,
        title: page.title
      }
    ]
    store.dispatch('setPage', {
      topicPath: topicPath,
      originPage: page,
      title: page.title
    })
  },
  computed: {
    ...mapState(['title'])
  }
}
</script>

<style>
</style>
