<template>
  <div class="doing">
    <h4>DOING</h4>
    <ul>
      <li>沉迷前端，死磕基础，毕设拖延症，算法题拖延症，租房准备中。</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "doing"
};
</script>

<style scoped lang="scss">
@import "~@/assets/CSS/variables.scss";

.doing {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  // height: 16rem;
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

  ul {
    width: 100%;
    padding: 0 2rem;
    text-align: left;
    line-height: 2.2;
    font-weight: 600;

    li {
      text-indent: 1em;
    }
  }
}
</style>
