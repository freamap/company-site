<template>
  <div class="company-page">
    <div>会社名</div>
    <div>株式会社freamap(読み方: フリーマップ / 英語表記: freamap Co.,Ltd)</div>
    <div>創業日</div>
    <div>2018年5月28日</div>
    <div>事業内容</div>
    <div>ウェブサービス及びアプリケーションソフトウェアの企画、開発、販売、保守及びメンテナンス</div>
    <div>資本金</div>
    <div>1,000,000円</div>
    <div>代表取締役</div>
    <div>中藤 恭平</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  layout: 'sub',
  head() {
    return {
      title: this.title
    }
  },
  async fetch({ app, store, route }) {
    let page = app.getPage('company')
    let topicPath = [
      {
        url: page.url,
        title: page.title
      }
    ]
    store.dispatch('setPage', {
      topicPath: topicPath,
      originPage: page,
      url: route.fullPath
    })
  },
  computed: {
    ...mapState(['title'])
  }
}
</script>

<style lang="scss" scoped>
.company-page {
  padding: 90px 140px 120px 140px;
  display: flex;
  flex-wrap: wrap;

  > div {
    height: 102px;
    display: flex;
    align-items: center;
    padding: 0 40px;
    border-bottom: solid 1px #e8e9ea;
    font-size: 1.5rem;

    &:nth-of-type(2n + 1) {
      flex-basis: 230px;
      border-left: solid 1px #e8e9ea;
      border-right: solid 1px #e8e9ea;
      font-weight: bold;
    }

    &:nth-of-type(2n) {
      flex-basis: calc(100% - 230px);
      border-right: solid 1px #e8e9ea;
    }

    &:first-of-type {
      border-radius: 3px 0 0 0;
      border-top: solid 1px #e8e9ea;
    }

    &:nth-of-type(2) {
      border-radius: 0 3px 0 0;
      border-top: solid 1px #e8e9ea;
    }

    &:last-of-type {
      border-radius: 0 0 3px 0;
    }

    &:nth-last-of-type(2) {
      border-radius: 0 0 0 3px;
    }
  }
}
</style>
