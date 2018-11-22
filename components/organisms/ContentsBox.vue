<template>
  <div
    :style="contentsBoxStyle"
    class="container contents-box"
  >
    <div
      :style="contentsBoxPaddingStyle"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    box: {
      type: Boolean,
      default: true,
      required: false
    },
    upContents: {
      type: Boolean,
      default: true,
      required: false
    }
  },
  computed: {
    contentsBoxStyle() {
      if (this.upContents) {
        return {
          marginTop: '-50px'
        }
      }
      return {
        marginTop: '0'
      }
    },
    contentsBoxPaddingStyle() {
      if (this.box) {
        return {
          background: '#ffffff',
          border: 'solid 1px #e8e9ea'
        }
      }
      return {}
    }
  }
}
</script>

<style scoped lang="scss">
.contents-box {
  position: relative;
  margin-bottom: 140px;
  // transition: margin 0.4s ease-in-out;
}
</style>
