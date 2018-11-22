<template>
  <div class="news">
    <News />
  </div>
</template>

<script>
import News from '~/components/organisms/News.vue'
import { mapActions } from 'vuex'

export default {
  layout: 'sub',
  asyncData(context) {
    context.store.dispatch('setPage', context.store.state.pages.pages.news.url)
  },
  components: {
    News
  }
}
</script>

<style>
.news {
  padding: 90px 140px 120px 140px;
}
</style>
