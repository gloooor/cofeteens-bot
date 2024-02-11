import { Markup } from "telegraf";

import { bot } from '../bot'
import { setState } from "../state";
import { getOtherMenu, getMainMenu} from '../keyboards'

bot.hears("другое ❔", async (ctx) => {
  await ctx.replyWithHTML(
    "Если у тебя остались вопросы, можешь написать их тут, я перешлю их админам и они ответят тебе в ближайшее время.\n" +
    "Если возникли проблемы с ботом - напиши @patykapi",
    getOtherMenu()
  );
  setState(ctx.chat.id, {
    isOther: true,
  });
})
.hears("отмена", (ctx) => {
  setState(ctx.chat.id, {
    isOther: false,
  });
  ctx.replyWithHTML(
    "Тогда чем я могу тебе помочь?",
    getMainMenu()
  );
})

