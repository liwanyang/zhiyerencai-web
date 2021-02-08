<template>
  <section class="footers">
    <section class="footer-container">
      <div class="logo-contact">
        <img
          @click="goHome"
          class="footer-logo"
          src="~/assets/images/logo_bottom.png"
          alt=""
        />
        <div class="contact">
          <div class="address">
            <div class="item">
              <div class="title">客服电话</div>
              <div class="phone">400xxxxxxx</div>
              <div>周一到周五（节假日除外）9:00-18:00</div>
            </div>
            <div class="item">
              <div class="title">商务合作</div>
              <div>markting@atghr.com</div>
            </div>
            <div class="item">
              <div class="title">欢迎莅临</div>
              <div>上海市徐汇区桂平路418号国际孵化中心28层</div>
            </div>
          </div>
          <div class="authentication">
            © 2015~2020 atghr.com, All Rights Reserved 上海携永信息科技有限公司
            | 沪ICP备2020034567号
          </div>
        </div>
      </div>
      <div class="ecode">
        <div>
          <div class="ecode-title">关注我们</div>
          <img src="~/assets/images/contact_douyin1.jpg" alt="" />
          <!-- <img src="~/assets/images/contact_program.jpg" alt="" /> -->
        </div>
        <div class="Tiktok-ecode">
          <div class="ecode-title">官方抖音</div>
          <img src="~/assets/images/contact_douyin.png" alt="" />
        </div>
      </div>
    </section>
  </section>
</template>
<script>
export default {
  methods: {
    goHome() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>
<style lang="stylus" scoped>
.footers {
  width: 100%;
  height: 125px;
  background-color: #0050B3;
  position: relative;
  z-index: 100;

  .footer-container {
    width: 1300px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 76px auto 0 auto;

    .logo-contact {
      display: flex;
    }
  }

  .footer-logo {
    width: 116px;
    height: 33px;
    margin-top: 39px;
    cursor: pointer;
  }

  .contact {
    color: #ffffff;
    margin: 15px 0 0 42px;

    .address {
      display: flex;

      .item {
        margin-right: 40px;
        font-size: 9px;
        line-height: 20px;

        .title {
          font-size: 12px;
        }

        .phone {
          font-size: 14px;
        }

        &:last-child {
          margin-right: 0;
        }
      }
    }

    .authentication {
      margin-top: 18px;
      font-size: 11px;
    }
  }

  .ecode {
    display: flex;
    color: #ffffff;

    .ecode-title {
      font-size: 11px;
      margin-bottom: 5px;
    }

    .Tiktok-ecode {
      margin-left: 20px;
    }

    img {
      width: 56px;
      height: 57px;
    }
  }

  @media screen and (max-width: 1300px) {
    .footer-container {
      width: 960px;
    }
  }
}
</style>