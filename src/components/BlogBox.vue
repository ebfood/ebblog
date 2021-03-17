<template>
  <div class="blog-box" @click="handleClick(data.id)">
    <div
      class="cover"
      :style="{ 'background-image': 'url(' + data.cover + ')' }"
    ></div>
    <div class="content">
      <h2>{{ data.title }}</h2>
      <p>{{ data.desc }}</p>
      <span>{{ data.date }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "blog-box",
  props: {
    data: Object
  },
  methods: {
    handleClick(id) {
      this.$router.push(`/detail/${id}`);
    }
  }
};
</script>

<style scoped lang="scss">
@import "~@/assets/CSS/variables.scss";

.blog-box {
  overflow: hidden;
  position: relative;
  width: 100%;
  margin-bottom: 1rem;
  border-radius: 0.625rem;
  background-color: $frontColor;

  &:hover {
    cursor: pointer;
  }

  //a {
  //  display: block;
  //  position: absolute;
  //  top: 0;
  //  bottom: 0;
  //  left: 0;
  //  right: 0;
  //
  //  &:hover {
  //    background-color: transparent;
  //  }
  //}

  .cover {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: 100%;
    height: 14rem;
    @media screen and (min-width: 320px) and (max-width: 749px) {
      height: 10rem;
    }
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-position: center center; //很重要
  }

  .content {
    padding: 0 1rem;
    margin: 0.5rem 0;

    span {
      display: block;
      color: #aaa;
      margin-bottom: 0.5rem;
    }
  }
}
</style>
