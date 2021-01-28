<template>
  <section>
    <section
      class="news"
      :class="{ 'news-child': !getRourerName && isChild }"
    >
      <div
        class="banner"
        v-if="getRourerName"
      >
        <img
          src="~/assets/images/news/news.png"
          alt=""
        />
      </div>
      <div class="news-list">
        <img
          class="bg"
          src="~/assets/images/home/bg.png"
          alt=""
        />
        <div
          class="list"
          v-if="getRourerName"
        >
          <div class="title">新闻动态</div>
          <ul>
            <li
              v-for="item in newList"
              :key="item.name"
              @click="enterDetail(item.id)"
            >
              <img
                :src="item.img"
                alt=""
              />
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
        <img
          class="bg"
          src="~/assets/images/home/bg.png"
          alt=""
        />
        <div
          class="list"
          v-if="getRourerName"
        >
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
              <img
                :src="item.img"
                alt=""
              />
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
          name: '志业人才推出"微笑口罩计划"，缓解就业压力',
          img: require("~/assets/images/news/1.png"),
          date: "2020-04-23 17:08:35",
          text:
            '"微笑口罩计划"是由志业人才联合创始人尤清清组织发起，他结合志业人才的企业优势，率先推出《"微笑口罩"上海零售业岗位支援计划》，该计划一经推出，便在网络上获得了大量点赞和支持。期间发布的《战"疫"招募令》更是在短时内获得了超过了10 万的浏览量。'
        },
        {
          id: 2,
          name: "带动10000+人就业的90后女孩:这才刚刚开始",
          img: require("~/assets/images/news/2.png"),
          date: "2019-06-26 17:00",
          text:
            "女性在当下已经发生了很大变化，马云还提到，以前很多女性的梦想就是嫁个好男人有个好孩子，但现在很多女性的梦想是改变世界。“我相信本世纪女性真正能够成为推动社会政治、文化、经济进步的主要力量。”"
        },
        {
          id: 4,
          name:
            "徐汇区人社局联合EFG“天使基金”资助企业职业蛙招聘平台，推出“微笑”系列计划",
          img: require("~/assets/images/news/4.png"),
          date: "2020-06-16 16:11:16",
          text:
            "2019年岁末，一场突如其来的新冠肺炎疫情打破了浓浓的新春氛围，党中央高度对此重视，习近平总书记指示：“要把人民生命安全和身体健康放在第一位”，2020年1月23日，随着一声令下，武汉封城，全国医护人员大动员，纷纷投入到一线的战疫之中。"
        }
        // {
        //   id: 3,
        //   name: "她为4.6万人找到工作，她穿上旗袍做直播，她带领200位绣娘脱贫……",
        //   img: require("~/assets/images/newsDetail/news3/4.png"),
        //   date: "2020-06-10 19:56",
        //   text:
        //     "由徐汇区人社局和红河州人社局共同主办的 2020徐汇-红河“创业梦之星”评选于6月9日在徐汇通、哔哩哔哩和抖音直播上进行了“云启动”。"
        // }
      ]
    };
  },
  computed: {
    getRourerName() {
      return Object.keys(this.$route.params).length === 0;
    }
  },
  components: { footers, footerMobile },
  watch: {
    $route() {
      this.setAfter();
    }
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
    }
  }
};
</script>

<style lang="stylus" scoped>
.news {
  position: relative;
  color: #434343;

  .title {
    font-weight: bold;
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
      font-weight: bold;
      font-size: 0.26rem;
      margin: 0.33rem 0 0.14rem 0;
      text-align: center;
    }

    ul {
      li {
        display: flex;
        justify-content: center;
        padding: 0.26rem 0.35rem;
        cursor: pointer;

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
          width: 2.69rem;
          height: 1.45rem;
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
