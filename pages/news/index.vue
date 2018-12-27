<template>
  <div class="news-page">
    <section>
      <h1 class="news-title">ニュース</h1>
      <News />
    </section>
  </div>
</template>

<script>
import News from '~/components/organisms/News.vue'
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  layout: 'sub',
  head() {
    return {
      title: this.title
    }
  },
  async fetch({ app, route, store, params }) {
    let baseUrl = process.server
      ? process.env.apiBaseURLLocal
      : process.env.apiBaseURL
    let { data } = await axios.get(baseUrl + '/api/news')
    store.dispatch('news/setNews', data)

    let page = app.getPage('news')
    let topicPath = [
      {
        url: page.url,
        title: page.title
      }
    ]
    store.dispatch('setPage', {
      topicPath: topicPath,
      originPage: page,
      title: page.title
    })
  },
  components: {
    News
  },
  computed: {
    ...mapState(['title'])
  }
}
</script>

<style lang="scss" scoped>
.news-page {
  padding: 90px 140px 120px 140px;

  .news-title {
    display: none;
  }
}
</style>
