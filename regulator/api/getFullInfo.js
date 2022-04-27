const exec = require('child_process').exec;
const {
    readYaml,
    readJSON,
    jsonPath
} = require('../utils/testApi/readComand')
const checkCommand = async (mess) => {
    return new Promise((resolve, reject) => {
        exec(mess, (err, stdout, stderr) => {
                if (err) {
                    console.log('Error in command : ' + mess);
                    throw err;
                } else {
                    setTimeout(() => {
                        resolve(stdout)
                    })
                }
            }
        )
    })
}

/**
 * getAllInfoPromise🥳
 * @returns {Promise<Awaited<unknown>[]>}
 */
const getAllInfoPromise = async () => {
    let commandsList = readJSON()
    let promiseList = [];
    commandsList.forEach((command) => {
        promiseList.push(checkCommand(command))
    })
    return Promise.all(promiseList)

}


module.exports = async (ctx, next) => {
    let comms = readJSON()
    let promiseAll = getAllInfoPromise()
    let promiseMess = await promiseAll
    let bodyMess = []
    comms.forEach((item, index) => {
        bodyMess.push({
            'command': item,
            'result': promiseMess[index]
        })
    })

    ctx.response.code = 200
    ctx.response.body = bodyMess

}