<template>
  <div>
    <div>企業理念</div>
    <div>開発実績</div>
    <div>ブログ</div>
    <div>企業情報</div>
    <div>採用情報</div>
    <div>お問い合わせ</div>
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
    </Tabs>
    {{ tabValue }}
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
      tabValue: 'works'
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
