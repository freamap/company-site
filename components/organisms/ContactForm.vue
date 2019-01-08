<template>
  <div class="contact-form">
    <div class="title">
      <InputText
        label="件名*"
        placeholder=""
      />
    </div>
    <div class="mail-address">
      <InputText
        label="連絡先メールアドレス*"
        placeholder="メールアドレスを入力"
      />
    </div>
    <div class="body">
      <InputText
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

export default {
  components: {
    Button,
    InputText
  },
  methods: {
    submitButtonOnClick() {
      console.lgo('submit')
    }
  }
}
</script>

<style lang="scss" scoped>
.contact-form {
  .title {
    margin-bottom: 30px;
  }

  .mail-address {
    margin-bottom: 30px;
  }

  .body {
    margin-bottom: 30px;
  }

  .submit-button {
    display: flex;
    justify-content: center;
  }
}
</style>
