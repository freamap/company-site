<template>
  <div class="footer">
    <div class="logo">
      <img 
        src="~/assets/images/freamap-logo-horiz--color.svg"
        @click="moreButtonOnClick" >
    </div>
    <div>
      <FooterGlobalNavi/>
    </div>
    <div class="copyright">
      ©︎ 2018 freamap Co.,Ltd
    </div>
  </div>
</template>

<script>
import FooterGlobalNavi from '~/components/molecules/FooterGlobalNavi.vue'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    FooterGlobalNavi
  },
  computed: {
    ...mapState('pages', ['pages'])
  },
  methods: {
    moreButtonOnClick: function(event) {
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
}

.logo {
  width: 44px;
  margin-top: 60px;
  margin-bottom: 50px;
  cursor: pointer;

  > img {
    object-fit: contain;
  }
}

.copyright {
  color: #767676;
  font-size: 13px;
  font-family: Noto Sans CJK JP;
  margin-top: 60px;
  margin-bottom: 55px;
}
</style>
