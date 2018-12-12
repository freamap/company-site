<template>
  <div class="recruit-page">
    <Recruit />
  </div>
</template>

<script>
import Recruit from '~/components/organisms/Recruit.vue'
import { mapActions } from 'vuex'

export default {
  layout: 'sub',
  asyncData(context) {
    let topicPath = [
      {
        url: context.store.state.pages.pages.recruit.url,
        title: context.store.state.pages.pages.recruit.title
      }
    ]
    context.store.dispatch('setPage', {
      url: context.route.fullPath,
      topicPath: topicPath
    })
  },
  components: {
    Recruit
  }
}
</script>

<style scoped lang="scss">
.recruit-page {
  font-family: Noto Sans CJK JP;
  margin: 90px 140px 120px 140px;
  display: flex;
  flex-direction: column;
}
</style>
