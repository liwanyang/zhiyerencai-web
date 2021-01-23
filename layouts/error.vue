<template>
  <div class="container">
    <div v-if="error.statusCode === 404">
      <div class="content">
        <p>未找到页面</p>
      </div>
    </div>
    <!-- <h1 v-else>{{$t('m.error.applical')}}</h1> -->
    <h1 v-else>竹子阅读</h1>
  </div>
</template>

<script>
  export default {
    props: ["error"],
    layout: "blog" // 你可以为错误页面指定自定义的布局
  };
</script>
<style lang="stylus" scoped>
  .container {
    color: #777777;

    .header {
      // height 7.5vh
    }

    .foote {
      position: fixed;
      bottom: 0;
      width: 100%;
      background: #ffffff;

      >div {
        margin: 0 auto;
      }
    }

    .content {
      height: 66vh;
      width: 100%;
      background: url('/img/errorBg.png');
      background-size: cover;

      img {
        display: block;
        margin: 0 auto;
        padding-top: 15vh;
        padding-bottom: 0.4rem;
      }

      p {
        line-height: 0.3rem;
        font-family: PingFangSC;
        font-size: 0.18rem;
        color: #191B2A;
        text-align: center;
      }

      .gofirst {
        background: #191B2A;
        width: 2.24rem;
        height: 0.45rem;
        text-align: center;
        line-height: 0.45rem;
        font-family: PingFangSC;
        font-size: 0.18rem;
        color: #FFFFFF;
        margin: 0 auto;
        margin-top: 0.5rem;
        cursor: pointer;
        display: block;
      }
    }
  }
</style>

<style lang="stylus" scoped>
  // 媒体查询模版
  @media (max-width: 767px) {
    /* 屏幕在767像素以下含767像素,这里的样式生效 */
    .header {
      display: none;
    }

    .content {
      display: none;
    }

    .foote {
      display: none;
    }
  }

  @media (min-width: 768px) {
    /* 屏幕在768像素以上含768像素,这里的样式生效 */
  }

  // 针对IE写样式
  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
  }

  // 针对FireFox写样式
  @-moz-document url-prefix() {
  }
</style>
