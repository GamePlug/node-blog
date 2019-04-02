const Router = require('koa-router');

const router = new Router();

router.prefix('/api/blog');

// 你好
router.get('/hello', async ctx => {
  ctx.body = {err: 200, message: '你好啊blog'};
});

module.exports = router;
