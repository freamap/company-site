<template>
  <div class="works">
    <div class="work">
      <Card
        :horizontal="false"
      >
        <template slot="thumnail">
          <div class="thumnail">
            <img src="~/assets/images/philosophy-cover.png">
          </div>
        </template>
        <template slot="contents">
          <div class="contents">
            <div class="title">
              タイトル
            </div>
            <div class="description">
              説明文
              説明文
              説明文
              説明文
              説明文
              説明文
              説明文
              説明文
              説明文
              説明文
              説明文
            </div>
            <div class="more-button">
              ボタン
            </div>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Card from '~/components/atoms/Card.vue'

export default {
  components: {
    Card
  },
  computed: {
    ...mapState('work', ['works'])
  },
  methods: {
    ...mapActions(['changePage'])
  }
}
</script>

<style scoped lang="scss">
.works {
  .work {
    .thumnail {
      flex-basis: 100%;
      display: flex;
      align-items: center;

      @include mq(md) {
        flex-basis: calc(760 / 1240 * 100%);
      }

      img {
        width: 100%;
        object-fit: contain;
      }
    }

    .contents {
      flex-basis: auto;
      display: flex;
      align-items: center;
      flex-direction: column;
      padding: 30px 20px;

      @include mq(md) {
        flex-basis: calc(480 / 1240 * 100%);
        padding: 60px;
      }

      .title {
        font-size: 3rem;
        font-weight: bold;
        width: 100%;
      }

      .description {
        margin-top: 20px;
        width: 100%;

        @include mq(sm) {
          margin-top: 30px;
        }
      }

      .more-button {
        margin-top: 40px;
        width: 100%;

        @include mq(sm) {
          margin-top: 50px;
        }
      }
    }
  }
}
</style>
