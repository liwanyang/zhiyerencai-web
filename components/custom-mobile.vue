<template>
  <section class="custom-mobile">
    <div class="title">{{ title }}</div>

    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="item in imgList" :key="item.id">
        <img :src="ele" alt="" v-for="ele in item.list" :key="ele" />
      </el-carousel-item>
    </el-carousel>
  </section>
</template>
<script>
import draggable from "vuedraggable";
export default {
  components: {
    draggable,
  },
  props: ["title", "imgList"],
  data() {
    return {
      drag: false,
    };
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost",
      };
    },
  },
};
</script>
<style lang="stylus" scoped>
$color = #0050B3;

.custom-mobile {
  margin-top: 50px;

  .title {
    margin-bottom: 0.45rem;
    font-size: 0.26rem;
    color: #434343;
    text-align: center;
  }

  img {
    width: 1.7rem;
  }

  /deep/ .el-carousel__item.is-animating {
    text-align: center;
  }

  /deep/ .el-carousel__container {
    width: 5.25rem;
    height: 4.8rem;
    margin: auto;
  }
}
</style>