<template>
  <Card
    :horizontal="true"
  >
    <template slot="thumnail">
      <div class="thumnail">
        <img
          :src="thumnail"
          :alt="thumnailAlt"
        >
        <div
          v-if="category"
          class="category"
        >
          {{ category }}
        </div>
      </div>
    </template>
    <template slot="contents">
      <div class="contents">
        <h2 class="title">
          {{ title }}
        </h2>
        <div class="description">
          {{ description }}
        </div>
        <div class="update">
          {{ update }}
        </div>
      </div>
    </template>
  </Card>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Card from '~/components/atoms/Card.vue'

export default {
  components: {
    Card
  },
  props: {
    title: {
      type: String,
      default: '',
      required: false
    },
    update: {
      type: String,
      default: '',
      required: false
    },
    thumnail: {
      type: String,
      default: '',
      required: false
    },
    thumnailAlt: {
      type: String,
      default: '',
      required: false
    },
    description: {
      type: String,
      default: '',
      required: false
    },
    category: {
      type: String,
      default: '',
      required: false
    }
  },
  methods: {
    moreButtonOnClick: function(event) {
      this.$emit('click', event)
    }
  }
}
</script>

<style scoped lang="scss">
.thumnail {
  height: 230px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @include mq(sm) {
    height: 300px;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  .category {
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 1.3rem;
    background-color: #236af7;
    padding: 5px 9px;
    color: #ffffff;
  }
}

.contents {
  padding: 30px;

  @include mq(md) {
    padding: 30px;
  }

  .title {
    font-size: 1.8rem;
    font-weight: bold;
    width: 100%;

    @include mq(sm) {
      font-size: 1.8rem;
    }
  }

  .description {
    margin-top: 15px;
    width: 100%;
    font-size: 1.3rem;

    @include mq(sm) {
      margin-top: 15px;
    }
  }

  .update {
    margin-top: 25px;
    font-size: 1.3rem;
  }
}
</style>
