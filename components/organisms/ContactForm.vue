<template>
  <div class="contact-form">
    <div class="title">
      <InputSelect
        v-model="title"
        label="件名*"
      >
        <option value="0">ご用件を選択してください</option>
        <option value="1">仕事の依頼に関するお問い合わせ</option>
        <option value="2">採用に関するお問い合わせ</option>
        <option value="3">その他のお問い合わせ</option>
      </InputSelect>
    </div>
    <div class="mail-address">
      <InputText
        v-model="mailAddress"
        label="連絡先メールアドレス*"
        placeholder="メールアドレスを入力"
      />
    </div>
    <div class="body">
      <InputText
        :textarea="true"
        v-model="body"
        label="本文*"
        placeholder="本文を入力"
      />
    </div>
    <div class="submit-button">
      <Button
        padding="0 58px"
        @click="submitButtonOnClick"
      >
        送信
      </Button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Button from '~/components/atoms/Button.vue'
import InputText from '~/components/atoms/InputText.vue'
import InputSelect from '~/components/atoms/InputSelect.vue'

export default {
  components: {
    Button,
    InputText,
    InputSelect
  },
  data() {
    return {
      title: '',
      mailAddress: '',
      body: ''
    }
  },
  methods: {
    submitButtonOnClick() {
      console.log(this.title)
      console.log(this.mailAddress)
      console.log(this.body)
      console.log('submit')
    }
  }
}
</script>

<style lang="scss" scoped>
.contact-form {
  .title {
    margin-bottom: 20px;

    @include mq(md) {
      margin-bottom: 30px;
    }
  }

  .mail-address {
    margin-bottom: 20px;

    @include mq(md) {
      margin-bottom: 30px;
    }
  }

  .body {
    margin-bottom: 60px;

    @include mq(md) {
      margin-bottom: 70px;
    }
  }

  .submit-button {
    display: flex;
    justify-content: center;
  }
}
</style>
