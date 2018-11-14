<template>
  <div class="global-menu">
    <Tabs
      v-model="tabValue"
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

export default {
  components: {
    Tabs,
    Tab
  },
  data() {
    return {
      tabValue: ''
    }
  },
  created() {
    switch (this.$router.currentRoute.name) {
      case 'works':
        this.tabValue = 'works'
        break
      case 'philosophy':
        this.tabValue = 'philosophy'
        break
      case 'blog':
        this.tabValue = 'blog'
        break
      case 'company':
        this.tabValue = 'company'
        break
      case 'recruit':
        this.tabValue = 'recruit'
        break
      case 'contact':
        this.tabValue = 'contact'
        break
      default:
        this.tabValue = ''
    }
  },
  methods: {
    onChange: function(value) {
      this.$router.push(value)
    }
  }
}
</script>

<style scoped lang="scss">
.global-menu {
  font-size: 15px;
  font-weight: 'Medium';
  color: #ffffff;
}
</style>
