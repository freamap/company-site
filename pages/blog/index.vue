<template>
  <div class="blog-page">
    <Blogs />
  </div>
</template>

<script>
import Blogs from '~/components/organisms/Blogs'
import { mapActions } from 'vuex'

export default {
  layout: 'sub',
  asyncData(context) {
    let topicPath = [
      {
        url: context.store.state.pages.pages.blog.url,
        title: context.store.state.pages.pages.blog.title
      }
    ]
    context.store.dispatch('setPage', topicPath)
  },
  components: {
    Blogs
  }
}
</script>

<style lang="scss" scoped>
.blog-page {
  padding: 70px 0px 140px 0px;
}
</style>
