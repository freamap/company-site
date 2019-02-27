<template>
  <div class="blog-page">
    <Blogs />
  </div>
</template>

<script>
import Blogs from '~/components/organisms/Blogs'
import { mapState, mapActions } from 'vuex'
import axios from 'axios'

export default {
  layout: 'sub',
  head() {
    return {
      title: this.currentPage.title,
      meta: this.metaData
    }
  },
  async fetch({ app, store, route }) {
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
    ...mapState(['currentPage']),
    metaData() {
      return this.$store.app.getMetaData('blogs')
    }
  },
  mounted() {
    axios
      .get('https://blog.freamap.co.jp/wp-json/wp/v2/posts/?context=embed')
      .then(response => {
        this.setBlogs(response.data)
      })
  },
  methods: {
    ...mapActions('blogs', ['setBlogs'])
  }
}
</script>
