module.exports = async (ctx, next) => {
    console.log('use index path');
    ctx.response.code = 200
    ctx.response.body = 'server monitors'
}