<template>
  <section>
    <section class="about">
      <div class="banner">
        <img src="~/assets/images/about/banner_about.png" alt="" />
      </div>
      <div class="brief-introduction">
        <div class="title">公司简介</div>
        <p>
          志业人才集团总部设于上海，下属全国30家办事处。覆盖北京、杭州、天津、苏州、
          广州、深圳、南京、武汉、重庆、成都、川渝等地。致力于打造世界领先的产、教、研融合的人才生涯服务
          领导者，集职业教育+人力资源服务+人工智能于一体，专注于新生代蓝领人才用工解决方案，为全国企
          业提供定制化、全方位的人力资源外包服务。发挥“招人快、选人准、用人稳”的核心优势，累计帮助百万
          人入职2700余家中大型企业的心仪岗位，定制化深度解决全国企业的新生代蓝领用工痛点。同时与全国超
          50所中高职院校联合建立实训学院，结合平台大数据精准匹配，聚焦现代服务业、制造业服务外包、人才
          招聘与派遣、中高端灵活用工、残疾人就业安置、财税筹划管理咨询等服务。研发AI技术驱动下的测学聘一
          体化平台，集合人才、资本、技术、资源，为现代服务业人才生涯发展、促进社会就业做出巨大贡献。
        </p>
      </div>
      <div class="company-culture">
        <img class="bg" src="~/assets/images/home/bg.png" alt="" />
        <div class="vision">
          <div class="title">企业愿景和价值观</div>
          <ul class="list">
            <li>客户第一</li>
            <li>诚实守信</li>
            <li>客户第一</li>
            <li>诚实守信</li>
            <li>客户第一</li>
            <li>诚实守信</li>
          </ul>
        </div>
        <div class="honor">
          <div class="title">奖项荣誉</div>
          <ul>
            <li v-for="item in honorList" :key="item.text">
              <img :src="item.img" alt="" />
              <div class="text">{{ item.text }}</div>
            </li>
          </ul>
        </div>
        <div class="about-footer">
          <footers></footers>
        </div>
      </div>
    </section>
    <section class="about-mobile">
      <section class="parents">
        <div class="brief-introduction">
          <img class="bg" src="~/assets/images/home/bg.png" alt="" />
          <div class="title">公司简介</div>
          <p class="introduction">
            志业人才集团总部设于上海，下属全国30家办事处。覆盖北京、杭州、天津、苏州、
            广州、深圳、南京、武汉、重庆、成都、川渝等地。致力于打造世界领先的产、教、研融合的人才生涯服务
            领导者，集职业教育+人力资源服务+人工智能于一体，专注于新生代蓝领人才用工解决方案，为全国企
            业提供定制化、全方位的人力资源外包服务。发挥“招人快、选人准、用人稳”的核心优势，累计帮助百万
            人入职2700余家中大型企业的心仪岗位，定制化深度解决全国企业的新生代蓝领用工痛点。同时与全国超
            50所中高职院校联合建立实训学院，结合平台大数据精准匹配，聚焦现代服务业、制造业服务外包、人才
            招聘与派遣、中高端灵活用工、残疾人就业安置、财税筹划管理咨询等服务。研发AI技术驱动下的测学聘一
            体化平台，集合人才、资本、技术、资源，为现代服务业人才生涯发展、促进社会就业做出巨大贡献。
          </p>
        </div>
        <div class="vision">
          <div class="title">企业愿景和价值观</div>
          <ul class="list">
            <li>客户第一</li>
            <li>诚实守信</li>
            <li>客户第一</li>
            <li>诚实守信</li>
            <li>客户第一</li>
            <li>诚实守信</li>
          </ul>
        </div>
        <div class="honor">
          <div class="title">奖项荣誉</div>
          <ul>
            <li v-for="item in honorList" :key="item.text">
              <img :src="item.img" alt="" />
              <div class="text">{{ item.text }}</div>
            </li>
          </ul>
        </div>
      </section>
      <footer-mobile></footer-mobile>
    </section>
  </section>
