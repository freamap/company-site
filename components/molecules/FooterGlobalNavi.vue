<template>
  <div class="footer-global-navi">
    <div
      v-for="key in globalLinkPage"
      :key="key"
      @click="click(pages[key].url)"
    >
      <a
        @click="click(pages[key].url)"
      >
        {{ pages[key].title }}
      </a>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    pages() {
      return this.$store.app.getPages()
    },
    globalLinkPage() {
      return Object.keys(this.pages).filter(key => {
        return this.pages[key].footerMenu === true
      })
    }
  },
  methods: {
    click: function(value) {
      this.changePage(value)
    },
    ...mapActions(['changePage'])
  }
}
</script>

<style scoped lang="scss">
.footer-global-navi {
  color: #191919;
  font-family: Proxima Nova;
  width: 315px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @include mq(md) {
    flex-wrap: nowrap;
    width: auto;
    height: auto;
  }

  > div {
    flex-basis: auto;
    text-align: center;
    font-size: 1.5rem;
    line-height: 100%;
    padding: 0 15px;

    @include mq(md) {
      padding: 0;

      &:nth-of-type(n + 2) {
        margin-left: 50px;
      }
    }

    &:nth-of-type(n + 4) {
      margin-top: 24px;

      @include mq(md) {
        margin-top: 0px;
      }
    }

    > a {
      font-size: inherit;
      cursor: pointer;
    }
  }
}
</style>
