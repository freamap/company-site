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
    context.store.dispatch(
      'setPage',
      context.store.state.pages.pages.works.subPage.detail.url
    )
  }
}
</script>

<style>
</style>
