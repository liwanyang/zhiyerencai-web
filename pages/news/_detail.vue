<template>
  <section
    class="news-detail"
    :class="{ 'news-detail-mobile': IS_MOBILE }"
  >
    <div>
      <div class="title">{{ currentContent.title }}</div>
      <div class="date">{{ currentContent.date }}</div>
    </div>
    <div class="content">
      <div
        v-for="item in currentContent.contentList"
        :key="item"
      >
        <p v-if="item.indexOf('/_nuxt') < 0">{{ item }}</p>
        <img
          v-else
          :src="item"
          alt=""
        />
      </div>
    </div>
    <footers v-if="Object.keys(currentContent).length && !IS_MOBILE"></footers>
    <footer-mobile v-if="Object.keys(currentContent).length && IS_MOBILE"></footer-mobile>
  </section>
</template>

<script>
import footers from "~/components/footers.vue";
import footerMobile from "~/components/footer-mobile.vue";
export default {
  name: "newsDetail",

  data() {
    return {
      title: "新闻详情",
      newsId: 0,
      currentContent: {},
      newList: [
        {
          id: 1,
          title: '志业人才旗下职业蛙招聘发布战"疫"招募令1',
          date: "2020-04-23 16:11:16",
          contentList: [
            '"微笑口罩计划1"是由志业人才联合创始人尤清清组织发起，他结合志业人才的企业优势，率先推出《"微笑口罩"上海零售业岗位支援计划》，该计划一经推出，便在网络上获得了大量点赞和支持。期间发布的《战"疫"招募令》更是在',
            require("~/assets/images/news/news_image.png"),
            '"微笑口罩计划2"是由志业人才联合创始人尤清清组织发起，他结合志业人才的企业优势，率先推出《"微笑口罩"上海零售业岗位支援计划》，该计划一经推出，便在网络上获得了大量点赞和支持。期间发布的《战"疫"招募令》更是在',
            '"微笑口罩计划3"是由志业人才联合创始人尤清清组织发起，他结合志业人才的企业优势，率先推出《"微笑口罩"上海零售业岗位支援计划》，该计划一经推出，便在网络上获得了大量点赞和支持。期间发布的《战"疫"招募令》更是在'
          ]
        },
        {
          id: 2,
          title: '志业人才旗下职业蛙招聘发布战"疫"招募令2',
          date: "2020-04-23 16:11:16",
          contentList: [
            '"微笑口罩计划4"是由志业人才联合创始人尤清清组织发起，他结合志业人才的企业优势，率先推出《"微笑口罩"上海零售业岗位支援计划》，该计划一经推出，便在网络上获得了大量点赞和支持。期间发布的《战"疫"招募令》更是在',
            require("~/assets/images/news/news_image.png"),
            '"微笑口罩计划5"是由志业人才联合创始人尤清清组织发起，他结合志业人才的企业优势，率先推出《"微笑口罩"上海零售业岗位支援计划》，该计划一经推出，便在网络上获得了大量点赞和支持。期间发布的《战"疫"招募令》更是在',
            '"微笑口罩计划6"是由志业人才联合创始人尤清清组织发起，他结合志业人才的企业优势，率先推出《"微笑口罩"上海零售业岗位支援计划》，该计划一经推出，便在网络上获得了大量点赞和支持。期间发布的《战"疫"招募令》更是在'
          ]
        },
        {
          id: 3,
          title: '志业人才旗下职业蛙招聘发布战"疫"招募令3',
          date: "2020-04-23 16:11:16",
          contentList: [
            '"微笑口罩计划7"是由志业人才联合创始人尤清清组织发起，他结合志业人才的企业优势，率先推出《"微笑口罩"上海零售业岗位支援计划》，该计划一经推出，便在网络上获得了大量点赞和支持。期间发布的《战"疫"招募令》更是在',
            require("~/assets/images/news/news_image.png"),
            '"微笑口罩计划8"是由志业人才联合创始人尤清清组织发起，他结合志业人才的企业优势，率先推出《"微笑口罩"上海零售业岗位支援计划》，该计划一经推出，便在网络上获得了大量点赞和支持。期间发布的《战"疫"招募令》更是在',
            '"微笑口罩计划9"是由志业人才联合创始人尤清清组织发起，他结合志业人才的企业优势，率先推出《"微笑口罩"上海零售业岗位支援计划》，该计划一经推出，便在网络上获得了大量点赞和支持。期间发布的《战"疫"招募令》更是在'
          ]
        },
        {
          id: 4,
          title: '志业人才旗下职业蛙招聘发布战"疫"招募令4',
          date: "2020-04-23 16:11:16",
          contentList: [
            '"微笑口罩计划10"是由志业人才联合创始人尤清清组织发起，他结合志业人才的企业优势，率先推出《"微笑口罩"上海零售业岗位支援计划》，该计划一经推出，便在网络上获得了大量点赞和支持。期间发布的《战"疫"招募令》更是在',
            require("~/assets/images/news/news_image.png"),
            '"微笑口罩计划11"是由志业人才联合创始人尤清清组织发起，他结合志业人才的企业优势，率先推出《"微笑口罩"上海零售业岗位支援计划》，该计划一经推出，便在网络上获得了大量点赞和支持。期间发布的《战"疫"招募令》更是在',
            '"微笑口罩计划12"是由志业人才联合创始人尤清清组织发起，他结合志业人才的企业优势，率先推出《"微笑口罩"上海零售业岗位支援计划》，该计划一经推出，便在网络上获得了大量点赞和支持。期间发布的《战"疫"招募令》更是在'
          ]
        }
      ]
    };
  },
  computed: {},
  components: { footers, footerMobile },
  created() {
    //
  },
  watch: {
    $route() {
      this.getRouteParams();
    }
  },
  mounted() {
    this.getRouteParams();
  },
  destroyed() {},
  methods: {
    getRouteParams() {
      const params = this.$route.params;
      if (params.detail) {
        this.newsId = params.detail;
        this.currentContent = this.newList.find(
          item => Number(item.id) === Number(this.newsId)
        );
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.news-detail {
  position: relative;
  color: #434343;

  &>div {
    width: 833px;
    margin: auto;
  }

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
    &>div {
      padding: 0.27rem 0.35rem;
      width: auto;
    }

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
