<template>
  <div class="tag-box">
    <h4>热门标签</h4>
    <ul>
      <li><a href="#" class="tags">#响应式</a></li>
      <li><a href="#" class="tags">#CSS</a></li>
      <li><a href="#" class="tags">#REM</a></li>
      <li><a href="#" class="tags">#移动端</a></li>
      <li><a href="#" class="tags">#flex</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Tag"
};
</script>

<style scoped lang="scss">
@import "~@/assets/CSS/variables.scss";

.tag-box {
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
    //margin-top: 1rem;
    //align-self: first;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0 2rem;

    a {
      margin: 0.5rem 0.2rem;
      font-weight: 600;
      // font-size: 0.8rem;
    }
  }
}
</style>
