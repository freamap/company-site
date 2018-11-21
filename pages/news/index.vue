<template>
  <div>
    news page
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  layout: 'sub',
  asyncData(context) {
    context.store.dispatch('setPage', context.store.state.pages.pages.news.url)
  }
}
</script>

<style>
</style>
