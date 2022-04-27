

module.exports = async (ctx, next) => {
    ctx.response.code = 200
    ctx.response.body = 'server monitors'
}