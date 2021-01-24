<template>
  <section class="home">
    <div class="banner">
      <img
        src="~/assets/images/home/banner.png"
        alt=""
      >
      <div class="title">
        <div class="banner-title">蓝领人力资源定制领跑者</div>
        <div class="banner-subTitle">专业成就企业未来</div>
      </div>
    </div>
    <ul class="range">
      <li
        v-for="item in sumList"
        :key="item.title"
      >
        <img
          :src="item.icon"
          alt=""
        >
        <div class="sum-title">
          <div class="sum">{{item.sum}}</div>
          <div class="title">{{item.title}}</div>
        </div>
      </li>
    </ul>
    <section class="main">
      <img
        class="bg"
        src="~/assets/images/home/bg.png"
        alt=""
      >
      <div class="products">
        <product-service></product-service>
        <advantage></advantage>
        <custom
          :imgList="customList"
          title="这些客户更认可志业人才"
        ></custom>
        <custom
          :imgList="resourcesList"
          title="我们正联合这些伙伴改变人力资源行业"
        ></custom>
      </div>
    </section>
    <footers></footers>
  </section>
</template>

<script>
import * as TYPE from "~/utils/getInfos.js";
import { mapState } from "vuex";
import ProductService from "~/components/product-service.vue";
import Advantage from "~/components/advantage.vue";
import custom from "~/components/custom.vue";
import footers from "~/components/footers.vue";

export default {
  name: "index",

  data() {
    return {
      title: "首页",
      sumList: [
        {
          title: "企业客户",
          icon: require("~/assets/images/home/icon_company.png"),
          sum: "60,000+"
        },
        {
          title: "蓝领人才",
          icon: require("~/assets/images/home/icon_worker.png"),
          sum: "500,000+"
        },
        {
          title: "城市布点",
          icon: require("~/assets/images/home/icon_city.png"),
          sum: "200+"
        },
        {
          title: "合作院校",
          icon: require("~/assets/images/home/icon_college.png"),
          sum: "300+"
        }
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
            require("~/assets/images/home/partner_xibei.png")
          ]
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
            require("~/assets/images/home/partner_peter.png")
          ]
        }
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
            require("~/assets/images/home/partner_yiqi.png")
          ]
        },
        {
          id: 2,
          list: [
            require("~/assets/images/home/partner_chinabank.png"),
            require("~/assets/images/home/partner_volks.png"),
            require("~/assets/images/home/partner_boe.png"),
            require("~/assets/images/home/partner_future.png"),
            require("~/assets/images/home/partner_weima.png"),
            require("~/assets/images/home/partner_byd.png")
          ]
        }
      ]
    };
  },
  computed: {
    ...mapState({
      device: state => state.device,
      screenWidth: state => state.screenWidth,
      userLogin: state => state.userLogin
    }),
    showIndex() {
      return this.tabNum === 1;
    }
  },
  components: {
    ProductService,
    Advantage,
    custom,
    footers
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
    hashChangeHandler: function() {
      this.$router.push(
        window.location.hash.substring(1, window.location.hash.length)
      );
    },
    isIE11: function() {
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
    }
  }
};

// position: absolute;
// top: 80px;
// left: 50%;
// transform: translateX(-50%);
</script>

<style lang="stylus" scoped>
$color = #0050B3;

.home {
  .banner {
    min-height: 300px;
    max-height: 492px;
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
        width: 45px;
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
</style>
