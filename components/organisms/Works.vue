<template>
  <div class="works">
    <div
      v-for="(work, index) in works"
      :key="work.work_id"
      class="work"
    >
      <WorkCard
        :title="work.title"
        :description="work.description"
        :thumbnail-right="index % 2 === 1"
        thumbnail="/img/philosophy-cover.png"
        thumbnail-alt="サムネイル１"
        @click="moreButtonOnClick(work.work_id)"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import WorkCard from '~/components/molecules/WorkCard.vue'

export default {
  components: {
    WorkCard
  },
  computed: {
    ...mapState('works', ['works']),
    pages() {
      return this.$store.app.getPages()
    }
  },
  methods: {
    ...mapActions(['changePage']),
    moreButtonOnClick: function(workId) {
      this.changePage(this.pages.works.url + '/' + workId)
    }
  }
}
</script>

<style scoped lang="scss">
.works {
  .work {
    &:nth-child(n + 2) {
      margin-top: 50px;
    }
  }
}
</style>
