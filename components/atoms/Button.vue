<template>
  <button
    :style="buttonStyle"
    :class="buttonClass"
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
      default: '46px',
      required: false
    },
    padding: {
      type: String,
      default: '',
      required: false
    },
    type: {
      type: String,
      default: '',
      required: false
    }
  },
  computed: {
    buttonStyle() {
      return {
        padding: this.padding,
        height: this.height
      }
    },
    buttonClass() {
      return {
        button: true,
        line: this.type === 'line'
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
  font-size: 1.5rem;
  cursor: pointer;
  outline: 0;
  border-radius: 2px;
  box-sizing: border-box;
  background: $primary;
  color: #ffffff;
  border: none;

  &.line {
    background: rgba(0, 0, 0, 0);
    border: 1px solid #ffffff;
  }
}
</style>
