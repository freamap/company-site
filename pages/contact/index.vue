<template>
  <div class="contact">
    <div class="contact-container">
      <div class="description">
        お仕事のご相談やその他のお問い合わせはこちらのフォームよりお願いします。通常2営業日以内に返信いたします。お気軽にお問い合わせください。「*」マークのついた項目は入力必須です。
      </div>
      <ContactForm />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ContactForm from '~/components/organisms/ContactForm'
import axios from 'axios'

export default {
  layout: 'sub',
  head() {
    return {
      title: this.currentPage.title
    }
  },
  async fetch({ app, store, route }) {
    let page = app.getPage('contact')
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
  components: {
    ContactForm
  },
  computed: {
    ...mapState(['currentPage'])
  }
}
</script>

<style scoped lang="scss">
.contact {
  padding: 25px 20px 70px 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;

  @include mq(md) {
    padding: 90px 140px 120px 140px;
  }

  .contact-container {
    max-width: 720px;

    .description {
      font-family: Noto Sans CJK JP;
      margin-bottom: 40px;

      @include mq(md) {
        margin-bottom: 60px;
      }
    }
  }
}
</style>
