<template>
  <div class="sub-page-header-contents">
    <div>
      <div class="icon">
        <img src="~/assets/images/icon-freamap.svg">
      </div>
      <div class="title">
        {{ title }}
      </div>
      <div class="sub-title">
        {{ subTitle }}
      </div>
      <div class="description">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  title: {
    label: {
      type: String,
      default: '',
      required: false
    },
    subTitle: {
      type: String,
      default: '',
      required: false
    },
    description: {
      type: String,
      default: 'center',
      required: false
    }
  }
}
</script>

<style scoped lang="scss">
.sub-page-header-contents {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  .icon {
    text-align: center;
    height: 21px;

    img {
      height: 100%;
      object-fit: contain;
    }
  }

  .title {
    margin-top: 5px;
    height: 64px;
    font-weight: bold;
    font-size: 4.3rem;
    text-align: center;
    color: #ffffff;
  }

  .sub-title {
    margin-top: 8px;
    height: 25px;
    text-align: center;
    font-size: 1.8rem;
    color: #ffffff;
    font-family: Poppins;
  }

  .description {
    margin-top: 29px;
    text-align: center;
    font-size: 1.3rem;
    color: #ffffff;
  }
}
</style>
