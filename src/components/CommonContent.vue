<template>
  <div class="content">
    <ul class="listStyle">
      <li class="listItem">
        <router-link class="listItemTitle" :to="{ name: 'detail' }"
          >nodejs教程</router-link
        >
        <p class="listItemDate">2020-02-20</p>
      </li>
      <li class="listItem">
        <router-link class="listItemTitle" :to="{ name: 'home' }"
          >nodejs教程</router-link
        >
        <p class="listItemDate">2020-02-20</p>
      </li>
      <li class="listItem">
        <router-link class="listItemTitle" :to="{ name: 'home' }"
          >nodejs教程</router-link
        >
        <p class="listItemDate">2020-02-20</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.content {
  max-width: 1200px;
  margin: 20px auto;
  background: #9d9d9d;
  border-radius: 5px;
  .listStyle {
    padding: 30px;
    .listItem {
      border-bottom: 1px solid #fff;
      padding: 20px 0;
      .listItemTitle {
        font-size: 25px;
      }
      .listItemDate {
        font-size: 14px;
        padding-top: 30px;
        font-style: italic;
      }
    }
  }
}
</style>
