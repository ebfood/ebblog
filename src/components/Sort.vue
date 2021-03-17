<template>
  <div class="sort">
    <h4>文章分类</h4>
    <ul>
      <li>
        <router-link :to="'/category/前端'">
          <span class="iconfont">&#xe699;</span>前端
        </router-link>
      </li>
      <!--      <li><a href="#"><span class="iconfont">&#xe6f7;</span>JavaScript</a></li>-->
      <!--      <li><a href="#"><span class="iconfont">&#xe669;</span>Vue</a></li>-->
      <li>
        <router-link :to="'/category/算法题'">
          <span class="iconfont">&#xe6b3;</span>算法题
        </router-link>
      </li>
      <li>
        <router-link :to="'/category/葱妹自救指南'">
          <span class="iconfont">&#xe61b;</span>葱妹自救指南
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "sort"
};
</script>

<style scoped lang="scss">
@import "~@/assets/CSS/variables.scss";

.sort {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  //height: 16rem;
  padding: 1rem 0;
  margin-bottom: 1rem;
  border-radius: 0.625rem;
  background-color: $frontColor;

  h4 {
    width: 100%;
    padding-left: 1.5rem;
    text-align: left;
    color: #999;
  }

  span {
    margin: 0 1.5rem;
  }

  ul {
    width: 100%;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    line-height: 2.2;
    font-weight: 600;

    li {
      display: flex;
      width: 100%;
    }

    a {
      width: 100%;
      flex: 1;
      text-align: left;
      //border-radius: 0.6rem;
      //&:hover {
      //  color: $hoverFontColor;
      //  background-color: $hoverBGColor;
      //}
    }
  }
}
</style>
