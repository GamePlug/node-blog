<template>
  <div>
    <div class="top"></div>
    <div class="left"></div>
  </div>
</template>

<script>
  export default {
    name: "BlogAdmin"
  }
</script>

<style scoped>
  .top {
    position: fixed;
    top: 0;
    left: var(--admin-side-width);
    z-index: 999;
    width: 100%;
    height: var(--admin-bar-height);
    background-color: #ffffff;
    border-bottom: 1px solid #eeeeee;
    display: flex;
    align-items: center;
  }

  .left {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: var(--admin-side-width);
    height: 100%;
    background-color: #ffffff;
    border-right: 1px solid #eeeeee;
  }
</style>

<style>
  body {
    --admin-bar-height: 50px;
    --admin-side-width: 220px;
  }
</style>
