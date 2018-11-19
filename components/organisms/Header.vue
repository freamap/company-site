<template>
  <div class="header container">
    <div class="head">
      <GlobalNavi />
    </div>
    <div class="contents">
      <div class="logo">
        <img src="~/assets/images/freamap-logo-vert--light.svg">
      </div>
      <div class="title">
        BE YOURSELF, BE LIKE YOU.
      </div>
      <div class="explain">
        株式会社フリーマップのウェブサイトへようこそ！ わたしたちは、”個人の時代”に生きる人々のワーク & ライフに貢献するデジタルテクノロジーが得意な会社です。
      </div>
      <div class="more">
        ボタン(さらに詳しく)
      </div>
    </div>
    <div class="blog-update update-info">
      <HeaderUpdateInfo
        title="BLOG"
        update="2018/05/29"
      />
    </div>
    <div class="works-update update-info">
      <HeaderUpdateInfo
        title="WORKS"
        update="2018/05/29"
      />
    </div>
  </div>
</template>

<script>
import GlobalNavi from '~/components/molecules/GlobalNavi.vue'
import HeaderUpdateInfo from '~/components/molecules/HeaderUpdateInfo.vue'
import { mapState } from 'vuex'

export default {
  components: {
    GlobalNavi,
    HeaderUpdateInfo
  },
  computed: {
    ...mapState('pages', ['pages'])
  }
}
</script>

<style scoped lang="scss">
.header {
  background-color: $primary;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  color: #ffffff;

  > .head {
    height: 92px;
    border-bottom: solid 1px rgba(255, 255, 255, 0.16);
    box-sizing: content-box;
  }

  > .contents {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .logo {
      width: 90px;

      img {
        width: 100%;
        object-fit: contain;
      }
    }

    .title {
      font-family: Poppins;
      font-size: 5em;
      font-weight: bold;
      margin-top: 90px;
      letter-spacing: 0.35em;
      text-align: center;
    }

    .explain {
      margin-top: 26px;
      font-size: 1.5em;
    }

    .more {
      margin-top: 50px;
    }
  }

  .blog-update {
    transform: rotate(90deg);
    position: absolute;
    left: 40px;
    top: 50%;
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
}
</style>
