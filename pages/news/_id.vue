<template>
  <div class="news-detail">
    <div class="update">
      {{ news.update }}
    </div>
    <div class="contents">
      {{ news.contents }}
    </div>
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

    return {
      news: context.store.state.news.news[context.params.id]
    }
  }
}
</script>

<style lang="scss" scoped>
.news-detail {
  padding: 90px 140px 120px 140px;
  display: flex;

  .update {
    margin-right: 160px;
  }
}
</style>
