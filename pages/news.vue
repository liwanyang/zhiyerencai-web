<template>
  <section>
    <section class="news" :class="{ 'news-child': !getRourerName && isChild }">
      <div class="banner" v-if="getRourerName">
        <img src="~/assets/images/news/news.png" alt="" />
      </div>
      <div class="news-list">
        <img class="bg" src="~/assets/images/home/bg.png" alt="" />
        <div class="list" v-if="getRourerName">
          <div class="title">新闻动态</div>
          <ul>
            <li
              v-for="item in newList"
              :key="item.name"
              @click="enterDetail(item.id)"
            >
              <img :src="item.img" alt="" />
              <div class="content">
                <div>
                  <div class="name">{{ item.name }}</div>
                  <div class="text">{{ item.text }}</div>
                </div>
                <div class="date">{{ item.date }}</div>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <nuxt-child></nuxt-child>
        </div>
        <div class="about-footer">
          <footers v-if="getRourerName"></footers>
        </div>
      </div>
    </section>
    <section class="news-mobile">
      <div class="news-list">
        <img class="bg" src="~/assets/images/home/bg.png" alt="" />
        <div class="list" v-if="getRourerName">
          <div class="title">新闻动态</div>
          <ul>
            <li
              v-for="item in newList"
              :key="item.id"
              @click="enterDetail(item.id)"
            >
              <div class="content">
                <div>
                  <div class="name">{{ item.name }}</div>
                  <div class="text">{{ item.text }}</div>
                </div>
                <div class="date">{{ item.date }}</div>
              </div>
              <img :src="item.img" alt="" />
            </li>
          </ul>
        </div>
        <div>
          <nuxt-child></nuxt-child>
        </div>
        <div class="about-footer">
          <footer-mobile v-if="getRourerName"></footer-mobile>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import footers from "~/components/footers.vue";
import footerMobile from "~/components/footer-mobile.vue";
export default {
  name: "news",

  data() {
    return {
      title: "新闻动态",
      isChild: true,
      setTimeoutId: 0,
      newList: [
        {
          id: 1,
          name: '志业人才旗下职业蛙招聘发布战"疫"招募令1',
          img: require("~/assets/images/news/news_image.png"),
          date: "2020-04-23 16:11:16",
          text:
            '微笑口罩计划1"是由志业人才联合创始人尤清清组织发起，他结合志业人才的企业优势，率先推出《"微笑口罩"上海零售业岗位支援计划》，该计划一经推出，便在网络上获得了大量点赞和支持。期间发布的《战"疫"招募令》更是在',
        },
        {
          id: 2,
          name: '志业人才旗下职业蛙招聘发布战"疫"招募令2',
          img: require("~/assets/images/news/news_image.png"),
          date: "2020-04-23 16:11:16",
          text:
            '微笑口罩计划2"是由志业人才联合创始人尤清清组织发起，他结合志业人才的企业优势，率先推出《"微笑口罩"上海零售业岗位支援计划》，该计划一经推出，便在网络上获得了大量点赞和支持。期间发布的《战"疫"招募令》更是在',
        },
        {
          id: 3,
          name: '志业人才旗下职业蛙招聘发布战"疫"招募令3',
          img: require("~/assets/images/news/news_image.png"),
          date: "2020-04-23 16:11:16",
          text:
            '微笑口罩计划3"是由志业人才联合创始人尤清清组织发起，他结合志业人才的企业优势，率先推出《"微笑口罩"上海零售业岗位支援计划》，该计划一经推出，便在网络上获得了大量点赞和支持。期间发布的《战"疫"招募令》更是在',
        },
        {
          id: 4,
          name: '志业人才旗下职业蛙招聘发布战"疫"招募令4',
          img: require("~/assets/images/news/news_image.png"),
          date: "2020-04-23 16:11:16",
          text:
            '微笑口罩计划4"是由志业人才联合创始人尤清清组织发起，他结合志业人才的企业优势，率先推出《"微笑口罩"上海零售业岗位支援计划》，该计划一经推出，便在网络上获得了大量点赞和支持。期间发布的《战"疫"招募令》更是在',
        },
      ],
    };
  },
  computed: {
    getRourerName() {
      return Object.keys(this.$route.params).length === 0;
    },
  },
  components: { footers, footerMobile },
  watch: {
    $route() {
      this.setAfter();
    },
  },
  created() {
    this.setAfter();
  },
  mounted() {},
  destroyed() {},
  methods: {
    setAfter() {
      this.isChild = true;
      if (Object.keys(this.$route.params).length > 0) {
        clearTimeout(this.setTimeoutId);
        this.setTimeoutId = setTimeout(() => {
          this.isChild = false;
        }, 500);
      }
    },
    enterDetail(id) {
      this.$router.push({ name: "news-detail", params: { detail: id } });
    },
  },
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

  &.news-child:after {
    display: none;
  }

  @media screen and (max-width: 1300px) {
    .list {
      max-width: 960px !important;
    }
  }
}

.news-mobile {
  position: relative;
  display: none;

  .bg {
    position: absolute;
    width: 95%;
    left: 2.5%;
  }

  .list {
    position: relative;

    .title {
      font-size: 0.26rem;
      margin: 0.33rem 0 0.14rem 0;
      text-align: center;
    }

    ul {
      li {
        display: flex;
        justify-content: center;
        padding: 0.26rem 0.35rem;

        .content {
          width: 2.85rem;
          margin-right: 0.16rem;

          .name {
            font-size: 0.2rem;
            font-weight: bold;
            line-height: 0.3rem;
          }

          .text {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            color: #434343;
            font-size: 0.2rem;
            margin: 0.03rem 0 0.07rem 0;
          }

          .date {
            font-size: 0.16rem;
            color: #434343;
          }
        }

        img {
          width: 3.36rem;
          height: 1.73rem;
        }
      }
    }
  }
}

@media screen and (max-width: 960px) {
  .news {
    display: none;
  }

  .news-mobile {
    display: block;
  }
}
</style>
