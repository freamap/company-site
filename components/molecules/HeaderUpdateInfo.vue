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
      <div class="update">
        <span
          v-if="update"
        >
          <time
            :datetime="update | formatDateTimeTag"
          >
            {{ update | formatDate }}
          </time>
          更新
        </span>
        <span
          v-else
        >
          取得中
        </span>
      </div>
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
      required: false
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
  color: #ffffff;

  .title {
    color: inherit;
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
    color: inherit;
    margin-left: 20px;
    white-space: nowrap;

    * {
      color: inherit;
    }
  }
}
</style>
