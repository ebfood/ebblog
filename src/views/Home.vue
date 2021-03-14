<template>
  <div class="home">
    <header-nav></header-nav>
    <div class="container">
      <left></left>
      <main-part></main-part>
      <right></right>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderNav from "@/components/Header";
import Left from "@/components/Left";
import MainPart from "@/components/MainPart";
import Right from "@/components/Right";

export default {
  name: "Home",
  components: {
    HeaderNav,
    Left,
    Right,
    MainPart
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

@media screen and (min-width: 320px) and (max-width: 749px) {
  @import "~@/assets/CSS/mobile.scss";
}

@media screen and (min-width: 750px) and (max-width: 1279px) {
  @import "~@/assets/CSS/middle.scss";
}
</style>
