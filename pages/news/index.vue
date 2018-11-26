<template>
  <div class="news-page">
    <News />
  </div>
</template>

<script>
import News from '~/components/organisms/News.vue'
import { mapActions } from 'vuex'

export default {
  layout: 'sub',
  asyncData(context) {
    let topicPath = [
      {
        url: context.store.state.pages.pages.news.url,
        title: context.store.state.pages.pages.news.title
      }
    ]
    context.store.dispatch('setPage', {
      url: context.route.fullPath,
      topicPath: topicPath
    })
  },
  components: {
    News
  }
}
</script>

<style>
.news-page {
  padding: 90px 140px 120px 140px;
}
</style>
