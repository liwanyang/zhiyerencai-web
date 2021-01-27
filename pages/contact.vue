<template>
  <section>
    <section class="contact">
      <div class="banner">
        <img src="~/assets/images/contact/banner_contact.png" alt="" />
      </div>
      <div class="service-channel">
        <div class="title">服务通道</div>
        <ul class="list">
          <li v-for="item in channelList" :key="item.name">
            <div class="icons">
              <img :src="item.img" alt="" />
              <div class="name">{{ item.name }}</div>
            </div>
            <div class="text">{{ item.text }}</div>
          </li>
        </ul>
      </div>
      <div class="company-culture">
        <img class="bg" src="~/assets/images/home/bg.png" alt="" />
        <div class="honor">
          <div class="title">关注我们</div>
          <ul>
            <li v-for="item in honorList" :key="item.name">
              <div class="name">{{ item.name }}</div>
              <img :src="item.img" alt="" />
              <div class="text">{{ item.text }}</div>
            </li>
          </ul>
        </div>
        <div class="contact-address">
          <div class="title">联系我们</div>
          <img src="~/assets/images/contact/contact_map.png" alt="" />
        </div>
        <div class="about-footer">
          <footers></footers>
        </div>
      </div>
    </section>
    <section class="contact-mobile">
      <img class="bg" src="~/assets/images/home/bg.png" alt="" />
      <div class="service-channel">
        <div class="title">服务通道</div>
        <ul class="list">
          <li v-for="item in channelList" :key="item.name">
            <div class="icons">
              <img :src="item.img" alt="" />
              <div class="name">{{ item.name }}</div>
            </div>
            <div class="text">{{ item.text }}</div>
          </li>
        </ul>
      </div>
      <div class="company-culture">
        <div class="honor">
          <div class="title">关注我们</div>
          <ul>
            <li v-for="item in honorList" :key="item.name">
              <div class="name">{{ item.name }}</div>
              <img :src="item.img" alt="" />
              <div class="text">{{ item.text }}</div>
            </li>
          </ul>
        </div>
        <div class="contact-address">
          <div class="title">联系我们</div>
          <img src="~/assets/images/contact/contact_map.png" alt="" />
          <div class="email">商务合作：markting@atghr.com</div>
          <div class="address">
            公司地址：上海市徐汇区桂平路418号国际孵化中心28层
          </div>
        </div>
      </div>
      <div class="about-footer">
        <footer-mobile></footer-mobile>
      </div>
    </section>
  </section>
</template>

<script>
import footers from "~/components/footers.vue";
import footerMobile from "~/components/footer-mobile.vue";
export default {
  name: "contact",

  data() {
    return {
      title: "联系我们",
      channelList: [
        {
          name: "在线客服",
          img: require("~/assets/images/contact/icon_online.png"),
          text:
            "若您遇到产品使用问题，可随时与我们联系。 工作时间：工作日 9:00-18:00",
        },
        {
          name: "反馈中心",
          img: require("~/assets/images/contact/icon_feedback.png"),
          text:
            "可通过提交工单至service@atghr.com， 我们将在1-2个工作日内处理，感谢您的支持与配合！",
        },
        {
          name: "服务热线",
          img: require("~/assets/images/contact/icon_hotline.png"),
          text:
            "电话号码：400xxxxxxx 工作时间：周一到周五（节假日除外）9:00-18:00",
        },
      ],
      honorList: [
        {
          name: "官方抖音",
          img: require("~/assets/images/contact_douyin.png"),
          text: "为您呈现不一样的志业人才",
        },
        {
          name: "公众号",
          img: require("~/assets/images/contact_douyin.png"),
          text: "随时随地查看您的数据报告",
        },
        {
          name: "小程序",
          img: require("~/assets/images/contact_douyin.png"),
          text: "随时随地查看您的数据报告",
        },
      ],
    };
  },
  computed: {},
  components: { footers, footerMobile },
  created() {
    //
  },
  watch: {},
  mounted() {},
  destroyed() {},
  methods: {},
};
</script>

<style lang="stylus" scoped>
.contact {
  position: relative;

  .title {
    color: #434343;
    font-size: 21px;
  }

  .banner {
    min-height: 200px;
    max-height: 325px;
    position: relative;

    img {
      width: 100%;
    }
  }

  .service-channel {
    width: 1200px;
    margin: auto;

    .title {
      margin: 94px 0 23px 0;
      text-align: center;
    }

    .list {
      display: flex;
      justify-content: space-between;

      li {
        .icons {
          display: flex;
          align-items: center;

          img {
            width: 45px;
          }

          .name {
            font-size: 18px;
            color: #434343;
            margin-left: 10px;
          }
        }

        .text {
          width: 273px;
          margin-top: 30px;
          font-size: 14px;
          line-height: 20px;
        }
      }
    }
  }

  .company-culture {
    max-width: 1300px;
    margin: 20px auto 0 auto;
    position: relative;
    overflow-y: hidden;

    .bg {
      position: absolute;
      width: 100%;
    }

    .contact-address {
      position: relative;
      text-align: center;
      margin: auto;

      .title {
        margin: 35px 0 30px 0;
      }

      img {
        width: 100%;
      }
    }

    .honor {
      text-align: center;
      position: relative;
      margin: auto;

      .title {
        margin: 110px 0 20px 0;
      }

      ul {
        display: flex;
        justify-content: space-around;

        li {
          margin-right: 47px;

          &:last-child {
            margin-right: 0;
          }

          img {
            width: 158px;
            height: 158px;
            margin: 8px 0;
          }

          .name {
            font-size: 18px;
          }

          .text {
            width: 150px;
            font-size: 14px;
            color: #434343;
            line-height: 20px;
            text-align: left;
          }
        }
      }
    }
  }

  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 125px;
    background-color: #0050B3;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  }

  @media screen and (max-width: 1300px) {
    .service-channel, .honor, .contact-address {
      width: 960px;
    }
  }
}

.contact-mobile {
  display: none;

  .title {
    text-align: center;
    margin-top: 0.39rem;
  }

  .bg {
    position: absolute;
    width: 95%;
    left: 2.5%;
  }

  .title {
    font-size: 0.26rem;
  }

  .service-channel {
    position: relative;

    .list {
      li {
        text-align: center;
        margin-top: 0.37rem;

        .icons {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.01rem;

          img {
            width: 0.45rem;
            height: 0.4rem;
          }
        }

        .text {
          font-size: 0.2rem;
          width: 5.13rem;
          line-height: 0.28rem;
          margin: auto;
        }
      }
    }
  }

  .company-culture {
    position: relative;
    text-align: center;

    .honor {
      .title {
        margin: 0.3rem 0;
      }

      ul {
        li {
          margin-bottom: 0.49rem;
        }
      }

      img {
        width: 1.7rem;
      }
    }

    .contact-address {
      img {
        width: 98%;
        margin: 0.15rem 0;
      }

      .email, .address {
        font-size: 0.2rem;
        line-height: 0.28rem;
      }
    }
  }
}

@media screen and (max-width: 960px) {
  .contact {
    display: none;
  }

  .contact-mobile {
    display: block;
  }
}
</style>
