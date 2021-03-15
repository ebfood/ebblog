<template>
  <div class="right">
    <top-blog :data="tops"></top-blog>
    <tag-box :data="tags"></tag-box>
    <Doing></Doing>
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
  },
  props: {
    tags: Array, //标签以及数量
    tops: Array //置顶文章
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
