<template>
  <div class="top-blog">
    <h4>置顶文章</h4>
    <ul>
      <li v-for="item of data" :key="item.id">
        <router-link :to="'/detail/' + item.id" class="tags">
          {{ item.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "top-blog",
  props: {
    data: Array
  }
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
