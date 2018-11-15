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
      <div class="explain">
        {{ explain }}
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
    explain: {
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
    font-size: 43px;
    text-align: center;
    color: #ffffff;
  }

  .sub-title {
    margin-top: 8px;
    height: 25px;
    text-align: center;
    font-size: 18px;
    color: #ffffff;
    font-family: 'Poppins';
  }

  .explain {
    margin-top: 29px;
    text-align: center;
    font-size: 13px;
    color: #ffffff;
  }
}
</style>
