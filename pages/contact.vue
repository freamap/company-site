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
    context.store.dispatch('changePage', 'contact')
  },
  methods: {
    ...mapActions(['changePage'])
  }
}
</script>

<style>
</style>
