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
    context.store.dispatch('setPage', context.store.state.pages.pages.blog.url)
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
