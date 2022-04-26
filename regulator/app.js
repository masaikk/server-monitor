const router = require('./router');
const cors = require('./utils/koa_cors');
const koa=require('koa');
const app=new koa();


app.use(router.routes())

app.listen(3000)