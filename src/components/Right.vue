<template>
  <div class="right">
    <Doing></Doing>
    <tag-box></tag-box>
    <top-blog></top-blog>
  </div>
</template>

<script>
import TagBox from "@/components/TagBox";
import Doing from "@/components/Doing";
import TopBlog from "@/components/TopBlog";
export default {
  name: "Right",
  components: {
    TagBox,
    Doing,
    TopBlog
  }
};
</script>

<style scoped lang="scss">
@import "~@/assets/CSS/variables.scss";
.right {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  width: 20%;
}
</style>
