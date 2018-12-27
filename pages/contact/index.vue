<template>
  <div>
    contact page
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  layout: 'sub',
  head() {
    return {
      title: this.title
    }
  },
  async fetch({ app, store, route }) {
    let page = app.getPage('contact')
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
