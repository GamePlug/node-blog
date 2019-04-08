<template>
  <div class="markdown-body" v-html="$md.render(model)"></div>
</template>

<script>
  import 'github-markdown-css/github-markdown.css'
  import 'highlight.js/styles/default.css'

  export default {
    data() {
      return {
        model: ''
      }
    },

    asyncData({params, $axios}) {
      return $axios.post('blog/test', {// http://localhost/test/api/blog/test
        aaa: 'aaa',
        bbb: 'bbb'
      }).then((res) => {
        return {model: res.data.result}
      }).catch(function (error) {
        console.log(error.stack);
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
