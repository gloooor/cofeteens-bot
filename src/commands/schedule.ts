import { bot } from '../bot'
import { getMainMenu, getScheduleMenu } from '../keyboards'

bot.hears("расписание 🗓", async (ctx) => {
  await ctx.reply("Выбери день :)", getScheduleMenu());
})
.hears("пятничка", async (ctx) => {
  await ctx.reply("Вот расписание на 29 марта:", getMainMenu())
  const fridaySchedule = 'моня кинь расписание на пятничку'
  ctx.reply(fridaySchedule,
    {
      parse_mode: "HTML",
    }
  );
})
.hears("суббота", async (ctx) => {
  await ctx.reply("Вот расписание на 30 марта:", getMainMenu())
  const sundaySchedule = 'моня кинь расписание на субботу'
  ctx.reply(sundaySchedule,
    {
      parse_mode: "HTML",
    }
  );
})

