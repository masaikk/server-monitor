const router = require('./router');
const cors = require('./utils/koa_cors');
const koa = require('koa');
const {stdout} = require("nodemon/lib/config/defaults");
const app = new koa();
const exec = require('child_process').exec

app.use(router.routes())


app.listen(3000)

