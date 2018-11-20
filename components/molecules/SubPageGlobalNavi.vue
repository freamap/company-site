<template>
  <div class="sub-page-global-navi">
    <Tabs
      :value="tabValue"
      @change="onChange"
    >
      <Tab
        :value="pages.philosophy.url"
        :label="pages.philosophy.title"
        label-position="top"
        padding="9px 15px 0 15px"
      />
      <Tab
        :value="pages.works.url"
        :label="pages.works.title"
        label-position="top"
        padding="9px 15px 0 15px"
      />
      <Tab
        :value="pages.blog.url"
        :label="pages.blog.title"
        label-position="top"
        padding="9px 15px 0 15px"
      />
      <Tab
        :value="pages.company.url"
        :label="pages.company.title"
        label-position="top"
        padding="9px 15px 0 15px"
      />
      <Tab
        :value="pages.recruit.url"
        :label="pages.recruit.title"
        label-position="top"
        padding="9px 15px 0 15px"
      />
      <Tab
        :value="pages.contact.url"
        :label="pages.contact.title"
        label-position="top"
        padding="9px 15px 0 15px"
      />
    </Tabs>
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
    tabValue() {
      return this.pages[this.currentOriginPageName].url
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
.sub-page-global-navi {
  font-size: 1.5rem;
  font-weight: 'Medium';
  color: #ffffff;
}
</style>
