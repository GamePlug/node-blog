const Router = require('koa-router')

const router = new Router()

router.prefix('/api/blog')

// 你好
router.get('/hello', async ctx => {
  ctx.body = {err: 0, message: '你好啊blog'}
})

// 测试
router.get('/test', async ctx => {
  ctx.body = {err: 0, message: '你好啊blog', result: '@[toc](目录)\n' +
      '\n' +
    'Markdown 语法简介\n' +
    '=============\n' +
    '> [语法详解](http://commonmark.org/help/)\n' +
    '\n' +
    '## **粗体**\n' +
    '```\n' +
    '**粗体**\n' +
    '__粗体__\n' +
    '```\n' +
    '## *斜体*\n' +
    '```\n' +
    '*斜体*\n' +
    '_斜体_\n' +
    '```\n' +
    '## 标题\n' +
    '```\n' +
    '# 一级标题 #\n' +
    '一级标题\n' +
    '====\n' +
    '## 二级标题 ##\n' +
    '二级标题\n' +
    '----\n' +
    '### 三级标题 ###\n' +
    '#### 四级标题 ####\n' +
    '##### 五级标题 #####\n' +
    '###### 六级标题 ######\n' +
    '```\n' +
    '## 分割线\n' +
    '```\n' +
    '***\n' +
    '---\n' +
    '```\n' +
    '****\n' +
    '## ^上^角~下~标\n' +
    '```\n' +
    '上角标 x^2^\n' +
    '下角标 H~2~0\n' +
    '```\n' +
    '## ++下划线++ ~~中划线~~\n' +
    '```\n' +
    '++下划线++\n' +
    '~~中划线~~\n' +
    '```\n' +
    '## ==标记==\n' +
    '```\n' +
    '==标记==\n' +
    '```\n' +
    '## 段落引用\n' +
    '```\n' +
    '> 一级\n' +
    '>> 二级\n' +
    '>>> 三级\n' +
    '...\n' +
    '```\n' +
    '\n' +
    '## 列表\n' +
    '```\n' +
    '有序列表\n' +
    '1.\n' +
    '2.\n' +
    '3.\n' +
    '...\n' +
    '无序列表\n' +
    '-\n' +
    '-\n' +
    '...\n' +
    '```\n' +
    '\n' +
    '## 任务列表\n' +
    '\n' +
    '- [x] 已完成任务\n' +
    '- [ ] 未完成任务\n' +
    '\n' +
    '```\n' +
    '- [x] 已完成任务\n' +
    '- [ ] 未完成任务\n' +
    '```\n' +
    '\n' +
    '## 链接\n' +
    '```\n' +
    '[链接](www.baidu.com)\n' +
    '![图片描述](http://www.image.com)\n' +
    '```\n' +
    '## 代码段落\n' +
    '\\``` type\n' +
    '\n' +
    '代码段落\n' +
    '\n' +
    '\\```\n' +
    '\n' +
    '\\` 代码块 \\`\n' +
    '\n' +
    '```c++\n' +
    'int main()\n' +
    '{\n' +
    '    printf("hello world!");\n' +
    '}\n' +
    '```\n' +
    '`code`\n' +
    '## 表格(table)\n' +
    '```\n' +
    '| 标题1 | 标题2 | 标题3 |\n' +
    '| :--  | :--: | ----: |\n' +
    '| 左对齐 | 居中 | 右对齐 |\n' +
    '| ---------------------- | ------------- | ----------------- |\n' +
    '```\n' +
    '| 标题1 | 标题2 | 标题3 |\n' +
    '| :--  | :--: | ----: |\n' +
    '| 左对齐 | 居中 | 右对齐 |\n' +
    '| ---------------------- | ------------- | ----------------- |\n' +
    '## 脚注(footnote)\n' +
    '```\n' +
    'hello[^hello]\n' +
    '```\n' +
    '\n' +
    '见底部脚注[^hello]\n' +
    '\n' +
    '[^hello]: 一个注脚\n' +
    '\n' +
    '## 表情(emoji)\n' +
    '[参考网站: https://www.webpagefx.com/tools/emoji-cheat-sheet/](https://www.webpagefx.com/tools/emoji-cheat-sheet/)\n' +
    '```\n' +
    ':laughing:\n' +
    ':blush:\n' +
    ':smiley:\n' +
    ':)\n' +
    '...\n' +
    '```\n' +
    ':laughing::blush::smiley::)\n' +
    '\n' +
    '## $\\KaTeX$公式\n' +
    '\n' +
    '我们可以渲染公式例如：$x_i + y_i = z_i$和$\\sum_{i=1}^n a_i=0$\n' +
    '我们也可以单行渲染\n' +
    '$$\\sum_{i=1}^n a_i=0$$\n' +
    '具体可参照[katex文档](http://www.intmath.com/cg5/katex-mathjax-comparison.php)和[katex支持的函数](https://github.com/Khan/KaTeX/wiki/Function-Support-in-KaTeX)以及[latex文档](https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference)\n' +
    '\n' +
    '## 布局\n' +
    '\n' +
    '::: hljs-left\n' +
    '`::: hljs-left`\n' +
    '`居左`\n' +
    '`:::`\n' +
    ':::\n' +
    '\n' +
    '::: hljs-center\n' +
    '`::: hljs-center`\n' +
    '`居中`\n' +
    '`:::`\n' +
    ':::\n' +
    '\n' +
    '::: hljs-right\n' +
    '`::: hljs-right`\n' +
    '`居右`\n' +
    '`:::`\n' +
    ':::\n' +
    '\n' +
    '## 定义\n' +
    '\n' +
    '术语一\n' +
    '\n' +
    ':   定义一\n' +
    '\n' +
    '包含有*行内标记*的术语二\n' +
    '\n' +
    ':   定义二\n' +
    '\n' +
    '        {一些定义二的文字或代码}\n' +
    '\n' +
    '    定义二的第三段\n' +
    '\n' +
    '```\n' +
    '术语一\n' +
    '\n' +
    ':   定义一\n' +
    '\n' +
    '包含有*行内标记*的术语二\n' +
    '\n' +
    ':   定义二\n' +
    '\n' +
    '        {一些定义二的文字或代码}\n' +
    '\n' +
    '    定义二的第三段\n' +
    '\n' +
    '```\n' +
    '\n' +
    '## abbr\n' +
    '*[HTML]: Hyper Text Markup Language\n' +
    '*[W3C]:  World Wide Web Consortium\n' +
    'HTML 规范由 W3C 维护\n' +
    '```\n' +
    '*[HTML]: Hyper Text Markup Language\n' +
    '*[W3C]:  World Wide Web Consortium\n' +
    'HTML 规范由 W3C 维护\n' +
    '```\n' +
    '\n'}
})

module.exports = router
