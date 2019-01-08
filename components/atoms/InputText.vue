<template>
  <div class="input-text">
    <label>
      {{ label }}
    </label>
    <div class="input">
      <input
        :placeholder="placeholder"
        class="inputClass"
      >
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
    placeholder: {
      type: String,
      default: '',
      required: false
    }
  }
}
</script>

<style scoped lang="scss">
.input-text {
  display: flex;
  flex-direction: column;

  label {
    font-size: 1.3rem;
    margin-bottom: 6px;
  }

  .input {
    border-radius: 3px;
    border: solid 1px #e8e9ea;
    height: 50px;
    padding: 13px 14px;

    input {
      width: 100%;
      height: 100%;
      outline: 0;
      border: 0px;
      background: transparent;
    }
  }
}
</style>
