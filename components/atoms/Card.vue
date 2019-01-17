<template>
  <article
    :class="cardClass"
    :style="cardStyle"
    class="card"
  >
    <slot name="thumbnail"/>
    <slot name="contents"/>
  </article>
</template>

<script>
export default {
  props: {
    horizontal: {
      type: Boolean,
      default: true,
      required: false
    },
    width: {
      type: String,
      default: '100%',
      required: false
    },
    height: {
      type: String,
      default: '100%',
      required: false
    },
    reverse: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  computed: {
    cardClass() {
      if (this.horizontal) {
        return {
          horizontal: true
        }
      }

      if (this.reverse) {
        return {
          reverse: true
        }
      }

      return {
        vertical: true
      }
    },
    cardStyle() {
      return {
        width: this.width,
        height: this.height
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

<style lang="scss" scoped>
.card {
  display: flex;
  border-radius: 2px;
  background-color: #ffffff;
  border: solid 1px #e8e9ea;
}

.horizontal {
  flex-direction: column;
}

.vertical {
  flex-direction: column;

  @include mq(md) {
    flex-direction: row;
  }
}

.reverse {
  flex-direction: column;

  @include mq(md) {
    flex-direction: row-reverse;
  }
}
</style>
