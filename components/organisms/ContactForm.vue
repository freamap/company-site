<template>
  <form class="contact-form">
    <div class="title">
      <InputSelect
        :error="errorTitleMessage"
        :default-value="selectTitle"
        v-model="title"
        label="件名*"
      >
        <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
        >
          {{ option.text }}
        </option>
      </InputSelect>
    </div>
    <div class="name">
      <InputText
        :error="errorNameMessage"
        v-model="name"
        label="名前*"
        placeholder="名前を入力"
      />
    </div>
    <div class="mail-address">
      <InputText
        :error="errorMailAddressMessage"
        v-model="mailAddress"
        label="連絡先メールアドレス*"
        placeholder="メールアドレスを入力"
      />
    </div>
    <div class="body">
      <InputText
        :textarea="true"
        :error="errorBodyMessage"
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
  </form>
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
  props: {
    selectTitle: {
      type: String,
      default: '0',
      required: false
    }
  },
  data() {
    return {
      title: this.selectTitle,
      name: '',
      mailAddress: '',
      options: [
        {
          value: '0',
          text: 'ご用件を選択してください'
        },
        {
          value: '1',
          text: '仕事の依頼に関するお問い合わせ'
        },
        {
          value: '2',
          text: '採用に関するお問い合わせ'
        },
        {
          value: '3',
          text: 'その他のお問い合わせ'
        }
      ],
      body: '',
      errorTitleMessage: '',
      errorNameMessage: '',
      errorMailAddressMessage: '',
      errorBodyMessage: ''
    }
  },
  methods: {
    submitButtonOnClick() {
      let error = false

      if (this.title === '0') {
        this.errorTitleMessage = '件名を選択してください。'
        error = true
      } else {
        this.errorTitleMessage = ''
      }

      if (!this.name) {
        this.errorNameMessage = '名前を入力してください。'
        error = true
      } else {
        this.errorNameMessage = ''
      }

      if (!this.mailAddress) {
        this.errorMailAddressMessage = 'メールアドレスを入力してください。'
        error = true
      } else {
        this.errorMailAddressMessage = ''
      }

      if (!this.body) {
        this.errorBodyMessage = '本文を入力してください。'
        error = true
      } else {
        this.errorBodyMessage = ''
      }

      if (!error) {
        let request = {
          title: this.options.filter(option => {
            return option.value === this.title
          })[0].text,
          name: this.name,
          mailAddress: this.mailAddress,
          body: this.body
        }
        this.$emit('submit', request)
      }
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

  .mail-address,
  .name {
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
