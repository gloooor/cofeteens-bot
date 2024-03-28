import { Markup } from 'telegraf'

export function getMainMenu() {
    return Markup.keyboard([
        ['расписание 🗓', 'расселение 🏘'],
        ['адрес конференции 🗺', 'как добраться 🔎'],
        ['как найти медика 👨‍⚕️', 'аккаунты гостей 👯‍♀️'],
        ['куда можно сходить 👾'],
    ]).resize()
}

export function getScheduleMenu() {
    return Markup.keyboard([
        ['пятничка', 'суббота']
    ]).resize()
}

export function getOtherMenu() {
    return Markup.keyboard([
        ['отмена']
    ]).resize()
}

