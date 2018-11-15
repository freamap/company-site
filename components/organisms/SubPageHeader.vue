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
        <GlobalNavi />
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
          v-show="pageContents.explain"
          class="explain"
        >
          {{ pageContents.explain }}
        </div>
      </div>
      <div class="topic-path">
        <div><a @click="pathClick">TOP</a></div>
        <div
          v-for="topic in topicPath"
          :key="topic"
          class="path"
        >
          <span>></span>
          <span><a @click="pathClick">{{ topic }}</a></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GlobalNavi from '~/components/molecules/GlobalNavi.vue'
import Logo from '~/components/molecules/Logo.vue'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    GlobalNavi,
    Logo
  },
  computed: {
    pageContents() {
      return this.page[this.currentOriginPageName]
    },

    subPageHeaderStyle() {
      let style = {
        maxHeight: '528px',
        paddingBottom: '50px'
      }

      if (this.pageContents.explain) {
        return {
          ...style,
          maxHeight: '660px'
        }
      }

      if (this.currentOriginPageName === 'blog') {
        return {
          ...style,
          paddingBottom: '0px'
        }
      }
      return style
    },
    topicPath() {
      let path = this.url.split('/').filter(urlPath => urlPath)
      return path.map(name => {
        return this.page[name].title
      })
    },
    ...mapState(['url', 'currentOriginPageName']),
    ...mapState('const', ['page'])
  },
  methods: {
    pathClick(event) {
      this.changePage('blog')
    },
    ...mapActions(['changePage'])
  }
}
</script>

<style scoped lang="scss">
.sub-page-header {
  height: 100vh;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  background-color: $primary;
  transition: max-height 0.4s ease-in-out;

  .head {
    height: 72px;
    display: flex;
    align-items: top;
    border-bottom: solid 1px rgba(255, 255, 255, 0.16);
    box-sizing: content-box;

    .logo {
      width: 150px;
    }

    > .global-navi {
      flex-grow: 1;
      height: calc(100% + 2px);
      display: flex;
      justify-content: flex-end;
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
      font-size: 43px;
      text-align: center;
      color: #ffffff;
    }

    .sub-title {
      margin-top: 8px;
      height: 25px;
      text-align: center;
      font-size: 18px;
      color: #ffffff;
      font-family: 'Poppins';
    }

    .explain {
      margin-top: 29px;
      text-align: center;
      font-size: 13px;
      color: #ffffff;
    }

    .topic-path {
      position: absolute;
      display: flex;
      bottom: 25px;
      left: 0;
      color: #ffffff;
      font-size: 13px;

      :first-child {
        font-weight: bold;
      }

      .path {
        a:nth-child(n) {
          cursor: pointer;
        }

        > :nth-child(n) {
          margin-left: 20px;
        }
      }
    }
  }
}
</style>
