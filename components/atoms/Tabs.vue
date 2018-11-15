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
      clicked: false,
      mounted: false
    }
  },
  computed: {
    activeStyle() {
      let activeTabWidth = 0
      let activeTabLeft = 0

      if (this.mounted) {
        let activeTab
        activeTab = this.$children.filter(child => child.value === this.value)

        if (activeTab.length > 0) {
          activeTabWidth = activeTab[0].$el.offsetWidth
          activeTabLeft =
            activeTab[0].$el.getBoundingClientRect().left -
            this.$el.getBoundingClientRect().left
        }
      }

      return {
        width: activeTabWidth + 'px',
        left: activeTabLeft + 'px',
        transition: this.clicked
          ? 'left 0.4s ease-in-out, width 0.4s ease-in-out'
          : 'none 0'
      }
    }
  },
  mounted() {
    this.mounted = true
  },
  methods: {
    click(event) {
      this.clicked = true
      let activeTab = event.target

      if (activeTab && activeTab.className === 'tab') {
        this.$emit('change', event.target.value)
      }
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
