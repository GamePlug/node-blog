<template>
  <div>
    <div v-show="isShow">
      <slot></slot>
    </div>
    <Spin v-if="!isShow" size="large" fix></Spin>
  </div>
</template>

<script>
  export default {
    name: "BlogRefresh",

    data() {
      return {
        isShow: false
      }
    },

    mounted() {
      this.isShow = true
    }
  }
</script>

<style scoped>

</style>
