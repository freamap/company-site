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
  justify-content: flex-start;
  margin: -10px 0;

  .blog {
    flex-basis: calc((100% - 40px) / 3);
    margin-bottom: 20px;

    &:nth-of-type(3n + 2) {
      margin-right: 20px;
      margin-left: 20px;
    }
  }
}
</style>
