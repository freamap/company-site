<template>
  <div class="recruit-page">
    <div class="firstLine">
      <div class="title">
        募集職種一覧
      </div>
      <div class="date">
        最終更新日: 2018/06/16
      </div>
    </div>
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

  .firstLine {
    display: flex;
    margin-top: 55px;
    margin-bottom: 50px;
    width: 100%;

    .title {
      font-size: 18px;
      color: #000000;
      font-weight: bold;
    }

    .date {
      font-size: 13px;
      color: #767676;
      margin-left: auto;
    }
  }
}
</style>
