<template>
  <button
    :style="buttonStyle"
    class="button"
    @click="click"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    height: {
      type: String,
      default: '',
      required: false
    }
  },
  computed: {
    buttonStyle() {
      return {
        height: this.height
      }
    }
  },
  methods: {
    click: function(event) {
      this.$emit('click', event)
    }
  }
}
</script>

<style scoped lang="scss">
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 46px;
  font-size: 1.5rem;
  cursor: pointer;
  outline: 0;
  border-radius: 2px;
  box-sizing: border-box;
  padding: 0 28px;
  color: #ffffff;
  background: rgba(0, 0, 0, 0);
  border: 1px solid #ffffff;
}
</style>