</template>

<script>
import footers from "~/components/footers.vue";
import footerMobile from "~/components/footer-mobile.vue";
export default {
  name: "about",

  data() {
    return {
      title: "关于我们",
      honorList: [
        {
          img: require("~/assets/images/contact_douyin.png"),
          text: "2015中国人力资源外包服务行业“客户服务满意度奖”",
        },
        {
          img: require("~/assets/images/contact_douyin.png"),
          text: "2016品牌中国“金谱奖”人力资源服务行业新锐品牌",
        },
        {
          img: require("~/assets/images/contact_douyin.png"),
          text: "2016中国人力资源外包服务行业“优秀蓝领派遣企业”",
        },
        {
          img: require("~/assets/images/contact_douyin.png"),
          text: "大中华区人力资源服务品牌100强",
        },
        {
          img: require("~/assets/images/contact_douyin.png"),
          text: "2017中国人才管理奖",
        },
        {
          img: require("~/assets/images/contact_douyin.png"),
          text: "全国优秀民办职业介绍机构",
        },
      ],
    };
  },
  computed: {},
  components: { footers, footerMobile },
  created() {
    //
  },
  watch: {},
  mounted() {},
  destroyed() {},
  methods: {},
};
</script>

<style lang="stylus" scoped>
.about {
  position: relative;

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

  .brief-introduction {
    width: 1194px;
    margin: auto;

    .title {
      margin: 70px 0 8px 0;
      text-align: center;
    }

    p {
      line-height: 20px;
      font-size: 14px;
      color: #434343;
    }
  }

  .company-culture {
    max-width: 1300px;
    margin: 20px auto 0 auto;
    position: relative;
    overflow-y: hidden;

    .bg {
      position: absolute;
      width: 100%;
    }

    .vision {
      text-align: center;

      .title {
        margin: 30px 0 42px 0;
      }

      .list {
        display: flex;
        justify-content: center;

        li {
          margin-right: 100px;

          &:last-child {
            margin-right: 0;
          }
        }
      }
    }

    .honor {
      text-align: center;
      position: relative;

      .title {
        margin: 151px 0 21px 0;
      }

      ul {
        display: flex;
        justify-content: center;

        li {
          margin-right: 47px;

          &:last-child {
            margin-right: 0;
          }

          img {
            width: 110px;
            height: 110px;
          }

          .text {
            width: 150px;
            font-size: 14px;
            color: #434343;
            line-height: 20px;
            text-align: left;
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
    .brief-introduction {
      width: 960px !important;
    }

    .honor {
      ul {
        li {
          margin-right: 20px !important;
        }
      }
    }
  }
}

.about-mobile {
  display: none;
  min-width: 320px;

  &>section.parents {
    padding: 0.39rem 0.35rem;
    position: relative;
  }

  .title {
    font-weight: bold;
    font-size: 0.26rem;
    text-align: center;
  }

  .bg {
    position: absolute;
    width: 95%;
    left: 2.5%;
  }

  .brief-introduction {
    .title {
      margin-bottom: 0.23rem;
    }

    .introduction {
      position: relative;
      font-size: 0.2rem;
      line-height: 0.28rem;
      text-align: justify;
    }
  }

  .vision {
    position: relative;

    .title {
      margin: 0.81rem 0 0.32rem 0;
    }

    .list {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      li {
        width: 33%;
        text-align: center;
        margin-bottom: 0.31rem;
      }
    }
  }

  .honor {
    position: relative;

    .title {
      margin: 0.46rem 0 0.36rem 0;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      li {
        width: 33%;
        text-align: center;
        margin-bottom: 0.2rem;

        img {
          width: 1.1rem;
          height: 1.1rem;
        }

        .text {
          width: 1.61rem;
        }
      }
    }
  }
}

@media screen and (max-width: 960px) {
  .about {
    display: none;
  }

  .about-mobile {
    display: block;
  }
}
</style>
