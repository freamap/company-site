<template>
  <div>
    <SubPageHeader :up-contents="originPage.upContents"/>
    <ContentsBox
      :box="originPage.box"
      :up-contents="originPage.upContents"
    >
      <nuxt/>
    </ContentsBox>
    <Footer/>
  </div>
</template>

<script>
import SubPageHeader from '~/components/organisms/SubPageHeader.vue'
import ContentsBox from '~/components/organisms/ContentsBox.vue'
import Footer from '~/components/organisms/Footer.vue'
import { mapState } from 'vuex'

export default {
  components: {
    SubPageHeader,
    ContentsBox,
    Footer
  },
  computed: {
    ...mapState(['originPage'])
  }
}
</script>

<style lang="scss">
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.br-sm {
  display: none;

  @include mq(sm) {
    display: inline;
  }
}
</style>
