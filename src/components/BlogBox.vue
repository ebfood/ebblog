<template>
  <div class="blog-box">
    <div
      class="cover"
      :style="{ 'background-image': 'url(' + imgUrl + ')' }"
    ></div>
    <div class="content">
      <h2>利用媒体查询实现响应式布局</h2>
      <p>不同屏幕下, 通过媒体查询改变布局容器的大小,
        再改变里面的子元素排列方式,
        从而实现在不同屏幕下, 看到的布局样式不同
        一般叫做container, 直接用@media设置</p>
      <span>2021-3-14</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "blog-box",
  data() {
    return {
      imgUrl: "http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071002.png"
    };
  }
};
</script>

<style scoped lang="scss">
@import "~@/assets/CSS/variables.scss";

.blog-box {
  overflow: hidden;
  width: 100%;
  margin-bottom: 1rem;
  border-radius: 0.625rem;
  background-color: $frontColor;

  .cover {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: 100%;
    height: 14rem;
    @media screen and (min-width: 320px) and (max-width: 749px) {
      height: 10rem;
    }
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-position: center center; //很重要
  }

  .content {
    padding: 0 1rem;
    margin: 0.5rem 0;
    span {
      display: block;
      color: #aaa;
      margin-bottom: 0.5rem;
    }
  }
}
</style>
