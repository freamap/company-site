<template>
  <div class="news-detail-page">
    <div class="create">
      {{ currentNews.create | formatDate }}
    </div>
    <div class="contents">
      <div
        v-if="currentNews.title"
        class="title"
      >
        {{ currentNews.title }}
      </div>
      <div
        v-html="currentNews.contents"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'
import moment from 'moment'

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
    let { data } = await axios.get(baseUrl + '/api/news/' + params.id)
    store.dispatch('news/setCurrentNews', data)

    let page = app.getPage('news')
    let title = data.title ? data.title : 'ニュース詳細'
    let topicPath = [
      {
        url: page.url,
        title: page.title
      },
      {
        url: route.fullPath,
        title: data.title ? data.title : 'ニュース詳細'
      }
    ]
    store.dispatch('setPage', {
      topicPath: topicPath,
      originPage: page,
      title: title
    })
  },
  computed: {
    ...mapState('news', ['currentNews']),
    ...mapState(['title'])
  }
}
</script>

<style lang="scss" scoped>
.news-detail-page {
  padding: 90px 140px 120px 140px;
  display: flex;
  font-size: 1.5rem;

  .create {
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
