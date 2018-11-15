<template>
  <div class="header">
    <GlobalNavi />
  </div>
</template>

<script>
import GlobalNavi from '~/components/molecules/GlobalNavi.vue'

export default {
  components: {
    GlobalNavi
  }
}
</script>

<style scoped lang="scss">
.header {
  background-color: $primary;
}
</style>
