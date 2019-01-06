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
            :src="blog.thumbnail"
            :alt="blog.thumbnailAlt"
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
          <div class="description">
            {{ blog.description }}
          </div>
          <div class="update">
            {{ blog.update }}
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

  .thumbnail {
    height: 230px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    @include mq(sm) {
      height: 300px;
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
    padding: 30px;

    @include mq(md) {
      padding: 30px;
    }

    .title {
      font-size: 1.8rem;
      font-weight: bold;
      width: 100%;

      @include mq(sm) {
        font-size: 1.8rem;
      }
    }

    .description {
      margin-top: 15px;
      width: 100%;
      font-size: 1.3rem;

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
