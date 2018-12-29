<template>
  <div class="philosophy-page">
    <div class="image">
      <img src="~/assets/images/philosophy-cover.png">
    </div>
    <div class="content">
      <section class="philosophy">
        <h2 class="sub-title">
          <span class="title-en">PHILOSOPHY</span>
        </h2>
        <div class="title">自由と夢への地図を描く。</div>
        <div class="text">
          <p>
            テクノロジーの進歩は、情報の流通やマネジメントの効率化に貢献することで、豊かな社会の実現を後押ししてきました。一方、多種多様な価値観を持つ人々で構成される社会において、最大公約数をとるような平準化の思想でテクノロジーが実装されてきた歴史は、ミクロの視点でみれば、パーソナリティの犠牲を代償にして成り立っている社会ともいえるのではないでしょうか。
          </p>
          <p>
            わたしたちが見据える未来は、人々が自分のためのテクノロジーを手にすることによって、「自由」や「夢」を遠い夢物語としてではなく、地続きの未来として捉え、一人ひとりが存分にクリエイティビティを発揮できる社会です。「個人の時代」とも言われる現代に、個人のためのデジタルツールを提供することで、その時代をドライブさせる一翼を担いたいと考えています。
          </p>
        </div>
      </section>
      <section class="tagline">
        <h2 class="sub-title">
          <span class="title-en">TAGLINE</span>
        </h2>
        <div class="title">Be yourself, be like you ─ 自分らしく、あなたらしく</div>
        <div class="text">
          <p>
            わたしたちが「自分らしさとは何か？」を考えるとき、あなたらしさ ─ つまり、他者からも肯定されるアイデンティティを、ほんとうの意味での「自分らしさ」として定義しています。社会の中で自分を貫くことは、えてして独りよがりになりがちです。しかし、主観一辺倒の自分らしさではなく、周囲に認められる自分らしさ( = あなたらしさ)を体現し続けることこそ、「自由」や「夢」を手にする出発点になると考えています。その一歩を踏み出す力強さ、佇まいを、“Be yourself, be like you.” というタグラインに込めました。
          </p>
        </div>
      </section>
    </div>
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
  async fetch({ app, route, store, params }) {
    let page = app.getPage('philosophy')
    let topicPath = [
      {
        url: page.url,
        title: page.title
      }
    ]
    store.dispatch('setPage', {
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
.philosophy-page {
  padding: 25px 20px 70px 20px;

  @include mq(md) {
    padding: 40px 70px 120px 70px;
  }

  .image {
    width: 100%;

    img {
      width: 100%;
      object-fit: contain;
    }
  }

  .content {
    padding: 30px 0 0 0;

    @include mq(md) {
      padding: 50px 70px 0 70px;
    }
  }

  .sub-title {
    display: flex;
    align-content: center;

    .title-en {
      color: $primary;
      font-family: Poppins;
      font-weight: bold;
      position: relative;

      &::after {
        position: absolute;
        top: 50%;
        right: -10px;
        content: '';
        width: 40px;
        height: 1px;
        background-color: $primary;
        transform: translate(100%, 0);
      }
    }
  }

  .title {
    margin-top: 10px;
    margin-bottom: 20px;
    font-size: 1.8rem;
    font-weight: bold;

    @include mq(md) {
      font-size: 2.8rem;
      margin-top: 20px;
      margin-bottom: 40px;
    }
  }

  .text {
    p:nth-of-type(n + 2) {
      margin-top: 30px;

      @include mq(md) {
        margin-top: 35px;
      }
    }
  }
  .tagline {
    margin-top: 60px;

    @include mq(md) {
      margin-top: 90px;
    }
  }
}
</style>
