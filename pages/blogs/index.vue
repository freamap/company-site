<template>
  <div class="blog-page">
    <Blogs />
  </div>
</template>

<script>
import Blogs from '~/components/organisms/Blogs'
import { mapState } from 'vuex'
import axios from 'axios'

export default {
  layout: 'sub',
  head() {
    return {
      title: this.currentPage.title
    }
  },
  async fetch({ app, store, route }) {
    let { data } = await axios.get(
      'https://blog.freamap.co.jp/wp-json/wp/v2/posts/?context=embed'
    )
    await store.dispatch('blogs/setBlogs', data)

    let page = app.getPage('blogs')
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
  components: {
    Blogs
  },
  computed: {
    ...mapState(['currentPage'])
  }
}
</script>

<style lang="scss" scoped>
.blog-page {
  padding: 70px 0px 140px 0px;
}
</style>
