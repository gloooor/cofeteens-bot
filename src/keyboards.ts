import { Markup } from 'telegraf'

export function getMainMenu() {
    return Markup.keyboard([
        ['расписание', 'расселение'],
        ['адрес конференции', 'как добраться'],
        ['где можно поесть','куда можно сходить'],
        ['как найти медика', 'другое'],
    ]).resize()
}

export function getScheduleMenu() {
    return Markup.keyboard([
        ['пятничка', 'суббота']
    ]).resize()
}

