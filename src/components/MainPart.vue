<template>
  <div class="main-part">
    <blog-box></blog-box>
    <blog-box></blog-box>
    <blog-box></blog-box>
    <blog-box></blog-box>
    <blog-box></blog-box>
  </div>
</template>

<script>
import BlogBox from "@/components/BlogBox";

export default {
  name: "MainPart",
  components: {
    BlogBox
  }
};
</script>

<style scoped lang="scss">
@import "~@/assets/CSS/variables.scss";
//
//@media screen and (min-width: 1280px) {
//  --col-main: 60%;
//}

.main-part {
  flex: 1;
  //min-width: 37.5rem;
  //display: flex;
  //flex-direction: column;
  //align-items: center;
  //width: 0;
  padding: 0.5rem;
}
</style>
