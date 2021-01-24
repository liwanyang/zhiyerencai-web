<template>
  <div
    class="default"
    :class="{'default-mobile': IS_MOBILE}"
  >
    <div id="loding">
      <loading />
    </div>
    <header
      v-if="!IS_MOBILE"
      class="header-pc"
    >
      <div>
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
      </div>
    </header>
    <header
      v-else
      class="header-mobile"
    >
      <img
        class="logo"
        src="~/assets/images/logo.png"
        alt=""
      >
      <div></div>
      <img
        @click="openMask"
        class="menu"
        src="~/assets/images/menu_mobile.png"
        alt=""
      >
    </header>
    <transition name="fade">
      <div
        class="mask"
        v-if="dialog"
      >
        <ul>
          <li>
            <nuxt-link to="/">首页</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/news">动态</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about">关于公司</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/contact">联系我们</nuxt-link>
          </li>
        </ul>
        <img
          @click="close"
          class="close-icon"
          src="~/assets/images/mobile_button_close.png"
          alt=""
        >
      </div>
    </transition>

    <nuxt />
  </div>
</template>

<script>
import * as TYPE from "~/utils/getInfos.js";
import { mapState } from "vuex";
import loading from "@/components/loading";
export default {
  data() {
    return {
      dialog: false
    };
  },
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
  watch: {
    $route() {
      this.dialog = false;
    }
  },
  created() {},
  mounted() {
    if (this.IS_MOBILE) {
      (function(doc, win) {
        var docEl = doc.documentElement,
          resizeEvt =
            "orientationchange" in window ? "orientationchange" : "resize",
          recalc = function() {
            var clientWidth = docEl.clientWidth;
            win.RATE = clientWidth / 630;
            if (!clientWidth) return;
            if (clientWidth >= 640) {
              docEl.style.fontSize = "100px";
            } else {
              docEl.style.fontSize = 100 * (clientWidth / 640) + "px";
            }
          };
        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener("DOMContentLoaded", recalc, false);
      })(document, window);
    }
  },
  methods: {
    openMask() {
      this.dialog = true;
    },
    close() {
      this.dialog = false;
    },
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
  padding-top: 85px;

  &.default-mobile {
    padding-top: 0.89rem;

    .mask {
      z-index: 1001;
      background-color: #0050B3;
      width: 4.61rem;
      height: 2.22rem;
      position: absolute;
      top: 0.23rem;
      right: 0.25rem;
      display: flex;
      justify-content: space-between;
      padding: 0.2rem 0.2rem 0.2rem 0.38rem;
      box-sizing: border-box;

      ul {
        li {
          font-size: 0.2rem;
          margin-bottom: 0.19rem;

          a {
            color: #ffffff !important;
          }
        }
      }

      .close-icon {
        width: 0.25rem;
        height: 0.25rem;
      }
    }

    .fade-enter-active, .fade-leave-active {
      transition: opacity 0.5s;
    }

    .fade-enter, .fade-leave-active {
      opacity: 0;
    }
  }

  .header-pc {
    height: 85px;
    background-color: #ffffff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    box-shadow: 0 2px 9px 1px rgba(195, 191, 191, 0.5);

    &>div {
      display: flex;
      align-items: center;
      margin: auto;
      width: 1000px;

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

  .header-mobile {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.89rem;
    padding: 0 0.35rem 0 0.19rem;

    .logo {
      width: 2.49rem;
      height: 0.37rem;
    }

    .menu {
      width: 0.59rem;
      height: 0.43rem;
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
