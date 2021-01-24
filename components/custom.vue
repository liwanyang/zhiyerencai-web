<template>
  <div class="custom">
    <div class="title">{{title}}</div>

    <!-- v-model="list" -->
    <draggable
      class="list-group"
      tag="ul"
      v-bind="dragOptions"
      @start="drag = true"
      @end="drag = false"
    >
      <transition-group
        type="transition"
        :name="!drag ? 'flip-list' : null"
      >
        <li
          class="list-group-item"
          v-for="element in imgList"
          :key="element.id"
        >
          <img
            v-for="(item,index) in element.list"
            :key="index"
            :src="item"
            alt=""
          >
        </li>
      </transition-group>
    </draggable>
  </div>
</template>
<script>
import draggable from "vuedraggable";
export default {
  components: {
    draggable
  },
  props: ["title", "imgList"],
  data() {
    return {
      drag: false
    };
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    }
  }
};
</script>
<style lang="stylus" scoped>
$color = #0050B3;

.custom {
  margin-top: 50px;

  .title {
    margin-bottom: 37px;
    font-size: 21px;
    color: #434343;
    text-align: center;
  }

  .list-group {
    width: 1200px;
    margin: auto;

    &>span {
      display: flex;

      .list-group-item {
        &:nth-child(1) {
          margin-right: 30px;
        }

        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        img {
          width: 175px;
        }
      }
    }
  }

  @media screen and (max-width: 1300px) {
    .list-group {
      width: 960px;

      &>span {
        .list-group-item {
          &:nth-child(1) {
            margin-right: 15px;
          }

          img {
            width: 150px;
          }
        }
      }
    }
  }
}
</style>