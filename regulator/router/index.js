const Router = require('koa-router');
const router = new Router();
const api=require('../api')

router.get('/', api.getTest);

module.exports = router;