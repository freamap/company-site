<template>
  <div>
    top
  </div>
</template>

<script>
export default {
  asyncData(context) {
    context.store.dispatch('setPage', context.store.state.pages.pages.top.url)
  }
}
</script>

<style>
</style>
