<template>
  <div class="news-detail-page">
    <div class="create">
      {{ newsDetail.create | formatDate }}
    </div>
    <div class="contents">
      <div
        v-if="newsDetail.title"
        class="title"
      >
        {{ newsDetail.title }}
      </div>
      <div
        v-html="newsDetail.contents"
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
  async fetch({ route, store, params }) {
    let baseUrl = process.server
      ? process.env.apiBaseURLLocal
      : process.env.apiBaseURL
    let { data } = await axios.get(baseUrl + '/api/news/' + params.id)
    store.dispatch('newsDetail/setNewsDetail', data)

    let topicPath = [
      {
        url: store.state.pages.pages.news.url,
        title: store.state.pages.pages.news.title
      },
      {
        url: route.fullPath,
        title: data.title
      }
    ]
    store.dispatch('setPage', {
      url: route.fullPath,
      topicPath: topicPath
    })
  },
  computed: {
    ...mapState('newsDetail', ['newsDetail'])
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
