<template>
  <div class="blogs">
    <div
      v-for="blog in blogs"
      :key="blog.id"
      class="blog"
    >
      <BlogCard
        :blog="blog"
        @click="blogCardOnClick"
      />
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
  },
  methods: {
    blogCardOnClick: function(event) {
      location.href = event.value.url
    }
  }
}
</script>

<style lang="scss" scoped>
.blogs {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  margin: -10px 0;

  @include mqb(sm) {
    justify-content: start;
  }

  .blog {
    flex-basis: 100%;
    margin-bottom: 20px;
    align-self: stretch;

    @include mqb(sm) {
      flex-basis: calc((100% - 20px) / 2);

      &:nth-of-type(2n) {
        margin-left: 20px;
      }
    }

    @include mqb(md) {
      flex-basis: calc((100% - 40px) / 3);

      &:nth-of-type(2n) {
        margin-left: 0px;
      }

      &:nth-of-type(3n + 2) {
        margin-right: 20px;
        margin-left: 20px;
      }
    }

    @include mqb(lg) {
      flex-basis: calc((100% - 60px) / 4);

      &:nth-of-type(3n + 2) {
        margin-right: 0px;
        margin-left: 0px;
      }

      &:nth-of-type(4n + 2) {
        margin-left: 20px;
      }

      &:nth-of-type(4n + 3) {
        margin-left: 20px;
      }

      &:nth-of-type(4n) {
        margin-left: 20px;
      }
    }
  }
}
</style>
