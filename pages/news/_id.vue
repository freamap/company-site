<template>
  <div>
    news detail {{ $route.params.id }}
  </div>
</template>

<script>
export default {
  layout: 'sub',
  asyncData(context) {
    context.store.dispatch(
      'setPage',
      context.store.state.pages.pages.news.details[context.params.id].url
    )
  }
}
</script>

<style>
</style>
