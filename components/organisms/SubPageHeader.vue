<template>
  <div
    :style="subPageHeaderStyle"
    :class="upcontentsClass"
    class="sub-page-header"
  >
    <div class="head">
      <div class="container">
        <div>
          <div class="logo">
            <Logo />
          </div>
          <div class="global-navi">
            <SubPageGlobalNavi />
          </div>
          <div class="hum-global-navi">
            <HumGlobalNavi />
          </div>
        </div>
      </div>
    </div>
    <div class="contents container">
      <div>
        <div class="icon">
          <img src="~/assets/images/icon-freamap.svg">
        </div>
        <h1
          v-if="originPage.htmlTitle"
          class="title"
          v-html="originPage.htmlTitle"
        />
        <h1
          v-else
          class="title"
        >
          {{ originPage.title }}
        </h1>
        <div class="sub-title">
          {{ originPage.subTitle }}
        </div>
        <div
          v-if="originPage.description"
          class="description"
          v-html="originPage.description"
        />
      </div>
      <div class="topic-path container">
        <div><a @click="pathClick('/')">TOP</a></div>
        <div
          v-for="topic in topicPath"
          :key="topic.url"
          class="path"
        >
          <div class="topic-angle">
            <AngleRight />
          </div>
          <div><a @click="pathClick(topic.url)">{{ topic.title }}</a></div>
        </div>
      </div>
    </div>
    <div class="gooey left">
      <img src="~/assets/images/gooey--left.svg">
    </div>
    <div class="gooey right">
      <img src="~/assets/images/gooey--right.svg">
    </div>
  </div>
</template>

<script>
import SubPageGlobalNavi from '~/components/molecules/SubPageGlobalNavi.vue'
import HumGlobalNavi from '~/components/molecules/HumGlobalNavi.vue'
import Logo from '~/components/molecules/Logo.vue'
import AngleRight from '~/assets/icons/AngleRight.vue'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    SubPageGlobalNavi,
    HumGlobalNavi,
    Logo,
    AngleRight
  },
  props: {
    upContents: {
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
    subPageHeaderStyle() {
      let style = {
        maxHeight: '528px'
      }

      if (this.originPage.description) {
        return {
          ...style,
          maxHeight: '660px'
        }
      }

      return style
    },
    upcontentsClass() {
      if (this.upContents && this.upContentsMobile) {
        return {
          upcontents: true
        }
      } else if (this.upContents) {
        return {
          'upcontents-pc': true
        }
      } else if (this.upContentsMobile) {
        return {
          'upcontents-mobile': true
        }
      }

      return {}
    },
    ...mapState(['topicPath', 'originPage']),
    ...mapState('news', ['news'])
  },
  methods: {
    pathClick(url) {
      this.changePage(url)
    },
    ...mapActions(['changePage'])
  }
}
</script>

<style scoped lang="scss">
.sub-page-header {
  height: 100vh;
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  background-color: $primary;
  transition: max-height 0.4s ease-in-out;
  position: relative;
  overflow: hidden;

  * {
    color: #ffffff;
  }

  @include mq(md) {
    padding-top: 30px;
  }

  .head {
    height: 49px;
    border-bottom: solid 1px rgba(255, 255, 255, 0.16);
    box-sizing: content-box;

    @include mq(md) {
      height: 72px;
      border-bottom: none;
    }

    > div {
      height: 100%;
      width: 100%;

      > div {
        display: flex;
        align-items: top;
        height: 100%;
        width: 100%;
        border-bottom: none;

        @include mq(md) {
          border-bottom: solid 1px rgba(255, 255, 255, 0.16);
        }

        .logo {
          width: 120px;

          @include mq(md) {
            width: 150px;
          }
        }

        > .global-navi {
          display: none;

          @include mq(md) {
            flex-grow: 1;
            height: calc(100% + 2px);
            display: flex;
            justify-content: flex-end;
          }
        }

        > .hum-global-navi {
          flex-grow: 1;
          display: flex;
          justify-content: flex-end;

          @include mq(md) {
            display: none;
          }
        }
      }
    }
  }

  .contents {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    position: relative;

    .icon {
      text-align: center;
      height: 21px;

      img {
        height: 100%;
        object-fit: contain;
      }
    }

    .title /deep/ {
      margin-top: 5px;
      min-height: 64px;
      font-weight: bold;
      font-size: 3.5rem;
      text-align: center;

      > * {
        font-weight: inherit;
        font-size: inherit;
        color: inherit;
      }

      @include mq(md) {
        font-size: 4.3rem;
      }
    }

    .sub-title {
      margin-top: 8px;
      height: 25px;
      text-align: center;
      font-size: 1.5rem;
      font-family: Poppins;

      @include mq(md) {
        font-size: 1.8rem;
      }
    }

    .description {
      margin-top: 29px;
      text-align: center;
      font-size: 1.1rem;

      @include mq(md) {
        font-size: 1.3rem;
      }
    }

    .topic-path {
      position: absolute;
      display: flex;
      bottom: 25px;
      left: 0;

      a:nth-child(n) {
        cursor: pointer;
        font-weight: 400;

        font-size: 1.1rem;
        font-family: Noto Sans CJK JP;

        @include mq(md) {
          font-size: 1.3rem;
        }
      }

      :first-child {
        a {
          font-weight: bold;
        }
      }

      .path {
        display: flex;

        > :nth-child(n) {
          margin-left: 20px;
        }
      }

      .topic-angle {
        width: 19px;
        display: flex;
        align-items: center;

        svg {
          width: 100%;
          fill: #ffffff;
        }
      }
    }
  }

  .gooey {
    position: absolute;
    pointer-events: none;
  }

  .left {
    @extend .gooey;
    top: 50%;
    left: 0;
    transform: translate(-47%, -38%);
    width: 70%;
  }

  .right {
    @extend .gooey;
    top: 50%;
    right: 0;
    transform: translate(49%, -77%);
    width: 70%;
  }
}

.upcontents-mobile {
  padding-bottom: 50px;

  @include mq(md) {
    padding-bottom: 0px;
  }
}

.upcontents-pc {
  padding-bottom: 0px;

  @include mq(md) {
    padding-bottom: 50px;
  }
}

.upcontents {
  padding-bottom: 50px;
}
</style>
