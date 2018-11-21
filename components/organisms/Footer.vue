<template>
  <div class="footer">
    <div class="logo">
      <img src="~/assets/images/freamap-logo-horiz--color.svg">
    </div>
    <div class="menu">
      <div>企業理念</div>
      <div>開発実績</div>
      <div>ブログ</div>
      <div>企業情報</div>
      <div>採用情報</div>
      <div>お問い合わせ</div>
    </div>
    <div class="copyright">
      ©︎ 2018 freamap Inc.
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo {
  width: 44.2px;
  height: 43.95px;
  margin-top: 60px;
  margin-bottom: 50.05px;
}

.menu {
  color: #191919;
  font-size: 15px;
  font-family: Proxima Nova;
  display: flex;

  > div {
    margin-left: 25px;
    margin-right: 25px;
  }
}

.copyright {
  color: #767676;
  font-size: 13px;
  font-family: Noto Sans CJK JP;
  margin-top: 60px;
  margin-bottom: 55px;
}
</style>
