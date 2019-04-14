<template>
  <div>
    <BlogMenu/>
    <BlogAdmin/>
    <div class="content">
      <nuxt/>
    </div>
  </div>
</template>

<script>
  import BlogMenu from "../components/BlogMenu";
  import BlogAdmin from "../components/BlogAdmin";

  export default {
    components: {BlogMenu, BlogAdmin},
  }
</script>

<style scoped>
  .content {
    margin-top: calc(var(--menu-bar-height) + var(--admin-bar-height));
    margin-left: var(--admin-side-width);
  }
</style>
