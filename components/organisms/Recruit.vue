<template>
  <div>
    <div class="firstLine">
      <div class="title">
        募集職種一覧
      </div>
      <div class="date">
        最終更新日: {{ latestUpdate }}
      </div>
    </div>
    <div class="content recruit-header">
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
    <div class="recruit-content">
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
        <div class="payment">
          {{ detail.payment }}
        </div>
        <div class="detail-button">
          <nuxt-link
            :to="{path: '/recruit/' + detail.id}"
            tag="div"
          >
            <ArrowDown />
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ArrowDown from '~/assets/icons/ArrowDown.vue'
import moment from 'moment'

export default {
  components: {
    ArrowDown
  },
  computed: {
    ...mapState('recruit', ['recruit']),
    latestUpdate() {
      return this.recruit.reduce(
        (a, b) =>
          moment(a.date, 'YYYY/MM/DD').fromNow() <
          moment(b.date, 'YYYY/MM/DD').fromNow()
            ? a
            : b
      ).date
    }
  }
}
</script>

<style scoped lang="scss">
.firstLine {
  display: flex;
  margin-top: 55px;
  margin-bottom: 50px;
  width: 100%;

  .title {
    font-size: 1.8rem;
    color: #000000;
    font-weight: bold;
  }

  .date {
    font-size: 1.3rem;
    color: #767676;
    margin-left: auto;
  }
}

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

.recruit-header {
  background-color: #fafafa;
  min-height: 50px;
  margin-bottom: 30px;
  font-size: 1.3rem;

  > :last-child {
    flex-basis: 393px;
  }
}

.recruit-content {
  > div {
    border-top: 1px solid #e8e9ea;
  }

  > :last-child {
    border-bottom: 1px solid #e8e9ea;
  }
}
</style>
