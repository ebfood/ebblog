<template>
  <div class="footer">
    <p>Copyright © 2021 EB BLOG</p>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped lang="scss">
@import "~@/assets/CSS/variables.scss";

.footer {
  width: 100%;
  display: flex;
  align-items: center;
  height: 4rem;
  padding: 0 7.5%;
  background-color: $frontColor;
  p {
    color: #999;
    font-size: 0.9rem;
    font-weight: 600;
  }
}
</style>
