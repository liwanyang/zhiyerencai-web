<template>
  <section class="footers-mobile">
    <img class="footer-logo" src="~/assets/images/logo_bottom.png" alt="" />
    <section class="footer-contact">
      <div class="item footer-phone">
        <div class="title">客服电话</div>
        <div class="phone">400xxxxxxx</div>
        <div>周一到周五（节假日除外）9:00-18:00</div>
      </div>
      <div class="item footer-address">
        <div class="title">商务合作</div>
        <div class="email">markting@atghr.com</div>
      </div>
      <div class="ecode">
        <div>
          <div class="ecode-title">关注我们</div>
          <img src="~/assets/images/contact_program.jpg" alt="" />
        </div>
        <div class="Tiktok-ecode">
          <div class="ecode-title">官方抖音</div>
          <img src="~/assets/images/contact_douyin.png" alt="" />
        </div>
      </div>
    </section>
    <section class="address-footer">
      <div class="title">欢迎莅临</div>
      <div class="address">上海市徐汇区桂平路418号国际孵化中心28层</div>
    </section>
    <section class="authentication">
      <div>© 2015~2020 atghr.com, All Rights Reserved</div>
      <div>上海携永信息科技有限公司 | 沪ICP备2020034567号</div>
    </section>
  </section>
</template>
<style lang="stylus" scoped>
.footers-mobile {
  margin-top: 1.6rem;
  width: 100%;
  height: 3.05rem;
  background-color: #0050B3;
  position: relative;
  z-index: 100;
  padding: 0.15rem 0.2rem 0.1rem 0.2rem;
  color: #ffffff;
  box-sizing: border-box;

  .footer-logo {
    width: 1.16rem;
    height: 0.33rem;
  }

  .title {
    font-size: 0.2rem;
  }

  .footer-contact {
    display: flex;
    justify-content: space-between;
    margin-top: 0.05rem;

    .item {
      font-size: 0.12rem;

      .phone, .email {
        margin: 0.05rem 0;
      }
    }

    .footer-phone {
      width: 1.89rem;
    }

    .footer-address {
      width: 2rem;
    }

    .ecode {
      display: flex;
      text-align: center;

      img {
        width: 0.93rem;
        height: 0.95rem;
      }

      .ecode-title {
        margin-bottom: 0.07rem;
      }

      .Tiktok-ecode {
        margin-left: 0.14rem;
      }
    }
  }

  .address-footer {
    margin-top: -0.1rem;

    .address {
      font-size: 0.13rem;
      margin-top: 0.02rem;
    }
  }

  .authentication {
    font-size: 0.17rem;
    margin-top: 0.1rem;
    line-height: 0.3rem;
  }
}
</style>