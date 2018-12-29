<template>
  <div
    :style="subPageHeaderStyle"
    :class="upcontentsClass"
    class="sub-page-header container"
  >
    <div class="head">
      <div class="logo">
        <Logo />
      </div>
      <div class="global-navi">
        <SubPageGlobalNavi />
      </div>
    </div>
    <div class="contents">
      <div>
        <div class="icon">
          <img src="~/assets/images/icon-freamap.svg">
        </div>
        <h1 class="title">
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
      <div class="topic-path">
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
import Logo from '~/components/molecules/Logo.vue'
import AngleRight from '~/assets/icons/AngleRight.vue'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    SubPageGlobalNavi,
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

  * {
    color: #ffffff;
  }

  @include mq(md) {
    padding-top: 30px;
  }

  .head {
    height: 49px;
    display: flex;
    align-items: top;
    border-bottom: solid 1px rgba(255, 255, 255, 0.16);
    box-sizing: content-box;
    position: absolute;
    left: 0;
    width: 100%;

    @include mq(md) {
      position: static;
      height: 72px;
    }

    .logo {
      width: 120px;

      @include mq(md) {
        width: 150px;
      }
    }

    > .global-navi {
      display: none; //グローバルメニューはハンバーガーメニュー化するが一時的に消しておく

      @include mq(md) {
        flex-grow: 1;
        height: calc(100% + 2px);
        display: flex;
        justify-content: flex-end;
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

    .title {
      margin-top: 5px;
      height: 64px;
      font-weight: bold;
      font-size: 3.5rem;
      text-align: center;

      @include mq(md) {
        font-size: 4.3rem;
      }
    }

    .sub-title {
      margin-top: 8px;
      height: 25px;
      text-align: center;
      font-size: 1.5rem;
      font-family: 'Poppins';

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

        @include mq(md) {
          font-size: 1.3rem;
        }
      }

      :first-child {
        font-weight: bold;
      }

      .path {
        display: flex;

        > :nth-child(n) {
          margin-left: 20px;
        }
      }

      .topic-angle {
        width: 19px;

        svg {
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
    top: 0;
    left: 0;
    transform: translate(-47%, 10%);
    width: 60%;
  }

  .right {
    @extend .gooey;
    top: 0;
    right: 0;
    transform: translate(56%, -32%);
    width: 65%;
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
