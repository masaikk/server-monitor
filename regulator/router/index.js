const Router = require('koa-router');
const router = new Router();
const api=require('../api')

router.get('/test', api.getTest);

module.exports = router;