<template>
  <div
    :class="contentsClass"
    class="container contents-box"
  >
    <div
      class="box"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    box: {
      type: Boolean,
      default: true,
      required: false
    },
    upContents: {
      type: Boolean,
      default: true,
      required: false
    },
    boxMobile: {
      type: Boolean,
      default: true,
      required: false
    },
    upContentsMobile: {
      type: Boolean,
      default: true,
      required: false
    }
  },
  computed: {
    contentsClass() {
      let classes = {}
      if (this.boxMobile) {
        if (this.upContentsMobile) {
          classes['upContentsBoxMobile'] = true
        } else {
          classes['downContentsBoxMobile'] = true
        }
      } else {
        classes['contentsNoBoxMobile'] = true
      }

      if (this.box) {
        if (this.upContents) {
          classes['upContentsBox'] = true
        } else {
          classes['downContentsBox'] = true
        }
      } else {
        classes['contentsNoBox'] = true
      }

      return classes
    }
  }
}
</script>

<style scoped lang="scss">
.contents-box {
  position: relative;
  margin-bottom: 80px;
  // transition: margin 0.4s ease-in-out;

  @include mq(md) {
    margin-bottom: 140px;
  }
}

.upContentsBoxMobile {
  margin-top: -50px;

  .box {
    background: #ffffff;
    border: solid 1px #e8e9ea;
  }
}

.downContentsBoxMobile {
  margin-top: 40px;

  .box {
    background: #ffffff;
    border: solid 1px #e8e9ea;
  }
}

.upContentsBox {
  @include mq(md) {
    margin-top: -50px;

    .box {
      background: #ffffff;
      border: solid 1px #e8e9ea;
    }
  }
}

.downContentsBox {
  @include mq(md) {
    margin-top: 40px;

    .box {
      background: #ffffff;
      border: solid 1px #e8e9ea;
    }
  }
}
</style>
