<template>
  <section>
    <div class="default">
      <div id="loding">
        <loading />
      </div>
      <header class="header-pc">
        <div>
          <img
            @click="goHome"
            class="header-logo"
            src="~/assets/images/logo.png"
            alt=""
          />
          <ul>
            <li :class="{ actived: currentRouterName === 'index' }">
              <nuxt-link to="/">首页</nuxt-link>
            </li>
            <!-- <li :class="{ actived: currentRouterName === 'product' }">
            <nuxt-link to="/product">产品和服务</nuxt-link>
          </li> -->
            <li
              :class="{
                actived:
                  currentRouterName === 'news' ||
                  currentRouterName === 'news-detail',
              }"
            >
              <nuxt-link to="/news">动态</nuxt-link>
            </li>
            <li :class="{ actived: currentRouterName === 'about' }">
              <nuxt-link to="/about">关于公司</nuxt-link>
            </li>
            <li :class="{ actived: currentRouterName === 'contact' }">
              <nuxt-link to="/contact">联系我们</nuxt-link>
            </li>
          </ul>
        </div>
      </header>

      <nuxt />
    </div>
    <div class="default-mobile">
      <header
        class="header-mobile"
        :class="{ isScroll: isScroll && currentRouterName === 'index' }"
      >
        <img
          @click="goHome"
          v-if="currentRouterName === 'index'"
          class="logo"
          src="~/assets/images/logo.png"
          alt=""
        />
        <img
          v-else
          @click="goBack"
          class="back"
          src="~/assets/images/mobile_button_back.png"
          alt=""
        />
        <div class="nav-name">{{ getTitle }}</div>
        <img
          @click="openMask"
          class="menu"
          src="~/assets/images/menu_mobile.png"
          alt=""
        />
      </header>

      <nuxt />
      <transition name="fade">
        <div class="mask" v-if="dialog">
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
          />
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
import * as TYPE from "~/utils/getInfos.js";
import { mapState } from "vuex";
import loading from "@/components/loading";
export default {
  data() {
    return {
      dialog: false,
      isScroll: true,
    };
  },
  computed: {
    ...mapState({
      User: (state) => state.User,
    }),
    currentRouterName() {
      return this.$route.name;
    },
    getTitle() {
      const name = this.$route.name;
      switch (name) {
        case "about":
          return "关于我们";
        case "news":
        case "news-detail":
          return "公司动态";
        case "contact":
          return "联系我们";
        default:
          return "";
      }
    },
  },
  components: {
    loading: loading,
  },
  watch: {
    $route() {
      this.dialog = false;
    },
  },
  created() {},
  mounted() {
    (function (doc, win) {
      var docEl = doc.documentElement,
        resizeEvt =
          "orientationchange" in window ? "orientationchange" : "resize",
        recalc = function () {
          var clientWidth = docEl.clientWidth;
          if (clientWidth > 320) {
            win.RATE = clientWidth / 640;
            if (!clientWidth) return;
            if (clientWidth >= 640) {
              docEl.style.fontSize = "100px";
            } else {
              docEl.style.fontSize = 100 * (clientWidth / 640) + "px";
            }
          }
        };

      if (!doc.addEventListener) return;
      recalc();
      win.addEventListener(resizeEvt, recalc, false);
      doc.addEventListener("DOMContentLoaded", recalc, false);
    })(document, window);

    window.addEventListener("scroll", this.handleScroll, false);
  },
  destroyed() {
    if (this.isIE11()) {
      window.removeEventListener("scroll", this.handleScroll);
    }
  },
  methods: {
    goHome() {
      this.$router.push({ path: "/" });
    },
    isIE11: function () {
      return !!window.MSInputMethodContext && !!document.documentMode;
    },
    handleScroll() {
      this.dialog = false;
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 2) {
        console.log(1, "滚动了");
        this.isScroll = false;
      } else {
        console.log(2, "回到顶部");
        this.isScroll = true;
      }
    },
    goBack() {
      if (window.history.length <= 1) {
        this.$router.push({ path: "/" });
        return;
      }
      this.$router.go(-1);
    },
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
        "index-sign-in",
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
    },
  },
};
</script>


<style  lang="stylus">
.default {
  padding-top: 85px;

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
        cursor: pointer;
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
          font-size: 18px;

          &:hover, &.actived {
            color: #0050B3;
            border-bottom: 2px solid #0050B3;
          }
        }
      }
    }
  }
}

.default-mobile {
  padding-top: 0.89rem;
  display: none;

  .isScroll {
    background-color: rgba(0, 0, 0, 0) !important;
    box-shadow: none !important;
  }

  .nav-name {
    font-size: 0.22rem;
    line-height: 0.3rem;
  }

  .mask {
    z-index: 1001;
    background-color: #0050B3;
    width: 4.61rem;
    height: 2.22rem;
    position: fixed;
    top: 0.23rem;
    right: 0.25rem;
    display: flex;
    justify-content: space-between;
    padding: 0.2rem 0.2rem 0.2rem 0.38rem;
    box-sizing: border-box;

    ul {
      width: 100%;

      li {
        font-size: 0.2rem;
        margin-bottom: 0.19rem;

        a {
          color: #ffffff !important;
          display: inline-block;
          width: 100%;
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

  .header-mobile {
    position: fixed;
    background-color: #ffffff;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.89rem;
    padding: 0 0.35rem 0 0.19rem;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.14);

    .logo {
      width: 2.49rem;
      height: 0.37rem;
      cursor: pointer;
    }

    .back {
      width: 0.25rem;
    }

    .menu {
      width: 0.59rem;
      height: 0.43rem;
    }
  }
}

@media screen and (max-width: 960px) {
  .default {
    display: none;
  }

  .default-mobile {
    display: block;
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
