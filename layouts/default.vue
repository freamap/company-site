<template>
  <div>
    <Header />
    <ContentsBox
      :box="true"
      :up-contents="true"
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

<style>
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
