<template>
  <div class="news-page">
    <Works/>
  </div>
</template>

<script>
import Works from '~/components/organisms/Works.vue'
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
    await store.dispatch('work/setWorks', data)

    let page = app.getPage('works')
    let topicPath = [
      {
        url: page.url,
        title: page.title
      }
    ]
    await store.dispatch('setPage', {
      topicPath: topicPath,
      originPage: page,
      title: page.title
    })
  },
  components: {
    Works
  },
  computed: {
    ...mapState(['title'])
  }
}
</script>

<style>
</style>
