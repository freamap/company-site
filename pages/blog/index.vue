<template>
  <div>
    blog page
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  layout: 'sub',
  asyncData(context) {
    context.store.dispatch('setPage', context.store.state.pages.pages.blog.url)
  }
}
</script>

<style>
</style>
