import { bot } from '../bot'
import { getMainMenu } from '../keyboards'

bot.hears("куда можно сходить", async (ctx) => {
  await ctx.reply("ну а тут я совсем не поняла ахахах, зачем куда-то ходить когда ты на конфе?", getMainMenu());
})

