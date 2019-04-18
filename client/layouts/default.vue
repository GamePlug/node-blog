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
    padding-top: var(--menu-bar-height);
  }
</style>
