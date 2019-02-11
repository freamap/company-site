<template>
  <article class="news-detail-page">
    <div class="create">
      <time
        :datetime="currentNews.create | formatDateTimeTag"
      >
        {{ currentNews.create | formatDate }}
      </time>
    </div>
    <div class="contents">
      <h2
        v-if="currentNews.title"
        class="title"
      >
        {{ currentNews.title }}
      </h2>
      <h2
        v-else
        class="title-none"
      >
        ニュース詳細
      </h2>
      <div
        v-html="currentNews.contents"
      />
    </div>
  </article>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'
import moment from 'moment'

export default {
  layout: 'sub',
  head() {
    return {
      title: this.currentPage.title,
      meta: this.metaData
    }
  },
  async fetch({ app, route, store, params }) {
    let baseUrl = process.server
      ? process.env.apiBaseURLLocal
      : process.env.apiBaseURL
    let { data } = await axios.get(baseUrl + '/api/news/' + params.id)
    await store.dispatch('news/setCurrentNews', data)

    let page = app.getPage('news')
    let currentPage = app.getPage('newsDetail')
    if (data.title) {
      currentPage['title'] = data.title
    }
    let topicPath = [
      {
        url: page.url,
        title: page.title
      },
      {
        url: route.fullPath,
        title: currentPage.title
      }
    ]
    await store.dispatch('setPage', {
      topicPath: topicPath,
      originPage: page,
      currentPage: currentPage
    })
  },
  computed: {
    ...mapState('news', ['currentNews']),
    ...mapState(['currentPage']),
    metaData() {
      let meta = {}

      if (this.currentNews.title) {
        meta = { ...meta, title: this.currentNews.title }
      }

      if (this.currentNews.og_description) {
        meta = { ...meta, description: this.currentNews.og_description }
      }

      if (this.currentNews.thumbnail) {
        let image = this.$store.app.getStaticImage(
          '/news/' + this.currentNews.news_id + '/' + this.currentNews.thumbnail
        )
        meta = { ...meta, image: image }
      }

      return this.$store.app.getMetaData('newsDetail', meta)
    }
  }
}
</script>

<style lang="scss" scoped>
.news-detail-page {
  padding: 27px 20px 60px 20px;
  display: flex;
  flex-direction: column;

  @include mq(md) {
    padding: 90px 140px 120px 140px;
    flex-direction: row;
  }

  .create {
    margin-right: 0px;
    margin-bottom: 25px;

    @include mq(md) {
      margin-right: 160px;
      margin-bottom: 0px;
    }
  }

  .contents {
    .title {
      margin-bottom: 20px;
      font-size: 1.8rem;
      font-weight: bold;

      @include mq(md) {
        margin-bottom: 50px;
      }
    }

    .title-none {
      display: none;
    }
  }
}
</style>
