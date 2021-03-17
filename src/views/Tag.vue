<template>
  <div class="tag">
    <header-nav></header-nav>
    <div class="container">
      <left></left>
      <main-part>
        <blog-box v-for="item of this.article" :key="item.id" :data="item">
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
import BlogBox from "@/components/BlogBox";
import axios from "axios";
import Global from "@/components/Global";

export default {
  name: "Tag",
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
      blogList: [],
      articleID: "",
      article: {}
    };
  },
  methods: {
    getArticleID() {
      this.articleID = this.$route.params.name;
    },
    getDetail() {
      axios({
        method: "get",
        url: "/api/tag",
        data: {
          name: this.articleID
        }
      }).then(res => {
        this.article = res.data;
      });
    }
  },
  beforeMount() {
    Global.methods.getCpnData(this);
    this.getArticleID();
    this.getDetail();
  },
  watch: {
    $route() {
      this.getArticleID();
      this.getDetail();
    }
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

.markdown-body {
  width: 100%;
  border-radius: 0.625rem;
  padding: 1rem;
}

@media screen and (min-width: 320px) and (max-width: 749px) {
  @import "~@/assets/CSS/mobile.scss";
}

@media screen and (min-width: 750px) and (max-width: 1279px) {
  @import "~@/assets/CSS/middle.scss";
}
</style>
