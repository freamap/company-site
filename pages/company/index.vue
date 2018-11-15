<template>
  <div>
    company page
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  layout: 'sub',
  asyncData(context) {
    context.store.dispatch('setPage', '/company')
  }
}
</script>

<style>
</style>
