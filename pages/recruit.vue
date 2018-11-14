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
    context.store.dispatch('changePage', 'recruit')
  },
  methods: {
    ...mapActions(['changePage'])
  }
}
</script>

<style>
</style>
