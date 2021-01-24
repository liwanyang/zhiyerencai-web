<template>
  <section class="news">
    <div
      class="banner"
      v-if="getRourerName"
    >
      <img
        src="~/assets/images/news/news.png"
        alt=""
      >
    </div>
    <div class="news-list">
      <img
        class="bg"
        src="~/assets/images/home/bg.png"
        alt=""
      >
      <div
        class="list"
        v-if="getRourerName"
      >
        <div class="title">新闻动态</div>
        <ul>
          <li
            v-for="item in newList"
            :key="item.name"
            @click="enterDetail"
          >
            <img
              src="~/assets/images/news/news_image.png"
              alt=""
            >
            <div class="content">
              <div>
                <div class="name">志业人才旗下职业蛙招聘发布战"疫"招募令</div>
                <div class="text">"微笑口罩计划"是由志业人才联合创始人尤清清组织发起，他结合志业人才的企业优势，率先推出《"微笑口罩"上海零售业岗位支援计划》，该计划一经推出，便在网络上获得了大量点赞和支持。期间发布的《战"疫"招募令》更是在</div>
              </div>
              <div class="date">2020-04-23 16:11:16</div>
            </div>
          </li>
        </ul>
      </div>
      <div v-show="!getRourerName">
        <nuxt-child keep-alive></nuxt-child>
      </div>
      <div class="about-footer">
        <footers></footers>
      </div>
    </div>
  </section>
</template>

<script>
import footers from "~/components/footers.vue";
export default {
  name: "news",

  data() {
    return {
      title: "新闻动态",
      newList: [
        {
          name: "官方抖音",
          img: require("~/assets/images/contact_douyin.png"),
          text: "为您呈现不一样的志业人才"
        },
        {
          name: "公众号",
          img: require("~/assets/images/contact_douyin.png"),
          text: "随时随地查看您的数据报告"
        },
        {
          name: "小程序",
          img: require("~/assets/images/contact_douyin.png"),
          text: "随时随地查看您的数据报告"
        }
      ]
    };
  },
  computed: {
    getRourerName() {
      return this.$route.name === "news";
    }
  },
  components: { footers },
  created() {
    //
  },
  watch: {},
  mounted() {
    console.log("router::", this.$route);
  },
  destroyed() {},
  methods: {
    enterDetail() {
      this.$router.push({ name: "news-detail" });
    }
  }
};
</script>

<style lang="stylus" scoped>
.news {
  position: relative;
  color: #434343;

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

  .news-list {
    max-width: 1300px;
    margin: 59px auto 0 auto;
    position: relative;
    overflow-y: hidden;

    .bg {
      position: absolute;
      width: 100%;
    }

    .list {
      position: relative;
      max-width: 1200px;
      margin: auto;

      .title {
        margin: 10px 0 20px 0;
        text-align: center;
      }

      ul {
        li {
          display: flex;
          margin-bottom: 25px;
          cursor: pointer;

          img {
            width: 307px;
            height: 165px;
            margin-right: 42px;
          }

          .content {
            .name {
              font-size: 16px;
              color: #434343;
              margin-bottom: 6px;
            }

            .text {
              font-size: 14px;
              line-height: 20px;
              text-align: left;
            }

            .date {
              margin-top: 31px;
              font-size: 16px;
              color: #434343;
            }
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
    .list {
      max-width: 960px !important;
    }
  }
}
</style>
