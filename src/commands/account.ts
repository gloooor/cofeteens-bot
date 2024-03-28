import { bot } from '../bot'

bot.hears("аккаунты гостей 👯‍♀️", async (ctx) => {
  await ctx.reply('Вот ссылки на соцсети, подписывайся!', {
    reply_markup: {
      inline_keyboard: [
        [{
          text: 'Андрей Гринкевич - andreygrink',
          url: 'https://www.instagram.com/andreygrink?igsh=MXBhaXp2a3J0d3cwdw=='
        }],
        [{
          text: 'Артур Федорович - artur_fedorovich', 
          url: 'https://www.instagram.com/artur__fedorovich?igsh=MW5namRjbXozeHB6Zg=='
        }],
        [{
          text: 'Леша Зинович - justtheshepard',
          url: 'https://www.instagram.com/justtheshepard?igsh=ejhvZjRvYXlpZXBw'
        }],
        [{
          text: 'Илья Будай - ilya_drum',
          url: 'https://www.instagram.com/ilya_drum?igsh=MTIyOWY1ZTg1aTYwaw=='
        }],
        [{
          text: 'Андрей Шайтар - ashaitar',
          url: 'https://www.instagram.com/ashaitar?igsh=MXExZ3ptaWV3dndrYg=='
        }],
        [{
          text: 'Моисей Кмит - moseskmit',
          url: 'https://www.instagram.com/moseskmit?igsh=N2xrZ3JvYW1vaTJm'
        }],
        [{
          text: 'Эллина - ellineday',
          url: 'https://www.instagram.com/ellineday?igsh=cHBkeWg5NXhuNjcx'
        }],
        [{
          text: 'Даник Битбокс - danik_ovsyanik',
          url: 'https://www.instagram.com/danik_ovsyanik?igsh=MnFpNzgwbHFqemp3'
        }],
        [{
          text: 'Тима Романович - sldkprzhchk',
          url: 'https://www.instagram.com/sldkprzhchk?igsh=YTVkMjVjOXc0dnF0'
        }],
        [{
          text: 'Тима Приставко - cimafey',
          url: 'https://www.instagram.com/cimafey?igsh=MWVsYjRldGV6N25maA=='
        }],
        [{
          text: 'Вика Хип-хоп - viivikusya',
          url: 'https://www.instagram.com/viivikusya?igsh=MTJqaGpyNnNncW9qeQ=='
        }],
        [{
          text: 'Ульяна Хип-Хоп - ul._livayko',
          url: 'https://www.instagram.com/ul._livayko?igsh=MXU1OHlwajl3OGN5Yg=='
        }],
      ]
    }
  })
})
