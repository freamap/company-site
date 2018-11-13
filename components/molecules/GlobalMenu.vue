<template>
  <div>
    <Tabs
      v-model="tabValue"
      @change="onChange"
    >
      <Tab
        label="企業理念"
        value="philosophy"
      />
      <Tab
        label="開発実績"
        value="works"
      />
      <Tab
        label="ブログ"
        value="blog"
      />
      <Tab
        label="企業情報"
        value="company"
      />
      <Tab
        label="採用情報"
        value="recruit"
      />
      <Tab
        label="お問い合わせ"
        value="contact"
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

<style>
</style>
