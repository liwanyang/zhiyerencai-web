<template>
  <div>
    <!-- <transition name="slide-fade"> -->
    <div id="loding">
      <loading />
    </div>
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
      User: (state) => state.User,
    }),
  },
  components: {
    loading: loading,
  },
  mounted() {
    if (this.IS_MOBILE) {
      (function (doc, win) {
        var docEl = doc.documentElement,
          resizeEvt =
            "orientationchange" in window ? "orientationchange" : "resize",
          recalc = function () {
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
