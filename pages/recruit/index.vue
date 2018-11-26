<template>
  <div>
    recruit page
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  layout: 'sub',
  asyncData(context) {
    let topicPath = [
      {
        url: context.store.state.pages.pages.recruit.url,
        title: context.store.state.pages.pages.recruit.title
      }
    ]
    context.store.dispatch('setPage', {
      url: context.route.fullPath,
      topicPath: topicPath
    })
  }
}
</script>

<style>
</style>
