<template>
  <section
    class="news-detail"
    :class="{'news-detail-mobile': IS_MOBILE}"
  >
    <div>
      <div class="title">志业人才旗下职业蛙招聘发布战"疫"招募令</div>
      <div class="date">2020-04-23 16:11:16</div>
    </div>
    <div class="content">
      <p>"微笑口罩计划"是由志业人才联合创始人尤清清组织发起，他结合志业人才的企业优势，率先推出《"微笑口罩"上海零售业岗位支援计划》，该计划一经推出，便在网络上获得了大量点赞和支持。期间发布的《战"疫"招募令》更是在</p>
      <img
        src="~/assets/images/news/news_image.png"
        alt=""
      >
      <p>"微笑口罩计划"是由志业人才联合创始人尤清清组织发起，他结合志业人才的企业优势，率先推出《"微笑口罩"上海零售业岗位支援计划》，该计划一经推出，便在网络上获得了大量点赞和支持。期间发布的《战"疫"招募令》更是在</p>
      <p>"微笑口罩计划"是由志业人才联合创始人尤清清组织发起，他结合志业人才的企业优势，率先推出《"微笑口罩"上海零售业岗位支援计划》，该计划一经推出，便在网络上获得了大量点赞和支持。期间发布的《战"疫"招募令》更是在</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "newsDetail",

  data() {
    return {
      title: "新闻详情",
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
  computed: {},
  components: {},
  created() {
    //
    console.log("router::", this.$route);
  },
  watch: {},
  mounted() {},
  destroyed() {},
  methods: {}
};
</script>

<style lang="stylus" scoped>
.news-detail {
  width: 833px;
  margin: auto;
  position: relative;
  color: #434343;

  .title {
    font-size: 21px;
    font-weight: bold;
  }

  .date {
    font-size: 16px;
  }

  .content {
    text-align: center;

    p {
      margin: 21px 0;
      text-align: left;
    }

    img {
      width: 718px;
      margin-bottom: 22px;
    }
  }

  &.news-detail-mobile {
    padding: 0.27rem 0.35rem;
    width: auto;

    .content {
      p {
        font-size: 0.2rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }

      img {
        width: 5.69rem;
      }
    }

    .title {
      font-size: 0.24rem;
    }

    .date {
      font-size: 0.16rem;
    }
  }
}
</style>
