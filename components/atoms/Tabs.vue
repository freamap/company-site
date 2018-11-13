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
  mounted() {
    let activeTab
    this.$children.forEach(child => {
      if (child.value === this.value) {
        activeTab = child
        // break
      }
    })

    if (activeTab) {
      this.showActiveBar(activeTab.$el)
    }
  },
  methods: {
    click(event) {
      let activeTab = event.target

      if (activeTab) {
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
