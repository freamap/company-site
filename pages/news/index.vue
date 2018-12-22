<template>
  <div class="news-page">
    <News />
  </div>
</template>

<script>
import News from '~/components/organisms/News.vue'
import axios from 'axios'

export default {
  layout: 'sub',
  head: {
    title: 'ニュース'
  },
  // head() {
  //   return {
  //     // vuexからデータをとる
  //     title: this.title
  //   }
  // },
  async fetch({ route, store, params }) {
    let baseUrl = process.server
      ? process.env.apiBaseURLLocal
      : process.env.apiBaseURL
    let { data } = await axios.get(baseUrl + '/api/news')
    store.dispatch('news/setNews', data)

    let topicPath = [
      {
        url: store.state.pages.pages.news.url,
        title: store.state.pages.pages.news.title
      }
    ]
    store.dispatch('setPage', {
      url: route.fullPath,
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
