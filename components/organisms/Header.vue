<template>
  <div class="header container">
    <div class="head">
      <GlobalNavi />
    </div>
    <div class="contents">
      <div class="logo">
        会社ロゴ
      </div>
      <div class="title">
        title
      </div>
      <div class="sub-title">
        subtitle
      </div>
      <div class="more">
        ボタン(さらに詳しく)
      </div>
    </div>
    <div class="blog-update">
      <div class="update-info">
        <div class="title">
          BROG
        </div>
        <hr noshade>
        <div class="update">
          2018/05/29更新
        </div>
      </div>
    </div>
    <div class="works-update">
      <div class="update-info">
        <div class="title">
          WORKS
        </div>
        <hr noshade>
        <div class="update">
          2018/05/29更新
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GlobalNavi from '~/components/molecules/GlobalNavi.vue'

export default {
  components: {
    GlobalNavi
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
    }

    .title {
      margin-top: 90px;
    }

    .sub-title {
      margin-top: 26px;
    }

    .more {
      margin-top: 50px;
    }
  }

  .blog-update {
    position: absolute;
    left: 40px;
    top: 50%;
    transform: rotate(90deg);
  }

  .works-update {
    position: absolute;
    right: 40px;
    top: 50%;
    transform: rotate(-90deg);
  }

  .update-info {
    position: absolute;
    bottom: 0;
    transform: translate(-50%, 0);
    height: 19px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-size: 13px;

    .title {
      font-weight: bold;
      margin-right: 20px;
    }

    hr {
      border: solid #ffffff;
      border-width: 0 1px 0 0;
      height: 10px;
    }

    .update {
      margin-left: 20px;
      white-space: nowrap;
    }
  }
}
</style>
