<template>
  <div class="footer-global-navi">
    <div
      v-for="key in globalLinkPage"
      :key="key"
      @click="click(pages[key].url)"
    >
      {{ pages[key].title }}
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState(['currentOriginPageName']),
    ...mapState('pages', ['pages']),
    globalLinkPage() {
      return Object.keys(this.pages).filter(key => {
        return key !== 'top'
      })
    }
  },
  methods: {
    click: function(value) {
      this.changePage(value)
    },
    ...mapActions(['changePage'])
  }
}
</script>

<style scoped lang="scss">
.footer-global-navi {
  color: #191919;
  font-size: 15px;
  font-family: Proxima Nova;
  display: flex;

  > div {
    margin-left: 25px;
    margin-right: 25px;
    cursor: pointer;
  }
}
</style>
