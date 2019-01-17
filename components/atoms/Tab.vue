<template>
  <button
    :value="value"
    class="tab"
    @click="onClick"
  >
    <div
      :style="labelStyle"
      class="label"
    >
      {{ label }}
    </div>
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
    },
    labelPosition: {
      type: String,
      default: 'center',
      required: false
    },
    padding: {
      type: String,
      default: '0px',
      required: false
    }
  },
  computed: {
    labelStyle: function() {
      let alignItems = 'center'
      switch (this.labelPosition) {
        case 'top':
          alignItems = 'flex-start'
          break
        case 'bottom':
          alignItems = 'flex-end'
          break
      }
      return {
        alignItems: alignItems,
        padding: this.padding
      }
    }
  },
  methods: {
    onClick: function(event) {
      return false
    }
  }
}
</script>

<style scoped lang="scss">
.tab {
  display: block;
  color: inherit;
  border: none;
  outline: 0;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  height: 100%;
  font-size: inherit;
  font-family: inherit;
  padding: 0;

  .label {
    height: 100%;
    display: flex;
    justify-content: center;
    pointer-events: none;
    color: inherit;
  }
}
</style>
