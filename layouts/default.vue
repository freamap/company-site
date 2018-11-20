<template>
  <div>
    <Header />
    <ContentsBox
      :box="true"
      :up-contents="true"
    >
      <nuxt/>
    </ContentsBox>
  </div>
</template>

<script>
import Header from '~/components/organisms/Header.vue'
import ContentsBox from '~/components/organisms/ContentsBox.vue'

export default {
  components: {
    Header,
    ContentsBox
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
