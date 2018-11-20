<template>
  <div>
    <SubPageHeader :contents-box="contentsBox"/>
    <nuxt/>
  </div>
</template>

<script>
import SubPageHeader from '~/components/organisms/SubPageHeader.vue'
import { mapState } from 'vuex'

export default {
  components: {
    SubPageHeader
  },
  computed: {
    ...mapState(['currentOriginPageName']),
    ...mapState('pages', ['pages']),
    contentsBox() {
      if (this.currentOriginPageName === 'blog') {
        return false
      }

      return true
    }
  }
}
</script>
