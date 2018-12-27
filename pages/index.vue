<template>
  <div class="top-page">
    <div class="title">
      ニュース
    </div>
    <News :length="3"/>
    <div class="more-news-button">
      <Button
        padding="0 35px"
        @click="moreNewsButtonOnClick"
      >
        もっと見る
      </Button>
    </div>
  </div>
</template>

<script>
import Button from '~/components/atoms/Button.vue'
import News from '~/components/organisms/News.vue'
import { mapState, mapActions } from 'vuex'
import axios from 'axios'

export default {
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

    let page = app.getPage('top')
    let topicPath = [
      {
        url: page.url,
        title: page.title
      }
    ]
    store.dispatch('setPage', {
      originPage: page,
      topicPath: topicPath,
      title: page.title
    })
  },
  components: {
    Button,
    News
  },
  computed: {
    ...mapState(['title'])
  },
  methods: {
    moreNewsButtonOnClick: function(event) {
      this.changePage(this.$store.app.getPage('news').url)
    },
    ...mapActions(['changePage'])
  }
}
</script>

<style scoped lang="scss">
.top-page {
  padding: 90px 140px 120px 140px;

  .title {
    font-weight: bold;
    font-size: 1.8rem;
    margin-bottom: 54px;
    margin-left: -3px;
  }

  .more-news-button {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 70px;
  }
}
</style>
