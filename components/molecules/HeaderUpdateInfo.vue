<template>
  <div class="header-update-info">
    <div class="title">
      {{ title }}
    </div>
    <hr noshade>
    <div class="update">
      {{ update }}更新
    </div>
  </div>
</template>

<script>
import Tabs from '~/components/atoms/Tabs.vue'
import Tab from '~/components/atoms/Tab.vue'
import { mapState, mapActions } from 'vuex'

export default {
  props: {
    title: {
      type: String,
      default: '',
      required: false
    },
    update: {
      type: String,
      default: '',
      required: false
    }
  }
}
</script>

<style scoped lang="scss">
.header-update-info {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3em;
  height: 100%;

  .title {
    font-weight: bold;
    margin-right: 20px;
  }

  hr {
    border: solid #ffffff;
    border-width: 0 1px 0 0;
    height: 13px;
  }

  .update {
    margin-left: 20px;
    white-space: nowrap;
  }
}
</style>
