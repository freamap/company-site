<template>
  <div class="recruit-page">
    <section>
      <div class="firstLine">
        <h2 class="title">
          募集職種一覧
        </h2>
        <div class="update">
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
      title: this.title
    }
  },
  async fetch({ app, route, store, params }) {
    let baseUrl = process.server
      ? process.env.apiBaseURLLocal
      : process.env.apiBaseURL
    let { data } = await axios.get(baseUrl + '/api/recruits')
    store.dispatch('recruit/setRecruits', data)

    let page = app.getPage('recruit')
    let topicPath = [
      {
        url: page.url,
        title: page.title
      }
    ]
    store.dispatch('setPage', {
      topicPath: topicPath,
      originPage: page,
      title: page.title
    })
  },
  components: {
    Recruits
  },
  computed: {
    ...mapState(['title']),
    ...mapState('recruit', ['recruits']),
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
  margin: 90px 140px 120px 140px;
  display: flex;
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
}
</style>
