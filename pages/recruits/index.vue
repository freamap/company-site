<template>
  <div class="recruit-page">
    <section>
      <div class="firstLine">
        <h2 class="title">
          募集職種一覧
        </h2>
        <div class="update">
          最終更新日:
          <time
            :datetime="latestUpdate | formatDateTimeTag"
          >
            {{ latestUpdate | formatDate }}
          </time>
        </div>
      </div>
      <Recruits />
    </section>
  </div>
</template>

<script>
import Recruits from '~/components/organisms/Recruits.vue'
import axios from 'axios'
import { mapState } from 'vuex'
import moment from 'moment'

export default {
  layout: 'sub',
  head() {
    return {
      title: this.currentPage.title
    }
  },
  async fetch({ app, route, store, params }) {
    let baseUrl = process.server
      ? process.env.apiBaseURLLocal
      : process.env.apiBaseURL
    let { data } = await axios.get(baseUrl + '/api/recruits')
    await store.dispatch('recruits/setRecruits', data)

    let page = app.getPage('recruits')
    let topicPath = [
      {
        url: page.url,
        title: page.title
      }
    ]
    store.dispatch('setPage', {
      topicPath: topicPath,
      originPage: page,
      currentPage: page
    })
  },
  components: {
    Recruits
  },
  computed: {
    ...mapState(['currentPage']),
    ...mapState('recruits', ['recruits']),
    latestUpdate() {
      return this.recruits.reduce(
        (a, b) =>
          moment(a.update, 'YYYY-MM-DD').fromNow() <
          moment(b.update, 'YYYY-MM-DD').fromNow()
            ? a
            : b
      ).update
    }
  }
}
</script>

<style scoped lang="scss">
.recruit-page {
  font-family: Noto Sans CJK JP;
  padding: 25px 20px 70px 20px;
  display: flex;
  flex-direction: column;

  @include mq(md) {
    padding: 90px 140px 120px 140px;
  }

  .firstLine {
    display: flex;
    margin-top: 0px;
    margin-bottom: 25px;
    width: 100%;
    flex-direction: column;

    @include mq(md) {
      margin-top: 55px;
      margin-bottom: 50px;
      align-items: center;
      justify-content: space-between;
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
      font-size: 1.3rem;
      color: #767676;
      text-align: center;
      margin-top: 10px;

      @include mq(md) {
        text-align: left;
        margin-top: 0px;
      }

      * {
        font-size: inherit;
        color: inherit;
      }
    }
  }
}
</style>
