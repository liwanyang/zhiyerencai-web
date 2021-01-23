<template>
  <section>
    <draggable
      class="list-group"
      tag="ul"
      v-model="list"
      v-bind="dragOptions"
      @start="drag = true"
      @end="drag = false"
    >
      <transition-group type="transition" :name="!drag ? 'flip-list' : null">
        <li
          class="list-group-item"
          v-for="element in list"
          :key="element.order"
        >
          <i
            :class="
              element.fixed ? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'
            "
            @click="element.fixed = !element.fixed"
            aria-hidden="true"
          ></i>
          {{ element.name }}
        </li>
      </transition-group>
    </draggable>
  </section>
</template>

<script>
import draggable from "vuedraggable";
import * as TYPE from "~/utils/getInfos.js";
import { mapState } from "vuex";
// import join from "~/components/join";
const message = [
  "vue.draggable",
  "draggable",
  "component",
  "for",
  "vue.js 2.0",
  "based",
  "on",
  "Sortablejs",
];

export default {
  name: "index",

  data() {
    return {
      title: "首页",
      list: message.map((name, index) => {
        return { name, order: index + 1 };
      }),
      drag: false,
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
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost",
      };
    },
  },
  components: {
    draggable,
  },
  created() {
    //
  },
  watch: {
    // screenWidth(n, o) {
    //   this.setBannerSize(n);
    // }
  },
  mounted() {
    if (this.isIE11()) {
      window.addEventListener("hashchange", this.hashChangeHandler);
    }
    this.init();
    // 菜单悬浮
    // window.addEventListener("scroll", this.handleScroll, false);
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
      // if (/webOS|iPhone|iPod/i.test(navigator.userAgent)) {
      //   this.showMobilDown = true;
      //   this.bannerHeight =
      //     (document.body.clientWidth / 2 < 284
      //       ? "284"
      //       : document.body.clientWidth / 2) + "px";
      // } else {
      //   this.bannerHeight = document.body.clientWidth / 2 - 100 + "px";
      // }
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
.list-group {
  span {
    display: flex;

    li {
      margin-right: 20px;
    }
  }
}
</style>
