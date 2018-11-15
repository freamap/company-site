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
    context.store.dispatch('setPage', 'recruit')
  }
}
</script>

<style>
</style>
