<template>
  <div class="top">
    <div class="title">
      ニュース
    </div>
    <div class="contents">
      <div
        v-for="detail in news"
        :key="detail.id"
        class="content"
      >
        <div class="update">
          {{ detail.update }}
        </div>
        <div class="description">
          {{ detail.description }}
        </div>
      </div>
    </div>
    <div class="more-news-button">
      <Button
        padding="0 35px"
        @click="moreNewsButtonOnClick"
      >
        もっと見る
      </Button>
    </div>
  </div>
</template>

<script>
import Button from '~/components/atoms/Button.vue'
import { mapState, mapActions } from 'vuex'

export default {
  asyncData(context) {
    context.store.dispatch('setPage', context.store.state.pages.pages.top.url)
  },
  components: {
    Button
  },
  computed: {
    ...mapState('pages', ['pages']),
    ...mapState('news', ['news'])
  },
  methods: {
    moreNewsButtonOnClick: function(event) {
      this.changePage(this.pages.news.url)
    },
    ...mapActions(['changePage'])
  }
}
</script>

<style scoped lang="scss">
.top {
  padding: 90px 140px 120px 140px;

  .title {
    font-weight: bold;
    font-size: 1.8rem;
    margin-bottom: 54px;
    margin-left: -3px;
  }

  > .contents {
    .content {
      display: flex;
      align-items: center;
      padding: 0 20px;
      font-size: 1.5rem;
      border-top: 1px solid #e8e9ea;
      height: 138px;

      .update {
        margin-right: 75px;
      }

      &:last-child {
        border-bottom: 1px solid #e8e9ea;
      }
    }
  }

  .more-news-button {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 70px;
  }
}
</style>
