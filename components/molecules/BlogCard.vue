<template>
  <div
    class="blog-card"
    @click="onClick"
  >
    <Card
      :horizontal="true"
    >
      <template slot="thumbnail">
        <div class="thumbnail">
          <img
            :src="thumbnailUrl"
            :style="thumbnailStyle"
          >
          <div
            v-if="blog.category"
            class="category"
          >
            {{ blog.category }}
          </div>
        </div>
      </template>
      <template slot="contents">
        <div class="contents">
          <h2 class="title">
            {{ blog.title }}
          </h2>
          <!-- <div class="description">
            {{ blog.description }}
          </div> -->
          <div
            class="description"
            v-html="blog.description"
          />
          <div class="update">
            {{ blog.update | formatDate }}
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Card from '~/components/atoms/Card.vue'

export default {
  components: {
    Card
  },
  props: {
    blog: {
      type: Object,
      default: undefined,
      required: true
    }
  },
  computed: {
    thumbnailUrl() {
      if (this.blog.thumbnail) {
        return this.blog.thumbnail
      }
      return 'https://blog.freamap.co.jp/wp-content/themes/affinger5/images/no-img.png'
    },
    thumbnailStyle() {
      if (this.blog.thumbnail) {
        return {}
      }

      return {
        objectFit: 'cover',
        height: '100%',
        width: '100%'
      }
    }
  },
  methods: {
    onClick: function(event) {
      event.value = this.blog
      this.$emit('click', event)
    }
  }
}
</script>

<style scoped lang="scss">
.blog-card {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;

  .thumbnail {
    flex-basis: 230px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    @include mq(md) {
      flex-basis: 300px;
    }

    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }

    .category {
      position: absolute;
      bottom: 0;
      right: 0;
      font-size: 1.3rem;
      background-color: #236af7;
      padding: 5px 9px;
      color: #ffffff;
    }
  }

  .contents {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    padding: 30px;

    @include mq(md) {
      padding: 30px;
    }

    .title {
      font-size: 1.8rem;
      font-weight: bold;
      width: 100%;
      max-height: 5.4rem;
      overflow: hidden;

      @include mq(sm) {
        font-size: 1.8rem;
      }
    }

    .description /deep/ {
      margin-top: 15px;
      width: 100%;
      flex: 1 1 auto;

      p {
        font-size: 1.3rem;
      }

      @include mq(sm) {
        margin-top: 15px;
      }
    }

    .update {
      margin-top: 25px;
      font-size: 1.3rem;
    }
  }
}
</style>
