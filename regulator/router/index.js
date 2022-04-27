const Router = require('koa-router');
const router = new Router();
const api=require('../api')

router.get('/test', api.getTest);
router.get('/',api.getIndex)
router.get('/cpu',api.getCpuInfo)
router.get('/full',api.getFullInfo)

module.exports = router;