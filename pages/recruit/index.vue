<template>
  <div class="recruit-page">
    <Recruits />
  </div>
</template>

<script>
import Recruits from '~/components/organisms/Recruits.vue'
import axios from 'axios'
import { mapActions } from 'vuex'

export default {
  layout: 'sub',
  head: {
    title: '採用情報'
  },
  async fetch({ route, store, params }) {
    let baseUrl = process.server
      ? process.env.apiBaseURLLocal
      : process.env.apiBaseURL
    let { data } = await axios.get(baseUrl + '/api/recruits')
    store.dispatch('recruit/setRecruits', data)

    let topicPath = [
      {
        url: store.state.pages.pages.recruit.url,
        title: store.state.pages.pages.recruit.title
      }
    ]
    store.dispatch('setPage', {
      url: route.fullPath,
      topicPath: topicPath
    })
  },
  components: {
    Recruits
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
