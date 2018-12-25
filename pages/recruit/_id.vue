<template>
  <div class="recruit-detail-page">
    <div class="firstLine">
      <div 
        v-if="currentRecruit.occupation"
        class="title">
        {{ currentRecruit.occupation }}の募集要件
      </div>
      <div class="update">
        最終更新日: {{ currentRecruit.update | formatDate }}
      </div>
    </div>
    <div class="contents">
      <div>職種</div>
      <div>{{ currentRecruit.occupation }}</div>
      <div>業務内容</div>
      <div>{{ currentRecruit.businessContent }}</div>
      <div>勤務地</div>
      <div>{{ currentRecruit.workplace }}</div>
      <div>雇用形態</div>
      <div>{{ currentRecruit.employmentStatus }}</div>
      <div>報酬</div>
      <div>{{ currentRecruit.payment }}</div>
      <div>求めるスキル</div>
      <div>{{ currentRecruit.skills? currentRecruit.skills: '-' }}</div>
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
import axios from 'axios'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    Button
  },
  layout: 'sub',
  async fetch({ route, store, params }) {
    let baseUrl = process.server
      ? process.env.apiBaseURLLocal
      : process.env.apiBaseURL
    let { data } = await axios.get(baseUrl + '/api/recruits/' + params.id)
    store.dispatch('recruit/setCurrentRecruit', data)

    let topicPath = [
      {
        url: store.state.pages.pages.recruit.url,
        title: store.state.pages.pages.recruit.title
      },
      {
        url: route.fullPath,
        title: data.occupation
      }
    ]
    store.dispatch('setPage', {
      url: route.fullPath,
      topicPath: topicPath
    })
  },
  computed: {
    ...mapState('recruit', ['currentRecruit'])
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

    .update {
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
