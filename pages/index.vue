<template>
  <div class="top">
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
.top {
  padding: 90px 140px 120px 140px;

  .title {
    font-weight: bold;
    font-size: 1.8rem;
  }

  .contents {
    display: flex;
    align-items: center;
    padding: 0 20px;
    font-size: 1.5rem;
    border-top: 1px solid #e8e9ea;
    height: 138px;

    &:last-of-type {
      border-bottom: 1px solid #e8e9ea;
    }

    .update {
      margin-right: 75px;
    }
  }
}
</style>
