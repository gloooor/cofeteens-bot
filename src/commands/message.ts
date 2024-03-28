import fs from 'fs';

import { bot } from '../bot'
import { getMainMenu } from '../keyboards'
import { setState, getState } from "../state";
import settling from '../settling.json'

bot.on("message", async (ctx) => {
    const chatId = ctx.chat.id;
    const message = (ctx.update.message as { text: string }).text;

    const { isSettling = false} = getState(chatId);

    if (isSettling) {
      setState(ctx.chat.id, {
        isSettling: false,
      });
      
      const isSettled = Object.entries(settling).filter(([name]) => name.includes(message))[0]
      
      if (isSettled) {
        const [name, info] = isSettled
        ctx.reply(`Отлично, ${name}, вот контакт человека, который тебя примет: ${info}. Обязательно свяжись с сопровождающим тебя человечком заранее, чтобы обсудить детали, удачи!`, getMainMenu());
      } else {
        await ctx.reply(`Извини, я не нашел тебя в базе, но не переживай, найди кого-нибудь с бейджиком и они тебе обязательно помогут))`, getMainMenu());
      }
    } else {
      ctx.reply(`Извини, я еще не такой умный чтобы понять что ты от меня хочешь.. Воспользуйся пунктами меню...`, getMainMenu());
    }
})

