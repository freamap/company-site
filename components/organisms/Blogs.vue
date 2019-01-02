<template>
  <div class="blogs">
    <div
      v-for="blog in blogs"
      :key="blog.id"
      class="blog"
    >
      <BlogCard
        :title="blog.title"
        :description="blog.description"
        :update="blog.update"
        :thumnail="blog.thumbnail"
        :thumnail-alt="blog.thumbnailAlt"
        :category="blog.category"
      />
      <!-- <Card
        :title="blog.title"
        :description="blog.description"
        :update="blog.update"
        :thumbnail="blog.thumbnail"
        :thumbnail-alt="blog.thumbnailAlt"
        :category="blog.category"
        :head-line-level="2"
      /> -->
    </div>
  </div>
</template>

<script>
import Card from '~/components/atoms/Card.vue'
import { mapState } from 'vuex'
import BlogCard from '~/components/molecules/BlogCard.vue'

export default {
  components: {
    BlogCard
  },
  computed: {
    ...mapState('blogs', ['blogs'])
  }
}
</script>

<style lang="scss" scoped>
.blogs {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: -10px 0;

  .blog {
    flex-basis: 100%;
    margin-bottom: 20px;

    @include mq(sm) {
      flex-basis: calc((100% - 20px) / 2);
      max-width: 400px;

      &:nth-of-type(2n) {
        margin-left: 20px;
      }
    }

    @include mq(md) {
      flex-basis: calc((100% - 40px) / 3);

      &:nth-of-type(2n) {
        margin-left: 0px;
      }

      &:nth-of-type(3n + 2) {
        margin-right: 20px;
        margin-left: 20px;
      }
    }
  }
}
</style>
