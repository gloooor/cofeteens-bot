import { Markup } from "telegraf";

import { bot } from '../bot'
import { setState } from "../state";

bot.hears("расселение", async (ctx) => {
  await ctx.reply("Мы позаботились о том, чтобы ты мог в комфорте провести ночь между крейзи денечками конфы. Но чтобы я мог сказать где мы тебя разместили, напиши свои имя и фамилию именно так, как ты их указывал в форме регистрации.", Markup.removeKeyboard());
  setState(ctx.chat.id, {
    isSettling: true,
  });
})
