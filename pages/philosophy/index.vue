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
    context.store.dispatch(
      'setPage',
      context.store.state.const.page.philosophy.url
    )
  }
}
</script>

<style>
</style>
