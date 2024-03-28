import { bot } from '../bot'
import { getMainMenu } from '../keyboards'
import { Markup } from 'telegraf'

bot.hears("как добраться 🔎", async (ctx) => {
  ctx.replyWithHTML(`
Вот маршрут по которому можно добраться от метро, но рекомендую воспользоваться картами, чтоб не потеряться)))
Также ниже прикрлею скрин и видео с маршрутом
<a href='https://yandex.by/maps/-/CDRuF87d'>ссылка на яндекс карты</a>
  `, getMainMenu());

  ctx.replyWithPhoto({ source: 'src/static/place.png' })
})

