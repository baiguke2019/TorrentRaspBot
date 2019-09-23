var shell = require('shelljs')

const download = (ctx) => {
    if(shell.exec('bash prueba.sh')){
        ctx.reply('FUNCIONA')
    }
}