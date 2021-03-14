<template>
  <div class="profile">
    <img src="@/assets/images/avatar.jpeg" class="avatar" alt="avatar" />
    <div class="content">
      <h4>ebfood</h4>
      <a href="#">about me</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile"
};
</script>

<style scoped lang="scss">
@import "~@/assets/CSS/variables.scss";

.profile {
  display: flex;
  align-items: center;
  width: 100%;
  height: 6rem;
  border-radius: 0.625rem;
  background-color: $frontColor;

  .avatar {
    width: 4rem;
    height: 4rem;
    margin: 0 0.8rem;
    border-radius: 50%;
  }

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 0.5rem;

    h4 {
      margin: 0;
      font-size: 1.25rem;
    }
    span {
      color: #999;
      font-size: 0.8rem;
    }
  }
}
</style>
