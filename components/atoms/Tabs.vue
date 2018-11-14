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
      activeTabLeft: 0,
      clicked: false
    }
  },
  computed: {
    activeStyle() {
      return {
        width: this.activeTabWidth + 'px',
        left: this.activeTabLeft + 'px',
        transition: this.clicked
          ? 'left 0.4s ease-in-out, width 0.4s ease-in-out'
          : 'none 0'
      }
    }
  },
  mounted() {
    let activeTab
    activeTab = this.$children.filter(child => child.value === this.value)

    if (activeTab) {
      this.showActiveBar(activeTab[0].$el)
    } else {
      this.activeTabWidth = 0
    }
  },
  methods: {
    click(event) {
      this.clicked = true
      let activeTab = event.target

      if (activeTab && activeTab.className === 'tab') {
        this.showActiveBar(activeTab)
        this.$emit('input', event.target.value)
        this.$emit('change', event.target.value)
      }
    },
    showActiveBar(activeTab) {
      this.activeTabWidth = activeTab.offsetWidth
      this.activeTabLeft =
        activeTab.getBoundingClientRect().left -
        this.$el.getBoundingClientRect().left
    }
  }
}
</script>

<style scoped lang="scss">
.tabs {
  position: relative;
  height: 100%;
  display: flex;

  .active {
    position: absolute;
    bottom: 0;
    height: 3px;
    background-color: #ffffff;
    left: 0;
  }
}
</style>
