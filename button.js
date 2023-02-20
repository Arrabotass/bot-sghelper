module.exports = {
     
    engineerOptions: {
        reply_markup: JSON.stringify({
          inline_keyboard: [
            [{text: 'МЕДИЦИНА', callback_data: '21'}, {text: 'ПЛАТНЫЕ УСЛУГИ', callback_data: '22'}], 
            [{text: 'ВРЕМЯ РАБОТЫ', callback_data: '23'}, {text: 'ТЕЛЕФОНЫ', callback_data: '24'}], 
            // [{text: 'ТЕХНИЧЕСКАЯ ЗАЯВКА', callback_data: '25'}],
          ]
        })
      },

      engineerOptions111: {
        reply_markup: JSON.stringify({
          inline_keyboard: [
            [{text: 'РЕГИСТРАЦИЯ', callback_data: '1111'}, {text: 'ОБ ИГРЕ', callback_data: '1112'}], 
            [{text: 'МОЙ БАЛАНС', callback_data: '1113'}, {text: 'МОЕ МЕСТО', callback_data: '1114'}], 
          ]
        })
      },

      engineerOptions800: {
        reply_markup: JSON.stringify({
          inline_keyboard: [
            [{text: 'ЗАЯВКИ', callback_data: '8001'}, {text: 'ИГРА', callback_data: '8002'}], 
            [{text: 'РАЗРАБОТЧИКАМ', callback_data: '8003'}], 
          ]
        })
      },

      engineerOptions811: {
        reply_markup: JSON.stringify({
          inline_keyboard: [
            [{text: '10', callback_data: '8111'}, {text: '30', callback_data: '8112'}], 
            [{text: '50', callback_data: '8113'}, {text: '100', callback_data: '8114'}], 
          ]
        })
      },

      engineerOptions96: {
        reply_markup: JSON.stringify({
          inline_keyboard: [
            [{text: 'УЗНАТЬ О ДРУГИХ ПЛАТНЫХ УСЛУГАХ', callback_data: '995'}],
            [{text: 'ВЕРНУТЬСЯ В ОСНОВНОЕ МЕНЮ', callback_data: '999'}],
          ]
        })
      },

      engineerOptions97: {
        reply_markup: JSON.stringify({
          inline_keyboard: [
            [{text: 'ОСТАВИТЬ ЕЩЕ ОДНУ ЗАЯВКУ', callback_data: '996'}],
            [{text: 'ВЕРНУТЬСЯ В ОСНОВНОЕ МЕНЮ', callback_data: '999'}],
          ]
        })
      },

      engineerOptions98: {
        reply_markup: JSON.stringify({
          inline_keyboard: [
            [{text: 'ВЕРНУТЬСЯ В МЕНЮ МЕДУСЛУГ', callback_data: '997'}],
            [{text: 'ВЕРНУТЬСЯ В ОСНОВНОЕ МЕНЮ', callback_data: '999'}],
          ]
        })
      },

      engineerOptions99: {
        reply_markup: JSON.stringify({
          inline_keyboard: [
            [{text: 'ВЕРНУТЬСЯ В МЕНЮ ВРЕМЕНИ РАБОТЫ', callback_data: '998'}],
            [{text: 'ВЕРНУТЬСЯ В ОСНОВНОЕ МЕНЮ', callback_data: '999'}],
          ]
        })
      },

      engineerOptions999: {
        reply_markup: JSON.stringify({
          inline_keyboard: [
            [{text: 'ВЕРНУТЬСЯ В ОСНОВНОЕ МЕНЮ', callback_data: '999'}],
          ]
        })
      },

      engineerOptions21: {
        reply_markup: JSON.stringify({
          inline_keyboard: [
            [{text: 'БИОИМПЕДАНС', callback_data: '211'}, {text: 'ГИПОКСИТЕРАПИЯ', callback_data: '212'}], 
            [{text: 'ГАЛОТЕРАПИЯ', callback_data: '213'}, {text: 'СПА-КАПСУЛА', callback_data: '214'}], 
            [{text: 'ГРЯЗЕЛЕЧЕНИЕ', callback_data: '215'}, {text: 'ИНГАЛЯТОРИЙ', callback_data: '216'}], 
            [{text: 'СПА-ПРОЦЕДУРЫ', callback_data: '217'}, {text: 'СОЛЯРИЙ', callback_data: '218'}], 
            [{text: 'КОСМЕТОЛОГИЯ', callback_data: '219'}, {text: 'МЕХАНОМАССАЖ', callback_data: '220'}], 
          ]
        })
      },

      engineerOptions22: {
        reply_markup: JSON.stringify({
          inline_keyboard: [
            [{text: 'САЛОН КРАСОТЫ', callback_data: '321'}, {text: 'УСЛУГИ ПРАЧЕЧНОЙ', callback_data: '322'}], 
            [{text: 'МЕНЮ ПОДУШЕК', callback_data: '323'}, {text: 'ПУНКТ ПРОКАТА', callback_data: '324'}], 
            [{text: 'ТЕРМАЛЬНЫЕ КОМПЛЕКСЫ', callback_data: '325'}, {text: 'БАР', callback_data: '326'}], 

          ]
        })
      },

    engineerOptions23: {
        reply_markup: JSON.stringify({
          inline_keyboard: [
            [{text: 'РЕСТОРАН', callback_data: '231'}, {text: 'БАР', callback_data: '232'}], 
            [{text: 'БИЛЬЯРДНАЯ', callback_data: '233'}, {text: 'БИБЛИОТЕКА', callback_data: '234'}], 
            [{text: 'БАССЕЙН', callback_data: '235'}, {text: 'СПОРТЗАЛ', callback_data: '236'}],
            [{text: 'ДЕТСКАЯ КОМНАТА', callback_data: '237'}, {text: 'ПУНКТ ПРОКАТА', callback_data: '238'}],
            [{text: 'САУНА', callback_data: '239'}, {text: 'КАРАОКЕ', callback_data: '240'}],
          ]
        })
      },

    engineerOptions25: {
        reply_markup: JSON.stringify({
          inline_keyboard: [
            [{text: 'САНТЕХНИКИ', callback_data: '301'}, {text: 'ЭЛЕКТРИКИ', callback_data: '302'}], 
            [{text: 'ПЛОТНИКИ', callback_data: '303'}, {text: 'ИНОЕ', callback_data: '304'}],
          ]
        })
      }
}