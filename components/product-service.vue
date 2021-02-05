<template>
  <div class="product-service">
    <div class="title">产品和服务</div>
    <!-- <ul class="tab">
      <li
        v-for="(item, index) in tabList"
        :key="item"
        @click="getIndex(index)"
        :class="{ 'tab-active': tabIndex === index }"
      >
        {{ item }}
      </li>
    </ul> -->
    <!-- <div class="content">
      <img :src="currentContent.img" alt="" />
      <div class="content-list">
        <h3>{{ currentContent.subTitle }}</h3>
        <ul class="content-ul">
          <li v-for="ele in currentContent.list" :key="ele">{{ ele }}</li>
        </ul>
      </div>
    </div> -->
    <div class="content" v-for="item in contentList" :key="item.id">
      <img :src="item.img" alt="" />
      <div class="content-list">
        <h3>{{ item.subTitle }}</h3>
        <ul class="content-ul">
          <li v-for="ele in item.list" :key="ele">{{ ele }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabIndex: 0,
      tabList: ["职业蛙招聘", "志业实训基地", "开拓者零工", "志业AIJob"],
      contentList: [
        {
          title: "职业蛙招聘",
          id: 1,
          subTitle: "人事代理、招聘外服、业务外包，繁琐事务放心托管",
          img: require("~/assets/images/home/tab1.png"),
          list: [
            "专业团队为企业定制专属服务",
            "5大专业领域、650万蓝领人才数据支撑",
            "AI智选造就高效人岗速配",
          ],
        },
        {
          title: "志业实训基地",
          id: 2,
          subTitle:
            "联合企业在职业院校开展产教融合业务，招生招工一体化，入校即入企，上课即上岗，毕业即就业",
          img: require("../assets/images/home/tab2.png"),
          list: [
            "联合企业在职业院校开展产教融合业务，招生招工一体化，入校即入企，上课即上岗，毕业即就业",
            "60万+高校人才资源",
            "世界知名企业联合实训",
            "定向办学，产教融合，达成人、企、校三方共赢",
          ],
        },
        {
          title: "开拓者零工",
          id: 3,
          subTitle:
            "满足企业多元场景用工的服务平台，岗位随需随发，结算一站满足，安全规范省钱省力。",
          img: require("../assets/images/home/tab3.png"),
          list: [
            "满足企业多元场景灵活用工需求",
            "顾问式一对一服务，放心可托管",
            "优化企业用工成本，安全合规可信赖",
            "助力企业构建人力储备库",
          ],
        },
        {
          title: "志业AIJob",
          id: 4,
          subTitle:
            "依托集团积累的数百万行业数据，以智能计算为驱动，实现企业和候选人速配",
          img: require("../assets/images/home/tab4.png"),
          list: [
            "基于“志业云大脑”的智能运算服务",
            "AI招聘助手，轻松应答，快速约面到面",
          ],
        },
      ],
    };
  },
  computed: {
    currentContent() {
      console.log(
        "list::",
        this.contentList.find((item) => item.id === this.tabIndex + 1)
      );

      return this.contentList.find((item) => item.id === this.tabIndex + 1);
    },
  },
  methods: {
    getIndex(index) {
      this.tabIndex = index;
    },
  },
};
</script>
<style lang="stylus" scoped>
$color = #0050B3;

.product-service {
  .title {
    font-weight: bold;
    font-size: 21px;
    color: #434343;
    text-align: center;
  }

  .tab {
    display: flex;
    justify-content: center;
    margin-top: 24px;

    li {
      margin-right: 106px;
      cursor: pointer;
      font-size: 16px;

      &:last-child {
        margin-right: 0;
      }

      &.tab-active {
        color: $color;

        &:after {
          content: '';
          display: block;
          width: 25px;
          height: 1px;
          background-color: $color;
          margin: 2px auto;
        }
      }
    }
  }

  .content {
    display: flex;
    justify-content: center;
    margin-top: 65px;

    img {
      width: 389px;
      height: 229px;
    }

    .content-list {
      margin-left: 89px;
      width: 529px;

      h3 {
        font-size: 18px;
        font-weight: normal;
      }

      .content-ul {
        margin-top: 10px;

        li {
          line-height: 30px;
          font-size: 14px;
          color: #434343;
        }
      }
    }
  }
}
</style>