<template>
  <div>
    works detail page
  </div>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'

export default {
  layout: 'sub',
  head() {
    return {
      title: this.currentPage.title
    }
  },
  async fetch({ app, route, store, params }) {
    let baseUrl = process.server
      ? process.env.apiBaseURLLocal
      : process.env.apiBaseURL
    let { data } = await axios.get(baseUrl + '/api/works/' + params.id)
    await store.dispatch('works/setCurrentWork', data)

    let page = app.getPage('works')
    let currentPage = app.getPage('worksDetail')

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
    ...mapState(['currentPage'])
  }
}
</script>

<style scoped lang="scss">
.works-page {
  padding: 40px 0px 80px 0px;

  @include mq(md) {
    padding: 50px 0px 140px 0px;
  }
}
</style>
