<template>
  <div>
    works page
  </div>
</template>

<script>
export default {
  layout: 'sub',
  asyncData(context) {
    return { project: 'nuxt' }
  },
  data() {
    return {
      project: ''
    }
  },
  created() {
    console.log(this.project)
  }
}
</script>

<style>
</style>
