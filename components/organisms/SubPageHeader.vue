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
          {{ title[0] }}
        </div>
        <div class="sub-title">
          {{ title[1] }}
        </div>
        <div
          v-show="title[2]"
          class="explain"
        >
          {{ title[2] }}
        </div>
      </div>
      <div class="topic-path">
        <span><a @click="pathClick">TOP</a></span>
        <span>></span>
        <span><a @click="pathClick">ブログ</a></span>
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
    title() {
      switch (this.currentOriginPageName) {
        case 'philosophy':
          return [
            '企業理念',
            'philosophy',
            'フリーマップという社名の由来は、free + dream + map を組み合わせた造語です。テクノロジーの発展が一巡した今、わたしたちが考えること。'
          ]
        case 'works':
          return ['開発実績', 'works', '']
        case 'blog':
          return ['ブログ', 'blog', '']
        case 'company':
          return ['企業情報', 'company', '']
        case 'recruit':
          return ['採用情報', 'recruit', '']
        case 'contact':
          return ['お問い合わせ', 'contact', '']
        default:
          return ['', '', '']
      }
    },

    subPageHeaderStyle() {
      let style = {
        maxHeight: '528px',
        paddingBottom: '50px'
      }

      if (this.title[2]) {
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
    ...mapState(['currentOriginPageName'])
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
      bottom: 25px;
      left: 0;
      color: #ffffff;
      font-size: 13px;

      a:nth-child(n) {
        cursor: pointer;
      }

      :first-child {
        font-weight: bold;
      }

      :nth-child(n + 2) {
        margin-left: 20px;
      }
    }
  }
}
</style>
