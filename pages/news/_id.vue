<template>
  <div class="news-detail">
    <div class="update">
      {{ news.update }}
    </div>
    <div class="contents">
      <div v-html="news.contents" />
    </div>
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
      news: context.store.state.news.news.filter(detail => {
        return Number(detail.id) === Number(context.params.id)
      })[0]
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
