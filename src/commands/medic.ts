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
      "👩‍⚕️ <b>Вероника</b>: @veronichkaa_8\n" +
      "👨‍⚕️ <b>Никита</b>: @tgkomap",
      getMainMenu()
    );
  }
})
