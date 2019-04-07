<template>
  <div class="markdown-body" v-html="$md.render(model)"></div>
</template>

<script>
  import 'github-markdown-css/github-markdown.css'
  import 'highlight.js/styles/default.css'

  export default {
    data() {
      return {
        data1: ''
      }
    },

    asyncData({params, $axios}) {
      return $axios.get(`test/api/blog/test`)
        .then((res) => {
          return {model: res.data.result}
        })
    }
  }
</script>

<style scoped>
  .markdown-body {
    width: 800px;
    margin: 0 auto;
  }
</style>
