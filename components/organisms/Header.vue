<template>
  <header class="header container">
    <div class="head">
      <div>
        <div>
          <GlobalNavi />
        </div>
      </div>
    </div>
    <div class="contents">
      <h1 class="logo">
        <img
          src="~/assets/images/freamap-logo-vert--light.svg"
          alt="freamap"
        >
      </h1>
      <div class="title">
        <nobr>
          BE YOURSELF, <wbr>BE LIKE YOU.
        </nobr>
      </div>
      <div class="description">
        株式会社フリーマップのウェブサイトへようこそ！
        <br>
        わたしたちは、”個人の時代”に生きる人々のワーク & ライフに貢献する
        デジタルテクノロジーが得意な会社です。
      </div>
      <div class="more">
        <Button
          padding="0 28px"
          type="line"
          @click="moreButtonOnClick"
        >
          さらに詳しく
        </Button>
      </div>
    </div>
    <div class="blog-update update-info">
      <HeaderUpdateInfo
        :link="pages.blog.url"
        title="BLOG"
        update="2018-05-29"
      />
    </div>
    <div class="works-update update-info">
      <HeaderUpdateInfo
        :link="pages.works.url"
        title="WORKS"
        update="2018-05-29"
      />
    </div>
    <div class="gooey left">
      <img src="~/assets/images/gooey--left.svg">
    </div>
    <div class="gooey right">
      <img src="~/assets/images/gooey--right.svg">
    </div>
    <div class="arrow-down">
      <div>
        <ArrowDown />
      </div>
    </div>
  </header>
</template>

<script>
import GlobalNavi from '~/components/molecules/GlobalNavi.vue'
import HeaderUpdateInfo from '~/components/molecules/HeaderUpdateInfo.vue'
import Button from '~/components/atoms/Button.vue'
import ArrowDown from '~/assets/icons/ArrowDown.vue'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    GlobalNavi,
    HeaderUpdateInfo,
    Button,
    ArrowDown
  },
  computed: {
    pages() {
      return this.$store.app.getPages()
    }
  },
  methods: {
    moreButtonOnClick: function(event) {
      this.changePage(this.pages.philosophy.url)
    },
    ...mapActions(['changePage'])
  }
}
</script>

<style scoped lang="scss">
.header {
  background-color: $primary;
  height: 100vh;
  width: 100%;
  color: #ffffff;
  box-sizing: border-box;
  min-height: 667px;

  @include mq(md) {
    min-height: 900px;
  }

  > .head {
    @include mq(md) {
      display: block;
      position: relative;
    }

    > div {
      position: absolute;
      left: 0;
      width: 100vw;
      height: 63px;
      border-bottom: solid 1px rgba(255, 255, 255, 0.16);

      > div {
        display: none; //グローバルメニューはハンバーガーメニュー化するが一時的に消しておく
        height: 100%;
      }

      @include mq(md) {
        width: 100%;
        height: 92px;

        > div {
          display: block;
        }
      }
    }
  }

  > .contents {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;

    .logo {
      width: 80px;

      @include mq(md) {
        width: 90px;
      }

      img {
        width: 100%;
        object-fit: contain;
      }
    }

    .title {
      font-family: Poppins;
      font-size: 3rem;
      font-weight: bold;
      margin-top: 64px;
      letter-spacing: 1rem;
      text-align: center;

      @include mq(sm) {
        font-size: 4rem;
      }
      @include mq(md) {
        margin-top: 90px;
      }
      @include mq(lg) {
        font-size: 5rem;
        line-height: 64px;
      }
    }

    .description {
      margin-top: 15px;
      font-size: 1.1rem;
      text-align: center;
      line-height: 22px;
      max-width: 485px;

      @include mq(sm) {
        font-size: 1.3rem;
        line-height: 26px;
      }
      @include mq(md) {
        margin-top: 26px;
      }
      @include mq(lg) {
        font-size: 1.5rem;
        line-height: 32px;
      }
    }

    .more {
      margin-top: 30px;

      @include mq(md) {
        margin-top: 50px;
      }
    }
  }

  .blog-update {
    position: absolute;
    top: 22px;
    left: 20px;
    padding-bottom: 22px;

    @include mq(md) {
      transform: rotate(90deg);
      left: 40px;
    }
  }

  .works-update {
    display: none;

    @include mq(md) {
      display: block;
      transform: rotate(-90deg);
      right: 40px;
    }
  }

  .update-info {
    @include mq(md) {
      position: absolute;
      top: 50%;
    }

    > div {
      @include mq(md) {
        position: absolute;
        bottom: 0;
        transform: translate(-50%, 0);
        height: 19px;
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
    width: 60%;
  }

  .right {
    @extend .gooey;
    top: 50%;
    right: 0;
    transform: translate(49%, -77%);
    width: 70%;
  }

  .arrow-down {
    width: 100%;
    position: relative;

    > div {
      width: 100%;
      position: absolute;
      bottom: 61px;
      display: flex;
      justify-content: center;

      @include mq(md) {
        bottom: 81px;
      }

      svg {
        height: 22px;
        fill: currentColor;
      }
    }
  }
}
</style>
