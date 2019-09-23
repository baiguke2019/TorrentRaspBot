var shell = require('shelljs')

const download = (ctx) => {
    if(ctx.command.args.length != 1)
    {
        ctx.reply('ERROR in arguments. Please introduce 1 and only 1 link')
    }
    else{
        if(shell.exec('bash script_Download.sh ',ctx.command.args[0])){
            ctx.reply('DESCARGANDO')
        }
    }
}

module.exports = download