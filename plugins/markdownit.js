module.exports = {
  injected: true,
  highlight: function (str, lang) {
    const hljs = require('highlight.js')
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value
      } catch (__) {
      }
    }
    return ''
  }
}
