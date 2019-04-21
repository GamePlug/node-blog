<template>
  <BlogRefresh>
    <BlogAdmin/>
    <div class="content">
      <nuxt/>
    </div>
  </BlogRefresh>
</template>

<script>
  import BlogAdmin from "../components/BlogAdmin";
  import BlogRefresh from "../components/BlogRefresh";

  export default {
    components: {BlogAdmin, BlogRefresh},
  }
</script>

<style scoped>
  .content {
    min-height: 100vh;
    padding: var(--admin-bar-height) 0 1px var(--admin-side-width);
    background: #f5f5f5;
    overflow: hidden;
  }
</style>
