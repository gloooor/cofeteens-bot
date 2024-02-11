import { bot } from '../bot'
import { getMainMenu } from '../keyboards'

bot.hears("как добраться", async (ctx) => {
  await ctx.reply("тут красочно добавлю карту-картинку и тоже подробно все распишу... адрес бы знать...", getMainMenu());
})

