<template>
  <div class="contact-thunks">
    <div class="message">
      お問い合わせありがとうございます。後ほど担当者よりご連絡させていただきます。
    </div>
    <div class="back">
      <Button
        type="line"
        padding="0 28px"
        color="#191919"
        @click="backButtonOnClick"
      >
        トップへ戻る
      </Button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Button from '~/components/atoms/Button.vue'
import axios from 'axios'

export default {
  layout: 'sub',
  head() {
    return {
      title: this.currentPage.title,
      meta: this.metaData
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
    Button
  },
  computed: {
    ...mapState(['currentPage']),
    pages() {
      return this.$store.app.getPages()
    },
    metaData() {
      return this.$store.app.getMetaData('contactThunks')
    }
  },
  methods: {
    ...mapActions(['changePage']),
    backButtonOnClick() {
      this.changePage(this.pages.top.url)
    }
  }
}
</script>

<style scoped lang="scss">
.contact-thunks {
  padding: 25px 20px 70px 20px;

  @include mq(md) {
    padding: 90px 140px 120px 140px;
  }

  .message {
    margin-bottom: 60px;

    @include mq(md) {
      margin-bottom: 70px;
    }
  }

  .back {
    display: flex;
    justify-content: center;
  }
}
</style>
