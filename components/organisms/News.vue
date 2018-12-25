<template>
  <div>
    <div v-if="news">
      <div
        v-for="detail in showNews"
        :key="detail.news_id"
        class="content"
      >
        <div class="create">
          {{ detail.create | formatDate }}
        </div>
        <div class="description">
          {{ detail.description }}
        </div>
        <div class="detail-button">
          <nuxt-link
            :to="{path: '/news/' + detail.news_id}"
            tag="div"
          >
            <ArrowDown />
          </nuxt-link>
        </div>
      </div>
    </div>
    <div v-else>
      取得中
    </div>
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
      default: -1,
      required: false
    }
  },
  computed: {
    ...mapState('news', ['news']),
    showNews() {
      if (this.length === -1) {
        return this.news
      }
      return this.news.slice(0, this.length)
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
