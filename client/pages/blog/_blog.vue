<template>
  <div class="layout">
    <div class="markdown-body" v-html="$md.render(model)"></div>
  </div>
</template>

<script>
  import 'github-markdown-css/github-markdown.css'
  import 'highlight.js/styles/default.css'

  export default {
    head() {
      return {title: '博客'}
    },

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
  .layout {
    max-width: 1000px;
    margin: 0 auto;
  }

  .markdown-body {
    padding: 8px 15px 25px 15px;
    background: #ffffff;
  }
</style>
