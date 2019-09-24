var shell = require('shelljs')

const test = (ctx) => {
    shell.exec(ctx.command.args[0])
}

module.exports = test