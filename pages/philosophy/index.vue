<template>
  <div>
    philosophy page
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  layout: 'sub',
  asyncData(context) {
    context.store.dispatch('setPage', 'philosophy')
  }
}
</script>

<style>
</style>