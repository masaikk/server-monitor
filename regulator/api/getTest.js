const spawn = require('child_process').spawn;
const exec = require('child_process').exec;
const iconv = require('iconv-lite');
/*const getChildMess = () => {
    const ls = spawn('ping', ['www.4399.com']);
    ls.stdout.on('data', (data) => {
        this.child_mess = this.child_mess + `\n${iconv.decode(data, 'GBK')}`
        console.log(`stdout: ${iconv.decode(data, 'GBK')}`);
    });
    ls.stderr.on('data', (data) => {
        this.child_mess = this.child_mess + `\n ${iconv.decode(data, 'GBK')}`
        console.log(`stderr: ${iconv.decode(data, 'GBK')}`);
        return;
    });
    ls.on('close', (code) => {
        this.child_mess = this.child_mess + `\nchild process exited with code ${code}`
        console.log(`child process exited with code ${code}`);
    });
}*/

/*const echoSomethingAsyn = (mess) => {
    let outMess = 'This message:';
    const ls = spawn('ping', ['www.4399.com']);
    ls.stdout.on('data', (data) => {
        this.child_mess = this.child_mess + `\n${iconv.decode(data, 'GBK')}`
        console.log(`stdout: ${iconv.decode(data, 'GBK')}`);
        outMess += `stdout: ${iconv.decode(data, 'GBK')}`
    });
    return outMess
}*/
const echo =async () => {
    // let outMess = 'This message:';
    let m = 'echo 1'
    const ls = exec(m, (err, stdout, stderr) => {
        if (err) {
            throw err
        } else {
            let return_mess=stdout.slice(0,stdout.length-1)
            console.log(return_mess)
            return return_mess
        }

    });
}

module.exports = async (ctx, next) => {
    let bodyMess =await echo()
    console.log(bodyMess);
    ctx.body = bodyMess
}