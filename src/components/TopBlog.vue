<template>
  <div class="top-blog">
    <h4>置顶文章</h4>
    <ul>
      <li><a href="#" class="tags">利用媒体查询实现响应式布局,利用媒体查询实现响应式布局</a></li>
      <li><a href="#" class="tags">不同屏幕下, 通过媒体查询改变布局容器的大小</a></li>
      <li><a href="#" class="tags">再改变里面的子元素排列方式, 从而实现在不同屏幕</a></li>
      <li><a href="#" class="tags">样式不同 一般叫做container, 直接用@media设置</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "top-blog"
};
</script>

<style scoped lang="scss">
@import "~@/assets/CSS/variables.scss";

.top-blog {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 1rem 0;
  border-radius: 0.625rem;
  background-color: $frontColor;

  h4 {
    width: 100%;
    padding-left: 1.5rem;
    text-align: left;
    color: #999;
  }

  ul {
    width: 100%;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-weight: 500;

    li {
      display: flex;
      width: 100%;
      padding: 0.5rem 0;
      border-top: 1px solid #555;
    }

    a {
      display: block;
      width: 100%;
      flex: 1;
      text-align: left;
    }
  }
}
</style>
