import axios from 'axios'

import { bot } from '../bot'
import { BOT_TOKEN, CHAT_ID } from '../config'
import { getMainMenu } from '../keyboards'
import { setState, getState } from "../state";
import settling from '../settling.json'

bot.on("message", async (ctx) => {
    const chatId = ctx.chat.id;
    const message = (ctx.update.message as { text: string }).text;
    const username = (ctx.chat as { username: string }).username

    const { isOther = false, isSettling = false} = getState(chatId);

    if (isSettling) {
      setState(ctx.chat.id, {
        isSettling: false,
      });
      
      const isSettled = Object.entries(settling).filter(([name]) => name === message)[0]
      
      if (isSettled) {
        const [name, info] = isSettled
        const {address, contact} = info
        ctx.reply(`Отлично, ${name}, адрес твоего пристанища - ${address}. Обязательно свяжись с сопровождающим тебя человечком заранее, чтобы обсудить детали. Вот контакт: ${contact}, удачи!`, getMainMenu());
      } else {
        await ctx.reply(`Извини, я не нашел тебя в базе, но не переживай, сейчас я перенаправлю сообщение реальным людим и они обязательно тебе напишут в ближайшее время)`, getMainMenu());
        const errorMsg = `У @${username} проблемки с рассленением, свяжитесь с ним пожалуйста`
        axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&parse_mode=html&text=${encodeURI(errorMsg)}`);
      }
    } else if (isOther) {
      const message = (ctx.update.message as { text: string }).text;
      const username = (ctx.chat as { username: string }).username

      setState(ctx.chat.id, {
        isOther: false,
      });

      ctx.reply(`Окей, я отправил твое сообщение, с тобой скоро свяжуться :)`, getMainMenu());
      const questionMsg = `Сообщение от @${username}: ${message}`
      axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&parse_mode=html&text=${encodeURI(questionMsg)}`);
      
    } else {
      ctx.reply(`Извини, я еще не такой умный чтобы понять что ты от меня хочешь.. Воспользуйся пунктами меню...`, getMainMenu());
    }
})

