<template>
  <div>
    <Header />
    <ContentsBox
      :box="true"
      :up-contents="true"
      :box-mobile="true"
      :up-contents-mobile="false"
    >
      <nuxt/>
    </ContentsBox>
    <Footer/>
  </div>
</template>

<script>
import Header from '~/components/organisms/Header.vue'
import ContentsBox from '~/components/organisms/ContentsBox.vue'
import Footer from '~/components/organisms/Footer.vue'

export default {
  components: {
    Header,
    ContentsBox,
    Footer
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

.container {
  padding: 0px 20px;

  @include mq(md) {
    padding: 0px 100px;
  }
}
</style>
