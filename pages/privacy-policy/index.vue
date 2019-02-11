<template>
  <div class="privacy-policy-page">
    <div class="content">
      <p>
        本プライバシーポリシーは、株式会社freamap(以下「当社」という。)ホームページにおける、訪問者の個人情報もしくはそれに準ずる情報を取り扱う際に、当社が遵守する方針を示したものです。
      </p>
    </div>
    <h2>個人情報の取り扱いについて</h2>
    <h3>基本方針</h3>
    <div class="content">
      <p>
        当社では、個人情報を適切に保護することが社会的責務であり、個人情報に関する法令を遵守します。<br>
        当社ホームページで取り扱う個人情報の取得、利用、管理を適正に行います。<br>
        当社ホームページで収集した情報は、利用目的の範囲内で適切に取り扱います。
      </p>
    </div>
    <h3>適用範囲</h3>
    <div class="content">
      <p>
        本プライバシーポリシーは、当社ホームページにおいてのみ適用されます。
      </p>
    </div>
    <h3>個人情報の取得と利用目的</h3>
    <div class="content">
      <p>
        当社ホームページで取得する個人情報と利用目的、保存期間は以下の通りです。
      </p>
    </div>
    <h4>お問い合わせによる個人情報の取得</h4>
    <div class="content">
      <div class="small-content">
        <p>
          当社ホームページでは、お問い合わせフォームを設置しています。<br>
          当社ホームページ訪問者が<nuxt-link to="/contact">お問い合わせフォーム</nuxt-link>からお問い合わせを行う場合、以下の個人情報を取得します。
        </p>
        <ul>
          <li>件名</li>
          <li>名前</li>
          <li>メールアドレス</li>
          <li>お問い合わせ内容</li>
        </ul>
      </div>
      <h5>利用目的について</h5>
      <div class="small-content">
        <p>
          お問い合わせに対する回答や必要な情報を電子メールなどをでご連絡する場合に利用させていただきます。
        </p>
      </div>
      <h5>保存期間について</h5>
      <div class="small-content">
        <p>
          お問い合わせフォームより入力された個人情報は5年間保存します。
        </p>
      </div>
    </div>
    <h4>Cookieによる個人情報の取得</h4>
    <div class="content">
      <div class="small-content">
        <p>
          当社ホームページでは、訪問者のデバイスへCookieを送信する場合がございます。<br>
          Cookieとは、訪問者の使用するデバイスのブラウザとサーバとの間で送受信された入力内容などをテキストファイルとして保存しておく仕組みです。<br>
          Cookieを使用することにより、当社ホームページを訪問した回数やページなどの情報を取得することができます。<br>
          ただし、これらの情報はお客様個人を特定することのできる情報ではございません。<br>
          また、ブラウザの設定によりCookieの機能を無効にすることもできます。
        </p>
      </div>
      <h5>利用目的について</h5>
      <div class="small-content">
        <p>
          訪問者が過去にアクセスしたページ情報などに基づき、最適なコンテンツを提供するためにCookieを利用します。
        </p>
      </div>
      <h5>第三者によるCookie情報の取得について</h5>
      <div class="small-content">
        <p>
          当ブログでは、Google株式会社をはじめとする第三者の解析ツールを利用しています。<br>
          これに関連して、訪問者のCookie情報などを取得して利用している場合があります。<br>
          当該第三者によって取得されたCookie情報等は、当該第三者のプライバシーポリシーに従って取り扱われます。
        </p>
      </div>
      <h5>第三者へのCooke情報等の広告配信の利用停止について</h5>
      <div class="small-content">
        <p>
          訪問者は、当該第三者のウェブサイト内に設けられたオプトアウト（個人情報を第三者に提供することを停止すること）ページにアクセスして、当該第三者によるCookie情報等の広告配信への利用を停止することができます。
        </p>
      </div>
    </div>
    <h2>個人情報の管理</h2>
    <h2>未成年の個人情報について</h2>
    <h2>アクセス解析ツールについて</h2>
    <h2>プライバシーポリシーの変更について</h2>
    <div class="content">
      <p>
        当サイトは、個人情報に関して適用される日本の法令を遵守するとともに、本ポリシーの内容を適宜見直しその改善に努めます。<br>
        修正された最新のプライバシーポリシーは常に本ページにて開示されます。
      </p>
    </div>
    <div class="create-date">
      <div><time datetime="2019-1-21">2019年1月21日</time><span>策定</span></div>
      <div><time datetime="2019-1-21">2019年1月21日</time><span>更新</span></div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  layout: 'sub',
  head() {
    return {
      title: this.currentPage.title,
      meta: this.metaData
    }
  },
  async fetch({ app, route, store, params }) {
    let page = app.getPage('privacyPolicy')
    let topicPath = [
      {
        url: page.url,
        title: page.title
      }
    ]
    await store.dispatch('setPage', {
      topicPath: topicPath,
      originPage: page,
      currentPage: page
    })
  },
  computed: {
    ...mapState(['currentPage']),
    metaData() {
      return this.$store.app.getMetaData('privacyPolicy')
    }
  }
}
</script>

<style scoped lang="scss">
.privacy-policy-page {
  font-family: Noto Sans CJK JP;
  padding: 25px 20px 70px 20px;

  @include mq(md) {
    padding: 90px 140px 120px 140px;
  }

  h2 {
    margin-bottom: 20px;
    font-size: 1.8rem;
    font-weight: bold;

    @include mq(md) {
      font-size: 2.8rem;
      margin-bottom: 40px;
    }
  }

  h3 {
    margin-bottom: 10px;
    font-size: 1.6rem;
    font-weight: bold;

    @include mq(md) {
      font-size: 2.1rem;
      margin-top: 10px;
      margin-bottom: 20px;
    }
  }

  h4 {
    margin-bottom: 10px;
    font-size: 1.4rem;
    font-weight: bold;

    @include mq(md) {
      font-size: 1.8rem;
      margin-bottom: 20px;
    }
  }

  h5 {
    margin-bottom: 5px;
    font-size: inherit;
    font-weight: bold;

    @include mq(md) {
      margin-bottom: 10px;
    }
  }

  ul {
    margin: 12px 0;
  }

  .content {
    margin-bottom: 20px;

    @include mq(md) {
      margin-bottom: 40px;
    }
  }

  .small-content {
    margin-bottom: 15px;

    @include mq(md) {
      margin-bottom: 30px;
    }
  }

  .create-date {
    > div {
      display: flex;
      justify-content: flex-end;

      > span {
        padding-left: 12px;
      }
    }
  }
}
</style>
