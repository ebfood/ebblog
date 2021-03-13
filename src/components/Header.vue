<template>
  <div class="header">
    <div class="nav">
      <span class="banner">
        <a href="/" class="iconfont">&#xe61b;</a>
        <span>EB BLOG</span>
      </span>
      <span class="about">
        <a class="iconfont" href="https://github.com/ebfood">&#xe732;</a>
        <a class="iconfont" href="/wechat.jpg">&#xe610;</a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped lang="scss">
@import "~@/assets/CSS/variables.scss";

.header {
  display: flex;
  width: 100%;
  height: 3.5rem;
  padding: 0 7.5%;
  background-color: $frontColor;
  .nav {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // width: $heartWidth;
    height: 100%;
    margin: 0 auto;

    .banner {
      display: flex;
      align-items: center;
      height: 100%;
      font-size: 1.2rem;
      font-weight: 700;
      color: $fontColor;

      a {
        margin: 0 0.3rem;
        font-size: 1.5rem;
        color: $fontColor;
      }
    }

    .about {
      a {
        margin: 0 0.8rem;
        font-size: 1.7rem;
        color: $fontColor;
      }
    }
  }
}
</style>
