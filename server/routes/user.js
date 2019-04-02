const Router = require('koa-router');

const router = new Router();

router.prefix('/api/user');

// 你好
router.get('/hello', async ctx => {
  ctx.body = {err: 200, message: '你好啊user'};
});

module.exports = router;
