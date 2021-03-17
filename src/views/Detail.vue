<template>
  <div class="detail">
    <header-nav></header-nav>
    <div class="container">
      <left></left>
      <main-part>
        <div class="markdown-body">
          <vue-markdown
            :source="this.article.article.content"
            v-highlight
          ></vue-markdown>
        </div>
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
import VueMarkdown from "vue-markdown";
import axios from "axios";
import Global from "@/components/Global";

export default {
  name: "Detail",
  components: {
    HeaderNav,
    Left,
    Right,
    MainPart,
    FooterNav,
    VueMarkdown
  },
  data() {
    return {
      tagList: [],
      category: {},
      topList: [],
      blogList: [],
      articleID: "",
      article: {
        // 不这么写会有警告，模版里调用不到
        article: {
          content: ""
        }
      }
    };
  },
  methods: {
    getArticleID() {
      this.articleID = this.$route.params.id;
    },
    getDetail() {
      axios({
        method: "get",
        url: "/api/detail",
        data: {
          id: this.articleID
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
