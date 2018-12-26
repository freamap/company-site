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
  asyncData(context) {
    let topicPath = [
      {
        url: context.store.state.pages.pages.works.url,
        title: context.store.state.pages.pages.works.title
      }
    ]
    context.store.dispatch('setPage', {
      topicPath: topicPath,
      originPage: page,
      url: route.fullPath
    })
  }
}
</script>

<style>
</style>
