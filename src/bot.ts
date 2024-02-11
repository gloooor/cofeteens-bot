import { Telegraf } from "telegraf";
import { BOT_TOKEN } from './config'
import { getMainMenu } from './keyboards'

export const bot = new Telegraf(BOT_TOKEN);

bot.start((ctx) => {
  ctx.replyWithHTML(
    'Привеееет! Рад видеть тебя на ежегодной конференции <b>Confeteens🎉</b>\n\n'+
    'Я здесь, чтобы ответить на твои вопросы и помочь тебе сориентироваться\n\n'+
    'Так что тыкай на кнопки ниже 🌚',
    getMainMenu())
})
