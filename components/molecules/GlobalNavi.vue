<template>
  <div class="global-navi">
    <Tabs
      :value="tabValue"
      @change="onChange"
    >
      <Tab
        label="企業理念"
        value="philosophy"
        label-position="top"
        padding="9px 15px 0 15px"
      />
      <Tab
        label="開発実績"
        value="works"
        label-position="top"
        padding="9px 15px 0 15px"
      />
      <Tab
        label="ブログ"
        value="blog"
        label-position="top"
        padding="9px 15px 0 15px"
      />
      <Tab
        label="企業情報"
        value="company"
        label-position="top"
        padding="9px 15px 0 15px"
      />
      <Tab
        label="採用情報"
        value="recruit"
        label-position="top"
        padding="9px 15px 0 15px"
      />
      <Tab
        label="お問い合わせ"
        value="contact"
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
      return this.currentOriginPageName
    },
    ...mapState(['currentOriginPageName'])
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
