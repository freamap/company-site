<template>
  <Card
    :horizontal="false"
    :reverse="thumbnailRight"
  >
    <template slot="thumbnail">
      <div class="thumbnail">
        <img
          :src="thumbnail"
          :alt="thumbnailAlt"
        >
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
        <div class="more-button">
          <Button
            padding="0 28px"
            @click="moreButtonOnClick"
          >
            さらに詳しく
          </Button>
        </div>
      </div>
    </template>
  </Card>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Card from '~/components/atoms/Card.vue'
import Button from '~/components/atoms/Button.vue'

export default {
  components: {
    Card,
    Button
  },
  props: {
    title: {
      type: String,
      default: '',
      required: false
    },
    thumbnail: {
      type: String,
      default: '',
      required: false
    },
    thumbnailAlt: {
      type: String,
      default: '',
      required: false
    },
    description: {
      type: String,
      default: '',
      required: false
    },
    thumbnailRight: {
      type: Boolean,
      default: false,
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
.thumbnail {
  flex-basis: 100%;
  display: flex;
  align-items: center;

  @include mq(md) {
    flex-basis: calc(760 / 1240 * 100%);
  }

  img {
    width: 100%;
    object-fit: contain;
  }
}

.contents {
  flex-basis: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 30px 20px;

  @include mq(md) {
    flex-basis: calc(480 / 1240 * 100%);
    padding: 60px;
  }

  .title {
    font-size: 3rem;
    font-weight: bold;
    width: 100%;

    @include mq(sm) {
      font-size: 1.8rem;
    }
  }

  .description {
    margin-top: 20px;
    width: 100%;
    font-size: 1.3rem;

    @include mq(sm) {
      margin-top: 30px;
    }
  }

  .more-button {
    margin-top: 40px;
    width: 100%;

    @include mq(sm) {
      margin-top: 50px;
    }
  }
}
</style>
