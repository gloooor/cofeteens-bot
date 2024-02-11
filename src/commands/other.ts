import { Markup } from "telegraf";

import { bot } from '../bot'
import { setState } from "../state";

bot.hears("другое", async (ctx) => {
  await ctx.reply("Если у тебя остались вопросы, можешь написать их тут, я перешлю их админам и они ответят тебе в ближайшее время. Если возникли проблемы с ботом - напиши @patykapi", Markup.removeKeyboard());
  setState(ctx.chat.id, {
    isOther: true,
  });
})

