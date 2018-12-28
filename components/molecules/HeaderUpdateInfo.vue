<template>
  <div
    @click="click"
  >
    <nav
      class="header-update-info"
    >
      <div class="title">
        {{ title }}
      </div>
      <hr noshade>
      <time
        :datetime="update | formatDateTimeTag"
        class="update"
      >
        {{ update | formatDate }}更新
      </time>
    </nav>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    title: {
      type: String,
      default: '',
      required: true
    },
    update: {
      type: String,
      default: '',
      required: true
    },
    link: {
      type: String,
      default: '',
      required: true
    }
  },

  methods: {
    click: function(event) {
      this.changePage(this.link)
    },
    ...mapActions(['changePage'])
  }
}
</script>

<style scoped lang="scss">
.header-update-info {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  height: 100%;
  cursor: pointer;

  .title {
    font-size: inherit;
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
