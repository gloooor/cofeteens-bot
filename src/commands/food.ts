import { bot } from '../bot'
import { getMainMenu } from '../keyboards'

bot.hears("где можно поесть", async (ctx) => {
  await ctx.reply("тут можно просто взять инфу с яндекс карт, но хотелось бы тоже картинки сюда закинуть, но еще нужна будет инфа по еде для тех, кто будет за нее платить", getMainMenu());
})

