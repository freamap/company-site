<template>
  <Card
    :horizontal="true"
  >
    <template slot="thumnail">
      <div class="thumnail">
        <div class="img">
          <img
            :src="thumnail"
            :alt="thumnailAlt"
          >
        </div>
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
  height: 0;
  display: flex;
  align-items: center;
  position: relative;
  padding-bottom: 100%;

  .img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      object-fit: contain;
    }
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
