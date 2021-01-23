<template>
  <section>
    <div class="loading-area">
        <div class="custom">
          <p><i class="el-icon-loading"></i></p>
          <p>loading...</p>
        </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'loading',
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
.loading-area
  width 100%
  height 100vh
  display flex
  justify-content center
  align-items center
  background-color rgba(0, 0, 0, .5)
  .custom
    color white
    text-align center
    font-size .2rem
    letter-spacing 2px
    >p
      line-height .35rem
    .el-icon-loading
      color white
      font-size .26rem
.loader {
  position: absolute;
  // position: fixed;
  top 0px
  left 0px
  right 0px
  bottom 0px
  margin: auto
  width 175px
  height 100px
  .loader span {
    display: block;
    background: #ccc;
    width: 7px;
    height: 10%;
    border-radius: 14px;
    margin-right: 5px;
    float: left;
    margin-top: 25%;
  }
  .loader span:last-child {
    margin-right: 0px;
  }
  .loader span:nth-child(1) {
    animation: load 2.5s 1.4s infinite linear;
  }
  .loader span:nth-child(2) {
    animation: load 2.5s 1.2s infinite linear;
  }
  .loader span:nth-child(3) {
    animation: load 2.5s 1s infinite linear;
  }
  .loader span:nth-child(4) {
    animation: load 2.5s 0.8s infinite linear;
  }
  .loader span:nth-child(5) {
    animation: load 2.5s 0.6s infinite linear;
  }
  .loader span:nth-child(6) {
    animation: load 2.5s 0.4s infinite linear;
  }
  .loader span:nth-child(7) {
    animation: load 2.5s 0.2s infinite linear;
  }
  .loader span:nth-child(8) {
    animation: load 2.5s 0s infinite linear;
  }
  .loader span:nth-child(9) {
    animation: load 2.5s 0.2s infinite linear;
  }
  .loader span:nth-child(10) {
    animation: load 2.5s 0.4s infinite linear;
  }
  .loader span:nth-child(11) {
    animation: load 2.5s 0.6s infinite linear;
  }
  .loader span:nth-child(12) {
    animation: load 2.5s 0.8s infinite linear;
  }
  .loader span:nth-child(13) {
    animation: load 2.5s 1s infinite linear;
  }
  .loader span:nth-child(14) {
    animation: load 2.5s 1.2s infinite linear;
  }
  .loader span:nth-child(15) {
    animation: load 2.5s 1.4s infinite linear;
  }
}
@keyframes load {
  0% {
    background: #ccc;
    margin-top: 25%;
    height: 10%;
  }
  50% {
    background: #444;
    height: 100%;
    margin-top: 0%;
  }
  100% {
    background: #ccc;
    height: 10%;
    margin-top: 25%;
  }
}
</style>

<style lang="stylus">
@media (max-width: 767px) {
  /*屏幕在767像素以下含767像素,这里的样式生效*/
}
@media (min-width: 768px) {
}
// 针对IE写样式
@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {}
// 针对FireFox写样式
@-moz-document url-prefix(){}
</style>
