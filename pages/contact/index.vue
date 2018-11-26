<template>
  <div>
    contact page
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  layout: 'sub',
  asyncData(context) {
    let topicPath = [
      {
        url: context.store.state.pages.pages.contact.url,
        title: context.store.state.pages.pages.contact.title
      }
    ]
    context.store.dispatch('setPage', topicPath)
  }
}
</script>

<style>
</style>
