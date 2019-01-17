<template>
  <footer class="footer">
    <div class="logo">
      <img 
        src="~/assets/images/freamap-logo-horiz--color.svg"
        @click="topButtonOnClick" >
    </div>
    <div>
      <FooterGlobalNavi/>
    </div>
    <div class="copyright">
      ©︎ 2018 freamap Co.,Ltd
    </div>
  </footer>
</template>

<script>
import FooterGlobalNavi from '~/components/molecules/FooterGlobalNavi.vue'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    FooterGlobalNavi
  },
  computed: {
    pages() {
      return this.$store.app.getPages()
    }
  },
  methods: {
    topButtonOnClick: function(event) {
      this.changePage(this.pages.top.url)
    },
    ...mapActions(['changePage'])
  }
}
</script>

<style scoped lang="scss">
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  border-top: solid 1px #e8e9ea;
}

.logo {
  width: 44px;
  margin-top: 50px;
  margin-bottom: 45px;
  cursor: pointer;

  @include mq(md) {
    margin-top: 60px;
    margin-bottom: 50px;
  }

  > img {
    object-fit: contain;
  }
}

.copyright {
  color: #767676;
  font-size: 1.3rem;
  margin-top: 40px;
  margin-bottom: 50px;

  @include mq(md) {
    margin-top: 60px;
    margin-bottom: 55px;
  }
}
</style>
