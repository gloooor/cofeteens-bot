import axios from 'axios'

import { BOT_TOKEN, CHAT_ID } from '../config'
import { bot } from '../bot'
import { getMainMenu } from '../keyboards'

bot.hears("как найти медика 👨‍⚕️", async (ctx) => {
  const chat = ctx.chat as { first_name: string, last_name: string, username: string}
  if(chat.first_name === "Лена" && chat.last_name === "Светлакова") {
    await ctx.replyWithHTML(
      "Лена тебе не нужен медик тебе нужен иисус",
      getMainMenu()
    );
  } else {
    await ctx.replyWithHTML(
      "Оуу, надеюсь с тобой все в порядке, друг!\n" +
      "Но если нет, где-то неподалеку есть медики, которые всегда готовы тебе помочь, можешь написать им прям в личные сообщения,и чтобы узнать где они сейчас.\n" +
      "Вот их контакты:\n" +
      "👩‍⚕️ <b>Вероника</b>: @veronichkaa_8 - *телефон вероники*\n" +
      "👨‍⚕️ <b>Никита</b>: @tgkomap -  *телефон никиты*",
      getMainMenu()
    );
    const notificationMessage = `@${chat.username}(${chat.first_name} ${chat.last_name}) ищет медика`
    
    axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&parse_mode=html&text=${encodeURI(notificationMessage)}`);
  }
})
