<template>
  <div>
    works page
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  layout: 'sub',
  asyncData(context) {
    context.store.dispatch('changePage', 'works')
  },
  methods: {
    ...mapActions(['changePage'])
  }
}
</script>

<style>
</style>
