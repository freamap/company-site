<template>
  <div>
    works detail page
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  layout: 'sub',
  head() {
    return {
      title: this.pages.title
    }
  },
  async fetch({ app, route, store, params }) {
    let topicPath = [
      {
        url: store.state.pages.pages.works.url,
        title: store.state.pages.pages.works.title
      }
    ]
    await store.dispatch('setPage', {
      topicPath: topicPath,
      originPage: page,
      url: route.fullPath
    })
  }
}
</script>

<style>
</style>
