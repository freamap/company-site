<template>
  <div>
    <div class="title">
      ニュース
    </div>
    <div
      v-for="detail in news"
      :key="detail.id"
      class="contents"
    >
      <div class="update">
        {{ detail.update }}
      </div>
      <div class="description">
        {{ detail.description }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  asyncData(context) {
    context.store.dispatch('setPage', context.store.state.pages.pages.top.url)
  },
  computed: {
    ...mapState('news', ['news'])
  }
}
</script>

<style scoped lang="scss">
.title {
  font-weight: bold;
  font-size: 1.8rem;
}
</style>
