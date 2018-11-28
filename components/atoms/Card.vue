<template>
  <div
    :style="cardStyle"
    class="card"
  >
    <div class="thumbnail">
      <img :src="thumbnail">
      <div
        v-if="category"
        class="category"
      >
        {{ category }}
      </div>
    </div>
    <div class="content">
      <div class="title">
        {{ title }}
      </div>
      <div class="description">
        {{ description }}
      </div>
      <div class="update">
        {{ update }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
    description: {
      type: String,
      default: '',
      required: false
    },
    update: {
      type: String,
      default: '',
      required: false
    },
    category: {
      type: String,
      default: '',
      required: false
    },
    width: {
      type: String,
      default: '100%',
      required: false
    },
    height: {
      type: String,
      default: '100%',
      required: false
    }
  },
  computed: {
    cardStyle() {
      return {
        height: this.width,
        width: this.width
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  background-color: #ffffff;
  border: solid 1px #e8e9ea;

  .thumbnail {
    flex-basis: 60%;
    display: flex;
    justify-content: center;
    align-content: center;
    position: relative;

    img {
      object-fit: contain;
      max-width: 100%;
      max-height: 100%;
    }

    .category {
      position: absolute;
      bottom: 0;
      right: 0;
      font-size: 1.3rem;
      padding: 5px 9px;
      background-color: $primary;
      color: #ffffff;
    }
  }

  > .content {
    display: flex;
    flex-basis: 40%;
    flex-direction: column;
    padding: 30px;

    .title {
      flex-basis: 20px;
      font-size: 1.8rem;
      font-weight: bold;
    }

    .description {
      flex-basis: 20px;
      flex-grow: 1;
      font-size: 1.3rem;
    }

    .update {
      flex-basis: 20px;
      font-size: 1.3rem;
    }
  }
}
</style>
