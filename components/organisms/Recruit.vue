<template>
  <div>
    <div
      v-for="detail in recruit"
      :key="detail.id"
      class="content"
    >
      <div class="occupation">
        {{ detail.occupation }}
      </div>
      <div class="workplace">
        {{ detail.workplace }}
      </div>
      <div class="fee">
        {{ detail.fee }}
      </div>
      <div class="detail-button">
        <nuxt-link
          :to="{path: '/news/' + detail.id}"
          tag="div"
        >
          <ArrowDown />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ArrowDown from '~/assets/icons/ArrowDown.vue'

export default {
  components: {
    ArrowDown
  },
  props: {
    length: {
      type: Number,
      default: Number.MAX_VALUE,
      required: false
    }
  },
  computed: {
    ...mapState('recruit', ['recruit'])
  },
  methods: {
    ...mapActions(['changePage'])
  }
}
</script>

<style scoped lang="scss">
.content {
  display: flex;
  align-items: center;
  box-sizing: content-box;
  font-size: 15px;
  height: 120px;
  width: 100%;

  .occupation {
    margin-left: 20px;
    flex-basis: 317;
    flex-grow: 1;
    word-wrap: break-word;
  }

  .workplace {
    flex-basis: 275;
    flex-grow: 1;
  }

  .fee {
    flex-basis: 338;
    flex-grow: 1;
  }

  .detail-button {
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
</style>
