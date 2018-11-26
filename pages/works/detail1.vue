<template>
  <div>
    works detail page
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  layout: 'sub',
  asyncData(context) {
    let topicPath = []
    topicPath.push(context.store.state.pages.pages.works.title)
    context.store.dispatch('setPage', topicPath)
  }
}
</script>

<style>
</style>
