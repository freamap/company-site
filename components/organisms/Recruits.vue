<template>
  <div>
    <div class="content recruits-header">
      <div class="occupation">
        職種
      </div>
      <div class="workplace">
        勤務地
      </div>
      <div class="payment">
        報酬
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
            :to="{path: '/recruit/' + recruit.recruit_id}"
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
    ...mapState('recruit', ['recruits'])
  }
}
</script>

<style scoped lang="scss">
.content {
  display: flex;
  box-sizing: content-box;
  font-size: 1.5rem;
  min-height: 120px;
  width: 100%;
  align-items: center;

  > :first-child {
    margin-left: 20px;
  }

  > div {
    display: flex;
    align-items: center;
  }

  .occupation {
    flex-basis: 317px;
    flex-grow: 1;
  }

  .workplace {
    flex-basis: 275px;
    flex-grow: 1;
  }

  .payment {
    flex-basis: 338px;
    flex-grow: 1;
  }

  .recruit-button {
    flex-basis: 55px;
    flex-grow: 0;
    height: 38px;

    div {
      width: 100%;
      height: 100%;
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
  min-height: 50px;
  margin-bottom: 30px;
  font-size: 1.3rem;

  > :last-child {
    flex-basis: 393px;
  }
}

.recruits-content {
  > div {
    border-top: 1px solid #e8e9ea;
  }

  > :last-child {
    border-bottom: 1px solid #e8e9ea;
  }
}
</style>
