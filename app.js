const Telegraf = require('telegraf')
const commandArgs = require('./arguments')

const bot = new Telegraf('889371432:AAHj8cosL9FY8ngcLkd6vrD7n3h9HYsXjC0')

bot.use(commandArgs) //Divide the message chat into raw/command/args
var shell = require('shelljs')

bot.start((ctx) => ctx.reply('Welcome to TorrentRaspBot! \n Write /help to see the available commands!') )
bot.help((ctx) => ctx.reply('Te voy a meter un guantazo que vamos a morir los dos. Tu del guantazo y yo de la onda expansiva'))
bot.command('author',(ctx) => ctx.reply('Author: Rafael Roman \n Github: github.com/rafaroman18 \n 2019'))

bot.launch()
