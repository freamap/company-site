<template>
  <div class="privacy-policy-page">
    プライバシーポリシーページです
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  layout: 'sub',
  head() {
    return {
      title: this.currentPage.title,
      meta: this.metaData
    }
  },
  async fetch({ app, route, store, params }) {
    let page = app.getPage('privacyPolicy')
    let topicPath = [
      {
        url: page.url,
        title: page.title
      }
    ]
    await store.dispatch('setPage', {
      topicPath: topicPath,
      originPage: page,
      currentPage: page
    })
  },
  computed: {
    ...mapState(['currentPage']),
    metaData() {
      return this.$store.app.getMetaData('privacyPolicy')
    }
  }
}
</script>
