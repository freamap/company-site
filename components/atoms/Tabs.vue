<template>
  <div
    class="tabs"
    @click="click"
  >
    <slot />
    <span
      :style="activeStyle"
      class="active"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
      required: false
    }
  },
  data() {
    return {
      activeTabWidth: 0,
      activeTabLeft: 0
    }
  },
  computed: {
    activeStyle() {
      return {
        width: this.activeTabWidth + 'px',
        left: this.activeTabLeft + 'px'
      }
    }
  },
  methods: {
    click(event) {
      let tab = event.target
      let tabs = tab.parentNode
      this.activeTabWidth = tab.offsetWidth
      this.activeTabLeft =
        tab.getBoundingClientRect().left - tabs.getBoundingClientRect().left

      this.$emit('input', event.target.value)
      this.$emit('change', event.target.value)
    }
  }
}
</script>

<style scoped lang="scss">
.tabs {
  position: relative;

  .active {
    position: absolute;
    bottom: 0;
    height: 2px;
    width: 10px;
    background-color: red;
    left: 0;
    transition: left 0.2s;
  }
}
</style>
