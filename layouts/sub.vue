<template>
  <div>
    <SubPageHeader :up-contents="upContents"/>
    <ContentsBox
      :box="box"
      :up-contents="upContents"
    >
      <nuxt/>
    </ContentsBox>
  </div>
</template>

<script>
import SubPageHeader from '~/components/organisms/SubPageHeader.vue'
import ContentsBox from '~/components/organisms/ContentsBox.vue'
import { mapState } from 'vuex'

export default {
  components: {
    SubPageHeader,
    ContentsBox
  },
  computed: {
    ...mapState(['currentOriginPageName']),
    ...mapState('pages', ['pages']),
    box() {
      if (
        this.currentOriginPageName === 'blog' ||
        this.currentOriginPageName === 'works'
      ) {
        return false
      }

      return true
    },
    upContents() {
      if (
        this.currentOriginPageName === 'blog' ||
        this.currentOriginPageName === 'works'
      ) {
        return false
      }

      return true
    }
  }
}
</script>
