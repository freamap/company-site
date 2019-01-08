<template>
  <div class="input-select">
    <label>
      {{ label }}
    </label>
    <div
      class="select"
    >
      <select
        class="selectClass"
        @change="selectChange"
      >
        <slot/>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
      required: false
    },
    defaultValue: {
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
    selectChange(event) {
      this.$emit('input', event.target.value)
      this.$emit('change', event.target.value)
    }
  }
}
</script>

<style scoped lang="scss">
.input-select {
  display: flex;
  flex-direction: column;

  label {
    font-size: 1.3rem;
    margin-bottom: 6px;
  }

  .select {
    border-radius: 3px;
    border: solid 1px #e8e9ea;
    padding: 13px 14px;

    * {
      width: 100%;
      height: 100%;
      outline: 0;
      border: 0px;
      background: transparent;
      resize: none;
    }
  }
}
</style>
