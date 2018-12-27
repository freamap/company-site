<template>
  <div class="blog-page">
    <Blogs />
  </div>
</template>

<script>
import Blogs from '~/components/organisms/Blogs'
import { mapState } from 'vuex'

export default {
  layout: 'sub',
  head() {
    return {
      title: this.title
    }
  },
  async fetch({ app, store, route }) {
    let page = app.getPage('blog')
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
    Blogs
  },
  computed: {
    ...mapState(['title'])
  }
}
</script>

<style lang="scss" scoped>
.blog-page {
  padding: 70px 0px 140px 0px;
}
</style>
