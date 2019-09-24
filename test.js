var shell = require('shelljs')

const test = (ctx) => {
    shell.exec('wget ' + ctx.command.args[0])
}

module.exports = test