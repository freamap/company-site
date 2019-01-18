<template>
  <div class="recruit-detail-page">
    <section>
      <div class="firstLine">
        <h2 
          v-if="currentRecruit.occupation"
          class="title">
          {{ currentRecruit.occupation }}の募集要件
        </h2>
        <div class="update">
          最終更新日: 
          <time
            :datetime="currentRecruit.update | formatDateTimeTag"
          >
            {{ currentRecruit.update | formatDate }}
          </time>
        </div>
      </div>
      <div class="contents">
        <section>
          <h3>職種</h3>
          <div>{{ currentRecruit.occupation }}</div>
        </section>
        <section>
          <h3>業務内容</h3>
          <div>{{ currentRecruit.businessContent }}</div>
        </section>
        <section>
          <h3>勤務地</h3>
          <div>{{ currentRecruit.workplace }}</div>
        </section>
        <section>
          <h3>雇用形態</h3>
          <div>{{ currentRecruit.employmentStatus }}</div>
        </section>
        <section>
          <h3>報酬</h3>
          <div>{{ currentRecruit.payment }}</div>
        </section>
        <section>
          <h3>求めるスキル</h3>
          <div>{{ currentRecruit.skills? currentRecruit.skills: '-' }}</div>
        </section>
      </div>
      <div class="apply">
        <Button
          padding="0 43px"
          @click="applyButtonOnClick"
        >
          応募する
        </Button>
      </div>
    </section>
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
  head() {
    return {
      title: this.currentPage.dtitle
    }
  },
  async fetch({ app, route, store, params }) {
    let baseUrl = process.server
      ? process.env.apiBaseURLLocal
      : process.env.apiBaseURL
    let { data } = await axios.get(baseUrl + '/api/recruits/' + params.id)
    await store.dispatch('recruits/setCurrentRecruit', data)

    let page = app.getPage('recruits')
    let currentPage = app.getPage('recruitsDetail')

    if (data.occupation) {
      currentPage['title'] = data.occupation
    }

    let topicPath = [
      {
        url: page.url,
        title: page.title
      },
      {
        url: route.fullPath,
        title: currentPage.title
      }
    ]
    await store.dispatch('setPage', {
      topicPath: topicPath,
      originPage: page,
      currentPage: currentPage
    })
  },
  computed: {
    ...mapState('recruits', ['currentRecruit']),
    ...mapState(['currentPage'])
  },
  methods: {
    applyButtonOnClick: function(event) {
      this.changePage(this.$store.app.getPages('contact').url)
    },
    ...mapActions(['changePage'])
  }
}
</script>

<style lang="scss" scoped>
.recruit-detail-page {
  padding: 25px 20px 70px 20px;
  display: flex;

  @include mq(md) {
    padding: 90px 140px 120px 140px;
  }

  .firstLine {
    display: flex;
    margin-bottom: 0px;
    width: 100%;
    flex-direction: column;

    @include mq(md) {
      margin-top: 55px;
      margin-bottom: 50px;
      flex-direction: row;
    }

    .title {
      font-size: 1.8rem;
      color: #000000;
      font-weight: bold;
      text-align: center;

      @include mq(md) {
        text-align: left;
      }
    }

    .update {
      display: flex;
      align-items: center;
      font-size: 1.3rem;
      color: #767676;
      justify-content: center;
      margin-top: 10px;
      flex: 1;

      @include mq(md) {
        justify-content: flex-end;
        margin-top: 0px;
      }

      > * {
        color: inherit;
        font-size: inherit;
      }
    }
  }

  .contents {
    display: flex;
    flex-wrap: wrap;
    margin-top: 25px;

    @include mq(md) {
      margin-top: 0px;
    }

    > section {
      width: 100%;
      min-height: 102px;
      display: flex;
      border-bottom: solid 1px #e8e9ea;
      border-left: solid 1px #e8e9ea;
      border-right: solid 1px #e8e9ea;
      font-size: 1.5rem;
      flex-direction: column;
      box-sizing: border-box;

      @include mq(md) {
        flex-direction: row;
      }

      > * {
        display: flex;
        align-items: center;
        padding: 15px;

        @include mq(md) {
          padding: 40px;
        }
      }

      > h3 {
        font-weight: bold;
        border-bottom: solid 1px #e8e9ea;
        justify-content: center;

        @include mq(md) {
          border-bottom: none;
          border-right: solid 1px #e8e9ea;
          flex-basis: 230px;
          justify-content: start;
        }
      }

      > div {
        flex-basis: 0;
        flex-grow: 1;
      }

      &:first-of-type {
        border-radius: 3px 3px 0 0;
        border-top: solid 1px #e8e9ea;
      }

      &:last-of-type {
        border-radius: 0 0 3px 3px;
      }
    }
  }

  .apply {
    margin-top: 70px;
    display: flex;
    justify-content: center;
  }
}
</style>
