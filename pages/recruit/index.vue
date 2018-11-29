<template>
  <div class="recruit-page">
    <div class="tytle">
      <div class="bold">
        募集職種一覧
      </div>
      <div class="date">
        最終更新日: 2018/06/16
      </div>
    </div>
    <div class="list">
      <div>
        職種
      </div>
      <div>
        勤務地
      </div>
      <div>
        報酬
      </div>
    </div>  
    <div>
      <Recruit />
    </div>
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
  margin-left: 140px;
  margin-right: 140px;
  display: flex;
  flex-direction: column;

  .tytle {
    display: flex;
    margin-top: 55px;
    margin-bottom: 50px;
    width: 100%;

    .bold {
      font-size: 18px;
      color: #000000;
      font-weight: bold;
      text-align: left;
    }

    .date {
      font-size: 13px;
      color: #767676;
      text-align: right;
    }
  }

  .list {
    display: flex;
    color: #191919;
    font-size: 13px;
    background-color: #fafafa;
    height: 50px;
    width: 100%;
    margin-bottom: 31px;

    > div {
      margin-top: 16px;
      margin-bottom: 15px;
    }
  }
}
</style>
