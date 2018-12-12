<template>
  <div class="recruit-detail-page">
    <div class="firstLine">
      <div 
        v-if="recruit.occupation"
        class="title">
        {{ recruit.occupation }}の募集要件
      </div>
      <div class="date">
        最終更新日: {{ recruit.date }}
      </div>
    </div>
    <div class="contents">
      <div>職種</div>
      <div>{{ recruit.occupation }}</div>
      <div>業務内容</div>
      <div>{{ recruit.businessContent }}</div>
      <div>勤務地</div>
      <div>{{ recruit.workplace }}</div>
      <div>雇用形態</div>
      <div>{{ recruit.employmentStatus }}</div>
      <div>報酬</div>
      <div>{{ recruit.payment }}</div>
      <div>求めるスキル</div>
      <div>{{ recruit.skills? recruit.skills: '-' }}</div>
    </div>
    <div class="apply">
      <Button
        padding="0 43px"
        @click="applyButtonOnClick"
      >
        応募する
      </Button>
    </div>
  </div>
</template>

<script>
import Button from '~/components/atoms/Button.vue'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    Button
  },
  layout: 'sub',
  asyncData(context) {
    let recruit = context.store.state.recruit.recruit.filter(detail => {
      return Number(detail.id) === Number(context.params.id)
    })[0]

    let topicPath = [
      {
        url: context.store.state.pages.pages.recruit.url,
        title: context.store.state.pages.pages.recruit.title
      },
      {
        url: context.route.fullPath,
        title: recruit.occupation
      }
    ]
    context.store.dispatch('setPage', {
      url: context.route.fullPath,
      topicPath: topicPath
    })

    return {
      recruit: recruit
    }
  },
  methods: {
    applyButtonOnClick: function(event) {
      this.changePage(this.pages.contact.url)
    },
    ...mapActions(['changePage'])
  }
}
</script>

<style lang="scss" scoped>
.recruit-detail-page {
  padding: 90px 140px 120px 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .firstLine {
    display: flex;
    margin-top: 55px;
    margin-bottom: 50px;
    width: 100%;

    .title {
      font-size: 1.8rem;
      color: #000000;
      font-weight: bold;
    }

    .date {
      font-size: 1.3rem;
      color: #767676;
      margin-left: auto;
    }
  }

  .contents {
    display: flex;
    flex-wrap: wrap;

    > div {
      min-height: 102px;
      display: flex;
      align-items: center;
      padding: 40px;
      border-bottom: solid 1px #e8e9ea;
      font-size: 1.5rem;

      &:nth-of-type(2n + 1) {
        flex-basis: 230px;
        border-left: solid 1px #e8e9ea;
        border-right: solid 1px #e8e9ea;
        font-weight: bold;
      }

      &:nth-of-type(2n) {
        flex-basis: calc(100% - 230px);
        border-right: solid 1px #e8e9ea;
      }

      &:first-of-type {
        border-radius: 3px 0 0 0;
        border-top: solid 1px #e8e9ea;
      }

      &:nth-of-type(2) {
        border-radius: 0 3px 0 0;
        border-top: solid 1px #e8e9ea;
      }

      &:last-of-type {
        border-radius: 0 0 3px 0;
      }

      &:nth-last-of-type(2) {
        border-radius: 0 0 0 3px;
      }
    }
  }

  .apply {
    margin-top: 70px;
  }
}
</style>
