import { bot } from '../bot'
import { getMainMenu } from '../keyboards'

bot.hears("адрес конференции 🗺", async (ctx) => {
  await ctx.replyWithHTML(`
Адрес нашей конференции: <i>Франциска Скорины 51/1</i>
Будем ждать тебя :)
<a href='https://yandex.ru/maps/?ol=geo&text=%D1%83%D0%BB%D0%B8%D1%86%D0%B0%20%D0%A4%D1%80%D0%B0%D0%BD%D1%86%D0%B8%D1%81%D0%BA%D0%B0%20%D0%A1%D0%BA%D0%BE%D1%80%D0%B8%D0%BD%D1%8B,%2051%D0%BA1&sll=27.698097,53.933857&sspn=0.004845,0.008211'>ссылка на яндекс карты</a>
  `, getMainMenu());
})

