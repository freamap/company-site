<template>
  <div class="sub-page-header container">
    <div class="head">
      <div class="logo">
        <Logo />
      </div>
      <div class="global-menu">
        <GlobalMenu />
      </div>
    </div>
    <div class="contents">
      <div>
        <div class="icon">
          <img src="~/assets/images/icon-freamap.svg">
        </div>
        <div class="title">
          ブログ
        </div>
        <div class="sub-title">
          blog
        </div>
        <div class="explain">
          フリーマップという社名の由来は、free + dream + map を組み合わせた造語です。 
          <br>
          テクノロジーの発展が一巡した今、わたしたちが考えること。
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GlobalMenu from '~/components/molecules/GlobalMenu.vue'
import Logo from '~/components/molecules/Logo.vue'

export default {
  components: {
    GlobalMenu,
    Logo
  }
}
</script>

<style scoped lang="scss">
.sub-page-header {
  padding-top: 30px;
  height: 80vh;
  display: flex;
  flex-direction: column;
  background-color: $primary;

  .head {
    height: 72px;
    display: flex;
    align-items: top;
    border-bottom: solid 1px rgba(255, 255, 255, 0.16);
    box-sizing: content-box;

    .logo {
      width: 150px;
    }

    > .global-menu {
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
  }
}
</style>
