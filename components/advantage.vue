<template>
  <div class="advantage">
    <div class="title">志业人才的优势</div>
    <ul>
      <li v-for="item in list" :key="item.title">
        <img :src="item.icon" alt="" />
        <div class="content-title">{{ item.title }}</div>
        <div class="text">{{ item.text }}</div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          title: "旗舰级交付能力",
          icon: require("~/assets/images/home/bg_deliver.png"),
          text:
            "资深的人力资源项目团队、招聘交付团队、 法务团队、数据系统技术开发团队等，为客户及候选人提供旗舰级专业服务。",
        },
        {
          title: "安全合规",
          icon: require("~/assets/images/home/bg_trust.png"),
          text:
            "志业人才拥有工业级信息安全管理体系，安全中心7*24小时监控和安全应急响应，保证客户数据和运营安全。",
        },
        {
          title: "创新成就高效",
          icon: require("~/assets/images/home/bg_brain.png"),
          text:
            "“志业云大脑 ” 和 “志业云管家”，实现线上数据化和线下交付的一站式服务平台。技术创新只为成就高效服务。",
        },
        {
          title: "丰富的人力资源",
          icon: require("~/assets/images/home/bg_brand.png"),
          text:
            "志业人才拥有50万+专业蓝领人才，200多个城市布点，合作企业近万家，并建立了300余家专业的校企合作部。",
        },
      ],
    };
  },
};
</script>
<style lang="stylus" scoped>
$color = #0050B3;

.advantage {
  margin-top: 80px;

  .title {
    font-weight: bold;
    font-size: 21px;
    color: #434343;
    text-align: center;
  }

  ul {
    display: flex;
    justify-content: center;
    margin-top: 37px;

    li {
      width: 260px;
      height: 337px;
      box-shadow: 2px 4px 4px 0 rgba(0, 0, 0, 0.1);
      margin-right: 49px;
      background-color: #ffffff;
      display: flex;
      flex-direction: column;
      align-items: center;

      &:last-child {
        margin-right: 0;
      }

      img {
        width: 94px;
        margin-top: 20px;
      }

      .content-title {
        font-size: 18px;
        color: #434343;
        margin: 20px 0;
      }

      .text {
        width: 85%;
        color: #4C4B4B;
        font-size: 14px;
        line-height: 25px;
      }
    }
  }

  @media screen and (max-width: 1300px) {
    li {
      height: 300px !important;
    }
  }
}
</style>