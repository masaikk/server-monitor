const exec = require('child_process').exec;
const ex = async () => {
    return new Promise((resolve, reject) => {
        exec('echo a1', (err, stdout, stderr) => {
                if (err) {
                    throw err;
                } else {
                    resolve(stdout)
                }
            }
        )
    })
}

module.exports = async (ctx, next) => {
    let bodyMess = await ex()
    ctx.response.code = 200
    ctx.response.body = bodyMess

}