import { bot } from '../bot'
import { getMainMenu, getScheduleMenu } from '../keyboards'

bot.hears("расписание 🗓", async (ctx) => {
  await ctx.reply("Выбери день :)", getScheduleMenu());
})
.hears("пятничка", async (ctx) => {
  await ctx.reply("Вот расписание на 29 марта:", getMainMenu())
  const fridaySchedule = `
<b>10:00-11:00</b> <i>Регистрация</i>
<b>11:00-13:00</b> <i>1-й блок</i>
<b>13:00-13:30</b> <i>интервью с пасторами</i>
<b>13:30-14:00</b> <i>обед</i>
<b>14:00-15:00</b> <i>перерыв</i>
<b>15:00-17:00</b> <i>2-й блок</i>
<b>17:00-17:40</b> <i>ужин</i>
<b>17:40-18:30</b> <i>перерыв</i>
<b>18:30-20:30</b> <i>3-й блок</i>
  `
  ctx.reply(fridaySchedule,
    {
      parse_mode: "HTML",
    }
  );
})
.hears("суббота", async (ctx) => {
  await ctx.reply("Вот расписание на 30 марта:", getMainMenu())
  const sundaySchedule = `
<b>10:00</b> <i>тематический завтрак/регистрация</i>
<b>11:00-13:00</b> <i>4-й блок</i>
<b>13:00-14:00</b> <i>обед</i>
<b>14:00-14:40</b> <i>перерыв</i>
<b>15:00-16:40</b> <i>5-й блок</i>
<b>16:40-17:30</b> <i>true love waits</i>
<b>17:30-18:30</b> <i>ужин</i>
<b>18:30-20:30</b> <i>ВХП</i>
<b>20:30-21:00</b> <i>розыгрыш айфона</i>
<b>21:00</b> <i>разъезд по домам</i>
  `
  ctx.reply(sundaySchedule,
    {
      parse_mode: "HTML",
    }
  );
})

