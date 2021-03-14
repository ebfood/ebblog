<template>
  <div class="left">
    <profile></profile>
    <sort></sort>
  </div>
</template>

<script>
import Profile from "@/components/Profile";
import Sort from "@/components/Sort";

export default {
  name: "Left",
  components: {
    Profile,
    Sort
  }
};
</script>

<style scoped lang="scss">
@import "~@/assets/CSS/variables.scss";

.left {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  width: 20%;
  // height: 25rem;
  // background-color: blueviolet;
}
</style>
