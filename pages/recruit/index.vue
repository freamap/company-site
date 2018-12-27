<template>
  <div class="recruit-page">
    <Recruits />
  </div>
</template>

<script>
import Recruits from '~/components/organisms/Recruits.vue'
import axios from 'axios'
import { mapState } from 'vuex'

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
    ...mapState(['title'])
  }
}
</script>

<style scoped lang="scss">
.recruit-page {
  font-family: Noto Sans CJK JP;
  margin: 90px 140px 120px 140px;
  display: flex;
  flex-direction: column;
}
</style>
