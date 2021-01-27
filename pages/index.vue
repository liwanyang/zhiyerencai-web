<template>
  <section>
    <section class="home">
      <div class="banner">
        <img src="~/assets/images/home/banner.png" alt="" />
        <div class="title">
          <div class="banner-title">蓝领人力资源定制领跑者</div>
          <div class="banner-subTitle">专业成就企业未来</div>
        </div>
      </div>
      <ul class="range">
        <li v-for="item in sumList" :key="item.title">
          <img :src="item.icon" alt="" />
          <div class="sum-title">
            <div class="sum">{{ item.sum }}</div>
            <div class="title">{{ item.title }}</div>
          </div>
        </li>
      </ul>
      <section class="main">
        <img class="bg" src="~/assets/images/home/bg.png" alt="" />
        <div class="products">
          <product-service></product-service>
          <advantage></advantage>
          <custom :imgList="customList" title="这些客户更认可志业人才"></custom>
          <custom
            :imgList="resourcesList"
            title="我们正联合这些伙伴改变人力资源行业"
          ></custom>
        </div>
      </section>
      <footers></footers>
    </section>
    <section class="home-mobile">
      <div class="banner">
        <img
          src="~/assets/images/home/bg_index_mobile.png"
          class="banner-mobile"
          alt=""
        />
        <div class="banner-title">
          <div class="title">蓝领人力资源定制领跑者</div>
          <div class="sub-title">专业成就企业未来</div>
        </div>
        <ul class="range">
          <li v-for="item in sumList" :key="item.title">
            <img :src="item.icon" alt="" />
            <div class="sum-title">
              <div class="sum">{{ item.sum }}</div>
              <div class="title">{{ item.title }}</div>
            </div>
          </li>
        </ul>
        <div class="product-service">
          <div class="titles">产品和服务</div>
          <img class="bg" src="~/assets/images/home/bg.png" alt="" />
          <ul>
            <li v-for="item in productList" :key="item.title">
              <img :src="item.img" alt="" />
              <div class="content">
                <div class="name">{{ item.title }}</div>
                <div class="text">{{ item.subTitle }}</div>
              </div>
            </li>
          </ul>
        </div>
        <advantage-mobile></advantage-mobile>
        <custom-mobile title="这些客户更认可志业人才" :imgList="customList">
        </custom-mobile>
      </div>
      <footer-mobile></footer-mobile>
    </section>
  </section>
</template>

<script>
import * as TYPE from "~/utils/getInfos.js";
import { mapState } from "vuex";
import ProductService from "~/components/product-service.vue";
import Advantage from "~/components/advantage.vue";
import advantageMobile from "~/components/advantage-mobile.vue";
import custom from "~/components/custom.vue";
import customMobile from "~/components/custom-mobile.vue";
import footers from "~/components/footers.vue";
import footerMobile from "~/components/footer-mobile.vue";

