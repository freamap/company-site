<template>
  <div class="input-text">
    <label>
      {{ label }}
    </label>
    <div
      :class="inputClass"
      class="input"
    >
      <textarea
        v-if="textarea"
        :placeholder="placeholder"
        class="inputClass"
      />
      <input
        v-else
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
    },
    textarea: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  computed: {
    inputClass() {
      if (this.textarea) {
        return {
          'input-textarea': true
        }
      }
      return {
        'input-text': true
      }
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

  .input-text {
    height: 50px;
  }

  .input-textarea {
    height: 250px;
  }
}
</style>
