<template>
  <button
    :value="value"
    class="tab"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
      required: false
    },
    value: {
      type: String,
      default: '',
      required: false
    }
  },
  methods: {
    onClick: function() {
      return false
    }
  }
}
</script>

<style scoped lang="scss">
.tab {
  color: $primary;
}
</style>
