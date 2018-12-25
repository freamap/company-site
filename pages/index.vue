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
  async fetch({ route, store, params }) {
    let baseUrl = process.server
      ? process.env.apiBaseURLLocal
      : process.env.apiBaseURL
    let { data } = await axios.get(baseUrl + '/api/news')
    store.dispatch('news/setNews', data)

    let topicPath = [
      {
        url: '',
        title: store.state.pages.pages.top.title
      }
    ]
    store.dispatch('setPage', {
      url: route.fullPath,
      topicPath: topicPath
    })
  },
  components: {
    Button,
    News
  },
  computed: {
    ...mapState('pages', ['pages'])
  },
  methods: {
    moreNewsButtonOnClick: function(event) {
      this.changePage(this.pages.news.url)
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
