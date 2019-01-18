<template>
  <div class="works-page">
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
      title: this.currentPage.title,
      meta: this.metaData
    }
  },
  async fetch({ app, route, store, params }) {
    let baseUrl = process.server
      ? process.env.apiBaseURLLocal
      : process.env.apiBaseURL
    let { data } = await axios.get(baseUrl + '/api/works')
    await store.dispatch('works/setWorks', data)

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
      currentPage: page
    })
  },
  components: {
    Works
  },
  computed: {
    ...mapState(['currentPage']),
    metaData() {
      return this.$store.app.getMetaData('works')
    }
  }
}
</script>
