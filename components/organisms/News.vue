<template>
  <div>
    <article
      v-for="detail in showNews"
      :key="detail.news_id"
      class="content"
    >
      <div class="create">
        <time
          :datetime="detail.create | formatDateTimeTag"
        >
          {{ detail.create | formatDate }}
        </time>
      </div>
      <compnent
        :is="tag"
        class="title"
      >
        {{ detail.title }}
      </compnent>
      <div class="detail-button">
        <nuxt-link
          :to="{path: '/news/' + detail.news_id}"
          tag="div"
        >
          <ArrowDown />
        </nuxt-link>
      </div>
    </article>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ArrowDown from '~/assets/icons/ArrowDown.vue'

export default {
  components: {
    ArrowDown
  },
  props: {
    length: {
      type: Number,
      default: Number.MAX_VALUE,
      required: false
    },
    headLineLevel: {
      type: Number,
      default: 3,
      required: false
    }
  },
  computed: {
    ...mapState('news', ['news']),
    showNews() {
      return this.news.filter((value, index) => {
        return index < this.length
      })
    },
    tag() {
      return `h${this.headLineLevel}`
    }
  },
  methods: {
    ...mapActions(['changePage'])
  }
}
</script>

<style scoped lang="scss">
.content {
  display: flex;
  border-top: 1px solid #e8e9ea;
  box-sizing: border-box;
  flex-direction: column;
  padding: 20px 0px;

  @include mq(sm) {
    align-items: center;
    flex-direction: row;
    padding: 50px 20px;
    min-height: 138px;
  }

  .create {
    @include mq(sm) {
      margin-right: 75px;
      flex-basis: 78px;
    }
  }

  .title {
    font-size: inherit;
    font-weight: inherit;
    word-break: break-all;
    margin-top: 25px;

    @include mq(sm) {
      flex-basis: 0;
      flex-grow: 1;
      margin-top: 0px;
      margin-right: 100px;
    }
  }

  .detail-button {
    height: 38px;
    margin-top: 15px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @include mq(sm) {
      flex-basis: 38px;
      margin-top: 0px;
      justify-content: center;
    }

    div {
      width: 38px;
      height: 100%;
      cursor: pointer;
      outline: 0;
      border: none;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        transform: rotate(-90deg);
        width: 20px;
        fill: currentColor;
      }
    }
  }

  &:last-child {
    border-bottom: 1px solid #e8e9ea;
  }
}
</style>
