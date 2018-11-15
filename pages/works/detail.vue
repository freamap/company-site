<template>
  <div>
    works detail page
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  layout: 'sub',
  asyncData(context) {
    context.store.dispatch('setPage', '/works/detail')
  }
}
</script>

<style>
</style>
