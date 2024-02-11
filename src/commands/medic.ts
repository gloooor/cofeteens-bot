import axios from 'axios'

import { BOT_TOKEN, CHAT_ID } from '../config'
import { bot } from '../bot'
import { getMainMenu } from '../keyboards'

bot.hears("как найти медика", async (ctx) => {
  await ctx.reply("Оуу, надеюсь с тобой все в порядке, друг! Но если нет, где-то неподалеку есть медики, которые всегда готовы тебе помочь, можешь написать им прям в личные сообщения,и чтобы узнать где они сейчас. Вот их контакты: @veronichkaa_8 - Вероника - *телефон вероники* и @tgkomap - Никита - *телефон никиты*", getMainMenu());
  const notificationMessage = `@${(ctx.chat as { username: string }).username} ищет медика`
  
  axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&parse_mode=html&text=${encodeURI(notificationMessage)}`);
})
