<template>
  <div class="hum-global-navi">
    <div>
      <div
        class="hum-mark"
        @click="humMarkClick"
      >
        <div>
          <span />
          <span />
          <span />
        </div>
      </div>
      <div
        :style="menuShow"
        class="global-navi"
      >
        <nav>
          <div
            v-for="key in globalLinkPage"
            :key="key"
            @click="click(pages[key].url)"
          >
            {{ pages[key].title }}
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      show: false
    }
  },
  computed: {
    pages() {
      return this.$store.app.getPages()
    },
    globalLinkPage() {
      return Object.keys(this.pages).filter(key => {
        return this.pages[key].globalMenu === true
      })
    },
    menuShow() {
      return this.show ? { display: 'block' } : { display: 'none' }
    }
  },
  methods: {
    click: function(value) {
      this.changePage(value)
    },
    humMarkClick: function() {
      this.show = !this.show
    },
    ...mapActions(['changePage'])
  }
}
</script>

<style scoped lang="scss">
.hum-global-navi {
  > div {
    position: relative;

    > .hum-mark {
      width: 40px;
      height: 35px;
      cursor: pointer;
      padding: 7px 6px;

      > div {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        cursor: pointer;

        > span {
          height: 3px;
          width: 100%;
          border-radius: 10px;
          background: #ffffff;
          display: block;
          content: '';
        }
      }
    }

    > .global-navi {
      position: absolute;
      right: 0;
      z-index: 100;
      margin-top: 15px;

      > ::before {
        content: '';
        position: absolute;
        top: -24px;
        right: 6px;
        border: 12px solid transparent;
        z-index: 99;
        border-bottom-color: #236af7;
      }

      > nav {
        width: 316px;
        background: #236af7;
        color: #ffffff;
        padding: 10px 20px;
        border-radius: 3px;
        box-shadow: 10px 0px 30pt #000000;

        > div {
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          height: 58px;
          color: #ffffff;
          padding-left: 10px;
          cursor: pointer;
          font-weight: 500;

          &:nth-of-type(n + 2) {
            border-top: 1px solid #ffffff;
          }
        }
      }
    }
  }
}
</style>
