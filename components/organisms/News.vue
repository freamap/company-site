<template>
  <div>
    <article
      v-for="detail in showNews"
      :key="detail.news_id"
      class="content"
    >
      <time
        :datetime="detail.create | formatDateTimeTag"
        class="create"
      >
        {{ detail.create | formatDate }}
      </time>
      <h2 class="description">
        {{ detail.title ? detail.title : detail.description }}
      </h2>
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
    }
  },
  computed: {
    ...mapState('news', ['news']),
    showNews() {
      return this.news.filter((value, index) => {
        return index < this.length
      })
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
  align-items: center;
  padding: 0 20px;
  font-size: 1.5rem;
  border-top: 1px solid #e8e9ea;
  min-height: 138px;
  box-sizing: content-box;

  .create {
    margin-right: 75px;
    flex-basis: 78px;
  }

  .description {
    flex-basis: 0;
    flex-grow: 1;
    margin-right: 100px;
    font-size: inherit;
    font-weight: inherit;
  }

  .detail-button {
    flex-basis: 38px;
    height: 38px;

    div {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      outline: 0;
      border: none;
      padding: 0;

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