export default {
  name: "index",

  data() {
    return {
      title: "首页",
      sumList: [
        {
          title: "企业客户",
          icon: require("~/assets/images/home/icon_company.png"),
          sum: "60,000+",
        },
        {
          title: "蓝领人才",
          icon: require("~/assets/images/home/icon_worker.png"),
          sum: "500,000+",
        },
        {
          title: "城市布点",
          icon: require("~/assets/images/home/icon_city.png"),
          sum: "200+",
        },
        {
          title: "合作院校",
          icon: require("~/assets/images/home/icon_college.png"),
          sum: "300+",
        },
      ],
      drag: false,

      customList: [
        {
          id: 1,
          list: [
            require("~/assets/images/home/partner_lg.png"),
            require("~/assets/images/home/partner_panasonic.png"),
            require("~/assets/images/home/partner_3m.png"),
            require("~/assets/images/home/partner_dazhong.png"),
            require("~/assets/images/home/partner_ford.png"),
            require("~/assets/images/home/partner_yiqi.png"),
            require("~/assets/images/home/partner_daliyuan.png"),
            require("~/assets/images/home/partner_panpan.png"),
            require("~/assets/images/home/partner_tongyi.png"),
            require("~/assets/images/home/partner_mcdonald.png"),
            require("~/assets/images/home/partner_kfc.png"),
            require("~/assets/images/home/partner_xibei.png"),
          ],
        },
        {
          id: 2,
          list: [
            require("~/assets/images/home/partner_chinabank.png"),
            require("~/assets/images/home/partner_volks.png"),
            require("~/assets/images/home/partner_boe.png"),
            require("~/assets/images/home/partner_future.png"),
            require("~/assets/images/home/partner_weima.png"),
            require("~/assets/images/home/partner_byd.png"),
            require("~/assets/images/home/partner_wangwang.png"),
            require("~/assets/images/home/partner_kangshifu.png"),
            require("~/assets/images/home/partner_guogong.png"),
            require("~/assets/images/home/partner_kungfu.png"),
            require("~/assets/images/home/partner_laowang.png"),
            require("~/assets/images/home/partner_peter.png"),
          ],
        },
      ],
      resourcesList: [
        {
          id: 1,
          list: [
            require("~/assets/images/home/partner_lg.png"),
            require("~/assets/images/home/partner_panasonic.png"),
            require("~/assets/images/home/partner_3m.png"),
            require("~/assets/images/home/partner_dazhong.png"),
            require("~/assets/images/home/partner_ford.png"),
            require("~/assets/images/home/partner_yiqi.png"),
          ],
        },
        {
          id: 2,
          list: [
            require("~/assets/images/home/partner_chinabank.png"),
            require("~/assets/images/home/partner_volks.png"),
            require("~/assets/images/home/partner_boe.png"),
            require("~/assets/images/home/partner_future.png"),
            require("~/assets/images/home/partner_weima.png"),
            require("~/assets/images/home/partner_byd.png"),
          ],
        },
      ],
      productList: [
        {
          title: "职业蛙招聘",
          id: 1,
          subTitle: "人事代理、招聘外服、业务外包，繁琐事务放心托管",
          img: require("~/assets/images/home/tab1.png"),
          list: [
            "专业团队为企业定制专属服务",
            "5大专业领域、650万蓝领人才数据支撑",
            "AI智选造就高效人岗速配",
          ],
        },
        {
          title: "志业实训基地",
          id: 2,
          subTitle:
            "联合企业在职业院校开展产教融合业务，招生招工一体化，入校即入企，上课即上岗，毕业即就业",
          img: require("../assets/images/home/tab2.png"),
          list: [
            "联合企业在职业院校开展产教融合业务，招生招工一体化，入校即入企，上课即上岗，毕业即就业",
            "60万+高校人才资源",
            "世界知名企业联合实训",
            "定向办学，产教融合，达成人、企、校三方共赢",
          ],
        },
        {
          title: "开拓者零工",
          id: 3,
          subTitle:
            "满足企业多元场景用工的服务平台，岗位随需随发，结算一站满足，安全规范省钱省力。",
          img: require("../assets/images/home/tab3.png"),
          list: [
            "满足企业多元场景灵活用工需求",
            "顾问式一对一服务，放心可托管",
            "优化企业用工成本，安全合规可信赖",
            "助力企业构建人力储备库",
          ],
        },
        {
          title: "志业AIJob",
          id: 4,
          subTitle:
            "依托集团积累的数百万行业数据，以智能计算为驱动，实现企业和候选人速配",
          img: require("../assets/images/home/tab4.png"),
          list: [
            "基于“志业云大脑”的智能运算服务",
            "AI招聘助手，轻松应答，快速约面到面",
          ],
        },
      ],
    };
  },
  computed: {
    ...mapState({
      device: (state) => state.device,
      screenWidth: (state) => state.screenWidth,
      userLogin: (state) => state.userLogin,
    }),
    showIndex() {
      return this.tabNum === 1;
    },
  },
  components: {
    ProductService,
    Advantage,
    custom,
    footers,
    advantageMobile,
    customMobile,
    footerMobile,
  },
  created() {
    //
  },
  mounted() {
    if (this.isIE11()) {
      window.addEventListener("hashchange", this.hashChangeHandler);
    }
    this.init();
  },
  destroyed() {
    if (this.isIE11()) {
      window.removeEventListener("hashchange", this.hashChangeHandler);
    }
  },
  methods: {
    hashChangeHandler: function () {
      this.$router.push(
        window.location.hash.substring(1, window.location.hash.length)
      );
    },
    isIE11: function () {
      return !!window.MSInputMethodContext && !!document.documentMode;
    },
    async init() {
      await this.getExplorerInfo();
      console.log(
        "浏览器:" +
          this.getExplorerInfo().type +
          " " +
          "版本:" +
          this.getExplorerInfo().version
      );
    },
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 1) {
        // console.log(1, "滚动了");
      } else {
        // console.log(2, "回到顶部");
      }
    },
    setBannerSize(w) {
      if (w > 1600) {
        return;
      }
      if (w < 768) {
        this.bannerHeight = w / 2 + 50 + "px";
        return;
      }
      this.bannerHeight = w / 2 - 100 + "px";
    },
    getExplorerInfo() {
      var explorer = window.navigator.userAgent.toLowerCase();
      if (explorer.indexOf("msie") >= 0) {
        var ver = explorer.match(/msie ([\d.]+)/)[1];
        return { type: "IE", version: ver };
      } else if (explorer.indexOf("firefox") >= 0) {
        var ver = explorer.match(/firefox\/([\d.]+)/)[1];
        return { type: "Firefox", version: ver };
      } else if (explorer.indexOf("chrome") >= 0) {
        var ver = explorer.match(/chrome\/([\d.]+)/)[1];
        return { type: "Chrome", version: ver };
      } else if (explorer.indexOf("opera") >= 0) {
        var ver = explorer.match(/opera.([\d.]+)/)[1];
        return { type: "Opera", version: ver };
      } else if (explorer.indexOf("Safari") >= 0) {
        var ver = explorer.match(/version\/([\d.]+)/)[1];
        return { type: "Safari", version: ver };
      } else {
        return { type: "未知", version: "未知" };
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
$color = #0050B3;

.home {
  .banner {
    min-height: 300px;
    position: relative;

    img {
      width: 100%;
    }

    .title {
      color: #FFFFFF;
      width: 1200px;
      position: absolute;
      top: 30%;
      left: 18%;

      .banner-title {
        font-size: 32px;
      }

      .banner-subTitle {
        font-size: 16px;
      }
    }
  }

  .main {
    max-width: 1300px;
    margin: -80px auto 0 auto;
    position: relative;

    .bg {
      position: absolute;
      width: 100%;
    }

    .products {
      position: relative;
      padding-top: 75px;
    }
  }

  .range {
    display: flex;
    justify-content: center;
    margin: 44px 0 60px 0;

    li {
      display: flex;
      align-items: center;
      margin-right: 120px;

      &:last-child {
        margin-right: 0;
      }

      img {
        width: 60px;
      }

      .sum-title {
        margin-left: 10px;

        .sum {
          font-size: 30px;
          color: $color;
        }

        .title {
          font-size: 16px;
        }
      }
    }
  }

  @media screen and (max-width: 1300px) {
    .main {
      width: 960px;
    }
  }
}

.home-mobile {
  display: none;
  min-width: 320px;
  margin-top: -0.89rem;

  .titles {
    font-size: 0.26rem;
  }

  .banner {
    position: relative;

    .banner-title {
      position: absolute;
      top: 1.46rem;
      left: 0.38rem;

      .title {
        font-size: 0.3rem;
        margin-bottom: 0.24rem;
      }

      .sub-title {
        font-size: 0.24rem;
      }
    }

    .range {
      display: flex;
      flex-wrap: wrap;

      li {
        display: flex;
        justify-content: center;
        width: 50%;
        margin-bottom: 0.16rem;

        .sum {
          font-size: 0.28rem;
          color: $color;
          min-width: 1.2rem;
        }

        .sum-title {
          margin-left: 0.14rem;
        }
      }

      img {
        width: 0.6rem;
        height: 0.46rem;
      }
    }

    .product-service {
      position: relative;

      .bg {
        position: absolute;
        width: 95%;
        left: 2.5%;
      }

      .titles {
        margin: 0.7rem 0 0.26rem 0;
        text-align: center;
      }

      ul {
        position: relative;

        li {
          display: flex;
          justify-content: center;
          margin-bottom: 0.37rem;

          img {
            width: 2.7rem;
            height: 1.58rem;
            margin-right: 0.35rem;
          }

          .content {
            width: 2.4rem;

            .name {
              font-size: 0.24rem;
            }

            .text {
              font-size: 0.2rem;
              line-height: 0.28rem;
              margin-top: 0.12rem;
            }
          }
        }
      }
    }
  }

  .banner-mobile {
    width: 100%;
  }
}

@media screen and (max-width: 960px) {
  .home {
    display: none;
  }

  .home-mobile {
    display: block;
  }
}
</style>
