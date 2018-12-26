<template>
  <div class="global-navi">
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
import Tabs from '~/components/atoms/Tabs.vue'
import Tab from '~/components/atoms/Tab.vue'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    Tabs,
    Tab
  },
  computed: {
    pages() {
      return this.$store.app.getPages()
    },
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
.global-navi {
  font-size: 1.5rem;
  font-weight: 'Medium';
  color: #ffffff;
  display: flex;
  height: 100%;

  > div {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    cursor: pointer;
  }
}
</style>
