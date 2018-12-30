<template>
  <div>
    開発実績
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('work', ['works'])
  },
  methods: {
    ...mapActions(['changePage'])
  }
}
</script>

<style scoped lang="scss">
</style>
