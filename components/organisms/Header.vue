<template>
  <div class="header container">
    <div class="head">
      <div>
        <GlobalNavi />
      </div>
    </div>
    <div class="contents">
      <div class="logo">
        <img src="~/assets/images/freamap-logo-vert--light.svg">
      </div>
      <div class="title">
        BE YOURSELF, BE LIKE YOU.
      </div>
      <div class="description">
        株式会社フリーマップのウェブサイトへようこそ！ わたしたちは、”個人の時代”に生きる人々のワーク & ライフに貢献するデジタルテクノロジーが得意な会社です。
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
        update="2018/05/29"
      />
    </div>
    <div class="works-update update-info">
      <HeaderUpdateInfo
        :link="pages.works.url"
        title="WORKS"
        update="2018/05/29"
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
  </div>
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
    ...mapState('pages', ['pages'])
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

  > .head {
    position: relative;

    > div {
      position: absolute;
      width: 100%;
      height: 92px;
      border-bottom: solid 1px rgba(255, 255, 255, 0.16);
    }
  }

  > .contents {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;

    .logo {
      width: 90px;

      img {
        width: 100%;
        object-fit: contain;
      }
    }

    .title {
      font-family: Poppins;
      font-size: 5rem;
      font-weight: bold;
      margin-top: 90px;
      letter-spacing: 1rem;
      text-align: center;
    }

    .description {
      margin-top: 26px;
      font-size: 1.5rem;
      text-align: center;
    }

    .more {
      margin-top: 50px;
    }
  }

  .blog-update {
    transform: rotate(90deg);
    left: 40px;
  }

  .works-update {
    transform: rotate(-90deg);
    right: 40px;
  }

  .update-info {
    position: absolute;
    top: 50%;

    > div {
      position: absolute;
      bottom: 0;
      transform: translate(-50%, 0);
      height: 19px;
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
      bottom: 81px;
      display: flex;
      justify-content: center;

      svg {
        height: 22px;
        fill: currentColor;
      }
    }
  }
}
</style>
