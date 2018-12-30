<template>
  <div class="company-page">
    <section>
      <h2>会社名</h2>
      <div>株式会社freamap(読み方: フリーマップ / 英語表記: freamap Co.,Ltd)</div>
    </section>
    <section>
      <h2>創業日</h2>
      <div>
        <time
          :datetime="'2018-05-28' | formatDateTimeTag"
        >
          2018年5月28日
        </time>
      </div>
    </section>
    <section>
      <h2>事業内容</h2>
      <div>ウェブサービス及びアプリケーションソフトウェアの企画、開発、販売、保守及びメンテナンス</div>
    </section>
    <section>
      <h2>資本金</h2>
      <div>1,000,000円</div>
    </section>
    <section>
      <h2>代表取締役</h2>
      <div>中藤 恭平</div>
    </section>
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
    await store.dispatch('setPage', {
      topicPath: topicPath,
      originPage: page,
      title: page.title
    })
  },
  computed: {
    ...mapState(['title'])
  }
}
</script>

<style lang="scss" scoped>
.company-page {
  padding: 25px 20px 70px 20px;
  display: flex;
  flex-wrap: wrap;

  @include mq(md) {
    padding: 90px 140px 120px 140px;
  }

  > section {
    min-height: 102px;
    width: 100%;
    display: flex;
    border-bottom: solid 1px #e8e9ea;
    border-left: solid 1px #e8e9ea;
    border-right: solid 1px #e8e9ea;
    flex-direction: column;

    @include mq(md) {
      flex-direction: row;
    }

    &:first-of-type {
      border-radius: 3px 3px 0 0;
      border-top: solid 1px #e8e9ea;
    }

    &:last-of-type {
      border-radius: 0 0 3px 3px;
    }

    > * {
      display: flex;
      align-items: center;
      padding: 15px;

      @include mq(md) {
        padding: 40px;
      }
    }

    > h2 {
      border-right: none;
      border-bottom: solid 1px #e8e9ea;
      font-weight: bold;
      justify-content: center;

      @include mq(md) {
        flex-basis: 230px;
        border-right: solid 1px #e8e9ea;
        border-bottom: none;
        justify-content: flex-start;
      }
    }

    > div {
      flex-basis: 0;
      flex-grow: 1;
    }
  }
}
</style>
