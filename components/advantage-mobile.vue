<template>
  <div class="advantage-mobile">
    <div class="titles">志业人才的优势</div>
    <img class="bg" src="~/assets/images/home/bg.png" alt="" />
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

.advantage-mobile {
  position: relative;

  .bg {
    position: absolute;
    width: 95%;
    left: 2.5%;
  }

  .titles {
    font-size: 0.26rem;
    margin: 0.7rem 0 0.26rem 0;
    text-align: center;
  }

  ul {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    li {
      width: 2.6rem;
      height: 3.37rem;
      background: #FFFFFF;
      box-shadow: 0.02rem 0.04rem 0.04rem 0 rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0.2rem 0.34rem;
      box-sizing: border-box;
      margin: 0 0.49rem 0.15rem 0;

      &:nth-child(2n) {
        margin: 0;
      }

      img {
        width: 0.94rem;
        height: 0.7rem;
      }

      .content-title {
        margin: 0.14rem 0;
        font-size: 0.24rem;
      }

      .text {
        font-size: 0.18rem;
        line-height: 0.25rem;
      }
    }
  }
}
</style>