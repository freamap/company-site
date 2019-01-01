<template>
  <div>
    works detail page
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
    let { data } = await axios.get(baseUrl + '/api/works/' + params.id)
    await store.dispatch('works/setCurrentWork', data)

    let page = app.getPage('works')
    let title = data.title ? data.title : '開発実績詳細'
    let topicPath = [
      {
        url: page.url,
        title: page.title
      },
      {
        url: route.fullPath,
        title: title
      }
    ]
    await store.dispatch('setPage', {
      topicPath: topicPath,
      originPage: page,
      title: title
    })
  },
  computed: {
    ...mapState(['title'])
  }
}
</script>

<style>
</style>
