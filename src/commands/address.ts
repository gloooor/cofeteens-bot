import { bot } from '../bot'
import { getMainMenu } from '../keyboards'

bot.hears("адрес конференции", async (ctx) => {
  await ctx.reply("тут я красноречиво распишу где мы будем, когда узнаю.... мы будем не в догме????", getMainMenu());
})

