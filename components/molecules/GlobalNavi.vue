<template>
  <div class="global-navi">
    <Tabs
      :value="tabValue"
      @change="onChange"
    >
      <Tab
        :value="page.philosophy.url"
        :label="page.philosophy.title"
        label-position="top"
        padding="9px 15px 0 15px"
      />
      <Tab
        :value="page.works.url"
        :label="page.works.title"
        label-position="top"
        padding="9px 15px 0 15px"
      />
      <Tab
        :value="page.blog.url"
        :label="page.blog.title"
        label-position="top"
        padding="9px 15px 0 15px"
      />
      <Tab
        :value="page.company.url"
        :label="page.company.title"
        label-position="top"
        padding="9px 15px 0 15px"
      />
      <Tab
        :value="page.recruit.url"
        :label="page.recruit.title"
        label-position="top"
        padding="9px 15px 0 15px"
      />
      <Tab
        :value="page.contact.url"
        :label="page.contact.title"
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
    tabValue() {
      return this.page[this.currentOriginPageName].url
    },
    ...mapState(['currentOriginPageName']),
    ...mapState('const', ['page'])
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
}
</style>
