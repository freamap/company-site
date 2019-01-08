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
        @input="changeText"
      />
      <input
        v-else
        :placeholder="placeholder"
        class="inputClass"
        @input="changeText"
      >
    </div>
    <div
      v-if="error"
      class="error"
    >
      {{ error }}
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
    },
    error: {
      type: String,
      default: '',
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
  },
  methods: {
    changeText(event) {
      this.$emit('input', event.target.value)
      this.$emit('change', event.target.value)
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

  .error {
    font-size: 1.3rem;
    margin-top: 4px;
    color: #ff0000;
  }
}
</style>
