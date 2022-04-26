// const router = require('./router');
const cors = require('./utils/koa_cors');
const koa=require('koa');
const app=new koa();
// app.use(async ctx=>{
//     ctx.body='this is koa'
// })
const Router=require('koa-router')
const router = new Router()
router.get('/',async (ctx,next)=>{
    ctx.body='ctx';
    // await next()
}).get('/test',async (ctx,next)=>{
    ctx.body='test'
})

app.use(router.routes())

app.listen(3000)