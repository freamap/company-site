<template>
  <div
    :style="subPageHeaderStyle"
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
        <div class="title">
          {{ pageContents.title }}
        </div>
        <div class="sub-title">
          {{ pageContents.subTitle }}
        </div>
        <div
          v-show="pageContents.description"
          class="description"
        >
          {{ pageContents.description }}
        </div>
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
    }
  },
  computed: {
    pageContents() {
      return this.pages[this.currentOriginPageName]
    },

    subPageHeaderStyle() {
      let style = {
        maxHeight: '528px',
        paddingBottom: '50px'
      }

      if (this.pageContents.description) {
        return {
          ...style,
          maxHeight: '660px'
        }
      }

      if (this.upContents === false) {
        return {
          ...style,
          paddingBottom: '0px'
        }
      }
      return style
    },
    // topicPath() {
    //   let path = this.url.split('/').filter(urlPath => urlPath)

    //   let topics = []
    //   topics.push(this.pages[path[0]])

    //   if (path.length > 1) {
    //     let details
    //     switch (path[0]) {
    //       case 'news':
    //         details = this.news
    //         break
    //     }
    //     let detail = details.filter(detail => {
    //       return Number(detail.id) === Number(path[1])
    //     })

    //     if (detail.length > 0) {
    //       topics.push({
    //         ...detail[0],
    //         url: this.url
    //       })
    //     }
    //   }

    //   return topics
    // },
    ...mapState(['currentOriginPageName', 'topicPath']),
    ...mapState('pages', ['pages']),
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
      display: none;

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
      color: #ffffff;

      @include mq(md) {
        font-size: 4.3rem;
      }
    }

    .sub-title {
      margin-top: 8px;
      height: 25px;
      text-align: center;
      font-size: 1.5rem;
      color: #ffffff;
      font-family: 'Poppins';

      @include mq(md) {
        font-size: 1.8rem;
      }
    }

    .description {
      margin-top: 29px;
      text-align: center;
      font-size: 1.1rem;
      color: #ffffff;

      @include mq(md) {
        font-size: 1.3rem;
      }
    }

    .topic-path {
      position: absolute;
      display: flex;
      bottom: 25px;
      left: 0;
      color: #ffffff;
      font-size: 1.1rem;

      @include mq(md) {
        font-size: 1.3rem;
      }

      a:nth-child(n) {
        cursor: pointer;
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
          fill: currentColor;
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
</style>
