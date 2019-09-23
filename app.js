const Telegraf = require('telegraf')
const commandArgs = require('./arguments')

const bot = new Telegraf('889371432:AAHj8cosL9FY8ngcLkd6vrD7n3h9HYsXjC0')

bot.use(commandArgs) //Divide the message chat into raw/command/args
var shell = require('shelljs')

bot.start((ctx) => shell.exec('bash prueba.sh'))
bot.help((ctx) => ctx.reply('Te voy a meter un guantazo que vamos a morir los dos. Tu del guantazo y yo de la onda expansiva'))

bot.launch()
