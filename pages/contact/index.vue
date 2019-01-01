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
      title: this.currentPage.title
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
    await store.dispatch('setPage', {
      topicPath: topicPath,
      originPage: page,
      currentPage: page
    })
  },
  computed: {
    ...mapState(['currentPage'])
  }
}
</script>

<style>
</style>
