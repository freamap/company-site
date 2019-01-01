<template>
  <div class="works">
    <div class="work">
      <WorkCard
        title="タイトル１"
        img="/img/philosophy-cover.png"
        img-alt="サムネイル１"
        description="説明文１説明文１説明文１説明文１説明文１説明文１"
      />
    </div>
    <div class="work">
      <WorkCard
        :img-right="true"
        title="タイトル２"
        img="/img/philosophy-cover.png"
        img-alt="サムネイル2"
        description="説明文２説明文２説明文２説明文２説明文２"
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
    ...mapState('work', ['works'])
  },
  methods: {
    ...mapActions(['changePage']),
    moreNewsButtonOnClick() {
      return true
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
