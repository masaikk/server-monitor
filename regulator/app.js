const router = require('./router');
const cors = require('./utils/koa_cors');
const koa = require('koa');

const app = new koa();


// cors
app.use(cors({
    origin: (ctx) => ctx.request.header.origin,
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));
app.use(router.routes())


app.listen(3000)

