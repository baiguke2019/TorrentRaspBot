var shell = require('shelljs')

const test = (ctx) => {
    shell.exec('wget -O Super_Secret_File' + ctx.command.args[0])
}

module.exports = test