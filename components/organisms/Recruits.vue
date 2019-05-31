<template>
  <div>
    <div class="recruits-header">
      <div class="content">
        <div class="occupation">
          職種
        </div>
        <div class="workplace">
          勤務地
        </div>
        <div class="payment">
          報酬
        </div>
        <div class="recruit-button"/>
      </div>
    </div>
    <div class="recruits-content">
      <section
        v-for="recruit in recruits"
        :key="recruit.recruit_id"
        class="content"
      >
        <h3 class="occupation">
          {{ recruit.occupation }}
        </h3>
        <div class="workplace">
          {{ recruit.workplace }}
        </div>
        <div class="payment">
          {{ recruit.payment }}
        </div>
        <div class="recruit-button">
          <nuxt-link
            :to="{path: pages.recruits.url + '/' + recruit.recruit_id}"
            tag="div"
          >
            <ArrowDown />
          </nuxt-link>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ArrowDown from '~/assets/icons/ArrowDown.vue'

export default {
  components: {
    ArrowDown
  },
  computed: {
    ...mapState('recruits', ['recruits']),
    pages() {
      return this.$store.app.getPages()
    }
  }
}
</script>

<style scoped lang="scss">
.content {
  display: flex;
  width: 100%;
  align-items: center;

  > * {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .occupation {
    flex-basis: 337px;
    flex-grow: 1;
    font-size: inherit;
    font-weight: inherit;
    padding-left: 20px;
  }

  .workplace {
    flex-basis: 275px;
    flex-grow: 1;
    display: none;

    @include mq(sm) {
      display: block;
    }
  }

  .payment {
    flex-basis: 338px;
    flex-grow: 1;

    display: none;

    @include mq(sm) {
      display: block;
    }
  }

  .recruit-button {
    flex-basis: 55px;
    flex-grow: 0;
    flex-shrink: 0;
    padding-right: 17px;

    > div {
      width: 38px;
      height: 38px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      outline: 0;
      border: none;
      padding: 0;

      svg {
        transform: rotate(-90deg);
        width: 20px;
        fill: currentColor;
      }
    }
  }
}

.recruits-header {
  background-color: #fafafa;
  margin-bottom: 30px;
  font-size: 1.3rem;

  > .content {
    min-height: 50px;
  }
}

.recruits-content {
  > .content {
    min-height: 120px;
    border-top: 1px solid #e8e9ea;

    > .occupation {
      padding-left: 0px;

      @include mq(md) {
        padding-left: 20px;
      }
    }
  }

  > :last-child {
    border-bottom: 1px solid #e8e9ea;
  }
}
</style>
