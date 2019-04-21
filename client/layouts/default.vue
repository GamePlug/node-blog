<template>
  <div>
    <BlogMenu/>
    <div class="content">
      <nuxt/>
    </div>
  </div>
</template>

<script>
  import BlogMenu from "../components/BlogMenu";

  export default {
    components: {BlogMenu},
  }
</script>

<style scoped>
  .content {
    min-width: 280px;
    min-height: 100vh;
    padding: var(--menu-bar-height) 0 1px;
    background: #f5f5f5;
  }
</style>
