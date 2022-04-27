const exec = require('child_process').exec;
const getCpu = async () => {
    return new Promise((resolve, reject) => {
        exec('cat /proc/cpuinfo', (err, stdout, stderr) => {
                if (err) {
                    throw err;
                } else {
                    // 这个setTimeout意义不大
                    setTimeout(()=>{
                        resolve(stdout)
                    })
                }
            }
        )
    })
}

module.exports = async (ctx, next) => {
    let bodyMess = await getCpu()
    ctx.response.code = 200
    ctx.response.body = bodyMess

}