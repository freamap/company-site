<template>
  <div class="top container">
    <div class="content">
      <div>
        ニュース
      </div>
      <div
        v-for="detail in news"
        :key="detail.id"
      >
        <div>
          {{ detail.update }}
        </div>
        <div>
          {{ detail.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

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
.top {
  margin-top: -50px;

  > .content {
    padding-top: 90px;
    padding-bottom: 120px;
    background: #ffffff;
  }
}
</style>
