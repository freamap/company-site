<template>
  <div class="global-navi">
    <div
      v-for="key in globalLinkPage"
      :key="key"
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
    ...mapState(['currentOriginPageName']),
    ...mapState('pages', ['pages']),
    globalLinkPage() {
      return Object.keys(this.pages).filter(key => {
        return key !== 'top'
      })
    }
  },
  methods: {
    onChange: function(value) {
      this.changePage(value)
    },
    ...mapActions(['changePage'])
  }
}
</script>

<style scoped lang="scss">
.global-navi {
  font-size: 15px;
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
  }
}
</style>
