<template>
  <div class="news-detail-page">
    <div class="update">
      {{ news.update }}
    </div>
    <div class="contents">
      <div
        v-if="news.title"
        class="title"
      >
        {{ news.title }}
      </div>
      <div
        v-html="news.contents"
      />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'sub',
  asyncData(context) {
    context.store.dispatch('setPage', context.route.fullPath)

    return {
      news: context.store.state.news.news.filter(detail => {
        return Number(detail.id) === Number(context.params.id)
      })[0]
    }
  }
}
</script>

<style lang="scss" scoped>
.news-detail-page {
  padding: 90px 140px 120px 140px;
  display: flex;
  font-size: 1.5rem;

  .update {
    margin-right: 160px;
  }

  .contents {
    .title {
      margin-bottom: 50px;
      font-size: 1.8rem;
      font-weight: bold;
    }
  }
}
</style>