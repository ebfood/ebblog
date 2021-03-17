<template>
  <div class="profile">
    <img src="@/assets/images/avatar.jpeg" class="avatar" alt="avatar" />
    <div class="content">
      <h4>ebfood</h4>
<!--      <a href="#">about me</a>-->
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
  //height: 6rem;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.625rem;
  background-color: $frontColor;

  .avatar {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
  }

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 1.2rem;

    h4 {
      margin: 0;
      font-size: 1.25rem;
    }

    span {
      display: block;
      color: #999;
      font-size: 0.8rem;
      margin: 0 auto;
    }

    a {
      color: $hoverFontColor;
      background-color: $hoverBGColor;
    }
  }
}

@media screen and (min-width: 1280px) {
  .profile {
    flex-direction: column;
    align-items: center;

    .avatar {
      width: 6rem;
      height: 6rem;
    }

    .content {
      padding: 0.5rem 0 0 0;
      font-size: 1rem;
      align-items: center;

      h4 {
        font-size: 1.5rem;
        margin-bottom: 0.2rem;
      }
    }
  }
}
</style>
