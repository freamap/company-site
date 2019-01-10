<template>
  <div>
    <SubPageHeader
      :up-contents="currentPage.upContents"
      :up-contents-mobile="currentPage.upContentsMobile"
    />
    <ContentsBox
      :box="currentPage.box"
      :box-mobile="currentPage.boxMobile"
      :up-contents="currentPage.upContents"
      :up-contents-mobile="currentPage.upContentsMobile"
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
    ...mapState(['currentPage'])
  }
}
</script>

<style lang="scss">
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  font-size: 1.3rem;
  color: #191919;

  @include mq(md) {
    font-size: 1.5rem;
  }
}

.br-sm {
  display: none;

  @include mq(sm) {
    display: inline;
  }
}

.container {
  padding: 0px 44px;

  @include mq(md) {
    padding: 0px 100px;
  }
}
</style>
