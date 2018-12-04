<template>
  <div class="recruit-page">
    <div class="title">
      <div class="bold">
        募集職種一覧
      </div>
      <div class="date">
        最終更新日: 2018/06/16
      </div>
    </div>
    <div class="list">
      <div class="occupation">
        職種
      </div>
      <div class="workplace">
        勤務地
      </div>
      <div class="fee">
        報酬
      </div>
    </div>  
    <div class="contents">
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
  margin: 90px 140px 120px 140px;
  display: flex;
  flex-direction: column;

  .title {
    display: flex;
    margin-top: 55px;
    margin-bottom: 50px;
    width: 100%;

    .bold {
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

  .list {
    display: flex;
    color: #191919;
    font-size: 13px;
    background-color: #fafafa;
    height: 50px;
    width: 100%;
    margin-bottom: 31px;

    > :first-child {
      margin-left: 20px;
    }

    > div {
      margin-top: 16px;
      margin-bottom: 15px;
    }

    .occupation {
      flex-basis: 317px;
      flex-grow: 1;
    }

    .workplace {
      flex-basis: 275px;
      flex-grow: 1;
    }

    .fee {
      flex-basis: 393px;
      flex-grow: 1;
    }
  }

  .contents {
    border-top: 1px solid #e8e9ea;
    border-bottom: 1px solid #e8e9ea;
  }
}
</style>
