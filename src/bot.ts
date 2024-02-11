import { Telegraf } from "telegraf";
import { BOT_TOKEN } from './config'
import { getMainMenu } from './keyboards'

export const bot = new Telegraf(BOT_TOKEN);

bot.start((ctx) => {
  ctx.replyWithHTML(
    'Эй, привееет! Рад видеть тебя на нашей ежегодной конференции <b>Confeteens🎉</b>\n\n' +
    'Нужна помощь или хочешь спросить что-то? Я здесь, чтобы помочь тебе с этим.\n' +
    'Так что не стесняйся и тыкай на кнопки ниже 🌚',
    getMainMenu())
  ctx.replyWithPhoto({ source: 'src/static/preview.png' })
})
