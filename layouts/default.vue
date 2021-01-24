<template>
  <div class="default">
    <!-- <transition name="slide-fade"> -->
    <div id="loding">
      <loading />
    </div>
    <header>
      <img
        src="~/assets/images/logo.png"
        alt=""
      >
      <ul>
        <li :class="{actived: currentRouterName === 'index'}">
          <nuxt-link to="/">首页</nuxt-link>
        </li>
        <li :class="{actived: currentRouterName === 'product'}">
          <nuxt-link to="/product">产品和服务</nuxt-link>
        </li>
        <li :class="{actived: currentRouterName === 'news' || currentRouterName === 'news-detail'}">
          <nuxt-link to="/news">动态</nuxt-link>
        </li>
        <li :class="{actived: currentRouterName === 'about'}">
          <nuxt-link to="/about">关于公司</nuxt-link>
        </li>
        <li :class="{actived: currentRouterName === 'contact'}">
          <nuxt-link to="/contact">联系我们</nuxt-link>
        </li>
      </ul>
    </header>
    <nuxt />
    <!-- </transition> -->
  </div>
</template>

<script>
import * as TYPE from "~/utils/getInfos.js";
import { mapState } from "vuex";
import loading from "@/components/loading";
export default {
  // middleware: 'listen-route',
  computed: {
    ...mapState({
      User: state => state.User
    }),
    currentRouterName() {
      return this.$route.name;
    }
  },
  components: {
    loading: loading
  },
  created() {
    console.log("router::", this.currentRouterName);
  },
  mounted() {
    if (this.IS_MOBILE) {
      (function(doc, win) {
        var docEl = doc.documentElement,
          resizeEvt =
            "orientationchange" in window ? "orientationchange" : "resize",
          recalc = function() {
            var clientWidth = docEl.clientWidth;
            win.RATE = clientWidth / 750;
            if (!clientWidth) return;
            if (clientWidth >= 750) {
              docEl.style.fontSize = "100px";
            } else {
              docEl.style.fontSize = 100 * (clientWidth / 750) + "px";
            }
          };
        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener("DOMContentLoaded", recalc, false);
      })(document, window);
    }
  },
  methods: {
    routerGuide() {
      /* 权限验证 */
      // 忽略名单
      const ignores = [
        "index",
        "index-apply-funding",
        "index-sign-up",
        "index-sign-in"
      ];
      this.$router.beforeEach((to, from, next) => {
        // console.log(to.name)
        // 不校验直接跳转
        if (ignores.includes(to.name)) {
          next();
        } else {
          // 登录验证
          let email = this.User.email;
          if (email) {
            next();
          } else {
            next({ name: "index-sign-in" });
          }
        }
      });
    }
  }
};
</script>

<style  lang="stylus">
.default {
  header {
    height: 85px;
    display: flex;
    align-items: center;
    width: 1000px;
    margin: auto;

    img {
      width: 190px;
      height: 29px;
    }

    ul {
      display: flex;
      margin-left: 213px;

      li {
        margin-right: 50px;
        cursor: pointer;
        padding-bottom: 2px;

        &:hover, &.actived {
          color: #0050B3;
          border-bottom: 2px solid #0050B3;
        }
      }
    }
  }
}

@media (max-width: 767px) {
  /* 屏幕在767像素以下含767像素,这里的样式生效 */
  #loding {
    width: 100vw;
    height: 100vh;
    position: fixed;
    display: none;
    z-index: 11;
    top: 0;
    left: 0;
  }
}

@media (min-width: 768px) {
  /* 屏幕在768像素以上含768像素,这里的样式生效 */
  #loding {
    width: 100vw;
    height: 100vh;
    position: fixed;
    display: none;
    z-index: 11;
    top: 0;
  }
}
</style>
