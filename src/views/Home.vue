<template>
  <div class="home">
    <header-nav></header-nav>
    <div class="container">
      <left></left>
      <main-part>
        <blog-box v-for="item of this.blogList" :key="item.id" :data="item">
        </blog-box>
      </main-part>
      <right :tags="tagList" :tops="topList"></right>
    </div>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderNav from "@/components/Header";
import Left from "@/components/Left";
import MainPart from "@/components/MainPart";
import Right from "@/components/Right";
import FooterNav from "@/components/Footer";
import axios from "axios";
import BlogBox from "@/components/BlogBox";

export default {
  name: "Home",
  components: {
    HeaderNav,
    Left,
    Right,
    MainPart,
    FooterNav,
    BlogBox
  },
  data() {
    return {
      tagList: [],
      category: {},
      topList: [],
      blogList: []
    };
  },
  methods: {
    getBlog() {
      axios.get("/api/index").then(res => {
        let mdList = res.data.mdList;
        let tagData = {};
        for (let item of mdList) {
          // 处理tag
          for (let tag of item.tag) {
            tag in tagData
              ? tagData[tag].push(item.id)
              : (tagData[tag] = [item.id]);
          }
          // 处理类别
          item.category in this.category
            ? this.category[item.category].push(item.id)
            : (this.category[item.category] = [item.id]);
          // 添加top
          if (item.top) {
            this.topList.push({
              id: item.id,
              title: item.title
            });
          }
          // 打包blog，给blogBox组件
          this.blogList.push({
            id: item.id,
            date: item.date,
            cover: item.cover,
            title: item.title,
            desc: item.description
          });
        }
        // debugger;
        // 排序tag
        for (let key in tagData) {
          this.tagList.push({
            name: key,
            amount: tagData[key]
          });
        }
        this.tagList.sort((a, b) => b.amount.length - a.amount.length);
      });
    }
  },
  mounted() {
    this.getBlog();
  }
};
</script>

<style scoped lang="scss">
@import "~@/assets/CSS/variables.scss";

.container {
  display: flex;
  width: $heartWidth;
  // height: 200rem;
  margin: 1.8rem auto;
}

@media screen and (min-width: 320px) and (max-width: 749px) {
  @import "~@/assets/CSS/mobile.scss";
}

@media screen and (min-width: 750px) and (max-width: 1279px) {
  @import "~@/assets/CSS/middle.scss";
}
</style>
