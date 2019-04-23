<template>
  <BlogRefresh>
    <BlogFrame/>
    <div class="content">
      <nuxt/>
    </div>
  </BlogRefresh>
</template>

<script>
  import BlogFrame from "../components/BlogFrame";
  import BlogRefresh from "../components/BlogRefresh";

  export default {
    components: {BlogFrame, BlogRefresh},
  }
</script>

<style scoped>
  .content {
    min-width: 280px;
    min-height: 100vh;
    padding: var(--menu-bar-height) 0 1px;
    background: #f5f5f5;
    overflow: hidden;
  }
</style>
