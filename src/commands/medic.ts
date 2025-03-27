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
      "Оуу, надеюсь с тобой все в порядке\n" +
      "Но если нет, где-то неподалеку есть <b>Вероника</b>(@veronichkaa_8), которая всегда готова тебе помочь, можешь написать ей прям в личные сообщения, чтобы узнать где она сейчас.\n" ,
      getMainMenu()
    );
  }
})
