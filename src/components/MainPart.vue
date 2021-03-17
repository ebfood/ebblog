<template>
  <div class="main-part">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MainPart",
  props: {
    blogs: Array
  }
};
</script>

<style scoped lang="scss">
@import "~@/assets/CSS/variables.scss";

.main-part {
  flex: 1;
  width: 0;
  padding: 0.5rem;
}
</style>
