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
    context.store.dispatch('changePage', 'blog')
  },
  methods: {
    ...mapActions(['changePage'])
  }
}
</script>

<style>
</style>
