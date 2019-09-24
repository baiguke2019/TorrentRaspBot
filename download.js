var shell = require('shelljs')

const download = (ctx) => {
    if(ctx.command.args.length != 1)
    {
        ctx.reply('ERROR in arguments. Please introduce 1 and only 1 link')
    }
    else{
        ctx.reply('Downloading...')
        if(shell.exec('bash script_Download.sh ' + ctx.command.args[0])){
        ctx.reply('Downloaded.')
            if(shell.exec('file -b ~/Super_Secret_File')=='BitTorrent File'){
                ctx.reply('Detected BitTorrent File. Starting Transmission.')
                shell.exec('bash script_Torrent.sh')
            }
        }
        else{
            ctx.reply('UNKNOWN ERROR. It wasn\'t possible to download the file. ')
        }
    }
}

module.exports = download