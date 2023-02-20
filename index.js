require('dotenv').config()
const TelegramApi = require('node-telegram-bot-api')
const {engineerOptions, engineerOptions23, engineerOptions99, engineerOptions21, engineerOptions22, engineerOptions98, engineerOptions25, engineerOptions97, engineerOptions999, engineerOptions96, engineerOptions111, engineerOptions800, engineerOptions811} = require('./button')

const token = '5244171470:AAFDe4N8mYu50RbfoaH0iAzUs3Y_7YIyflY'

const bot = new TelegramApi(token, {polling: true})

const start = () => {
var mysql = require('mysql');

var pool = mysql.createPool({
              host: "46.254.21.136",
              user: "p600625_adminadmin",
              database: "p600625_wp",
              password: "610844610844610844qQ",
              connectionLimit: "20",
              queueLimit: "0",
              waitForConnections: "true"
            });  

pool.getConnection(function(err, connection) {
            if (err) throw err; 

            
});

    bot.setMyCommands( [
        {command:'/start', description:'Стартовое меню'},
        {command:'/feedback', description:'Обратная связь по боту'}
    ])

    bot.on('message', async msg => {
        const text = msg.text;
        const chatID = msg.chat.id;
    
        if (text === '/start') {
            await bot.sendMessage(chatID, `Добрый день, ${msg.from.first_name}!\n\nТестовый виртуальный помощник оздоровительного комплекса "Солнечный городок" - София - приветствуют Вас! Чем я могу Вам помочь?`, engineerOptions, console.log(msg))
            return bot.sendMessage(chatID, `Подписывайтесь на наш основной телеграм-канал https://t.me/+gzBuybExPIU1ZWUy ,чтобы всегда оставаться в курсе наших новостей!`)
        }

        if (text === '/med') {
            await bot.sendMessage(chatID, `/ТЕКСТ_ВСТАВИТЬ_БД`)
            return bot.sendMessage(chatID, `/МЕНЮ_ВСТАВИТЬ`)
        }

        if (text === `/contact`) {
            await bot.sendMessage(chatID, `/ТЕКСТ_ВСТАВИТЬ_БД`)
            return bot.sendMessage(chatID, `/МЕНЮ_ВСТАВИТЬ`)
        }

        if (text === `/feedback`) {
            await bot.sendMessage(chatID, `Пожалуйста, оставьте обратную связь в произвольной форме. Для этого напишите ниже текст в свободной форме с описанием Вашей обратной связи и все :) Внимание: для тестового бота возможно оставлять обратную связь только один раз!`).then(bot.on('message', async msg => {
                var feedbackdevtext = msg.text;
                pool.query("INSERT INTO `feedbackdev` (`login`, `text`) VALUES ('"+msg.from.first_name+"', '"+feedbackdevtext+"')", function(err, results) {
                    if (err != null) {console.log(err)
                    }
                    if (results) {
                    bot.sendMessage(chatID, `Спасибо, ${msg.from.first_name}, Ваша обратная связь очень важная для нас!`, engineerOptions999)
                    console.log(results)
                    };
                }
            )})
                // }
                )
            return 
        }   

        if (text === '/time') {
            return bot.sendMessage(chatID, `Время работы какой службы Вас интересует?`, engineerOptions23)
        }

        if (text === '/game') {
            return bot.sendMessage(chatID, `Время работы какой службы Вас интересует?`, engineerOptions111)
        }

        if (text === '/staff') {
            return bot.sendMessage(chatID, `Выберите опцию`, engineerOptions800)
        }
         
        return
        //  bot.sendMessage (chatID, `Я тебя не понимаю`)
    
    })

    bot.on('callback_query', async msg => {
        const data = msg.data;
        const chatID = msg.message.chat.id;
        const opts = {
            reply_markup:{
            },
            parse_mode: 'Markdown'
          };
        var d = new Date()
        var datestring = d.getFullYear() + "." + (d.getMonth()+1) + "." + d.getDate() 
        var timestring = d.getHours() + ":" + d.getMinutes() 
    
        if (data === '21') {
            return bot.sendMessage(chatID, `Подскажите, пожалуйста, какая процедура Вас интересует?`, engineerOptions21)
        }   

        if (data === '22') {
            return bot.sendMessage(chatID, `Подскажите, пожалуйста, информация по какой дополнительной услуге Вас интересует?`, engineerOptions22)
        }

        if (data === '23') {
            return bot.sendMessage(chatID, `Время работы какого сервиса Вас интересует?`, engineerOptions23)
        }

        if (data === '24') {
            await bot.sendMessage(chatID, `Телефонный справочник основных служб курорта:
            \n12-400 Оперативный дежурный\n12-403 Дежурная медицинская сестра\n12-391 Администратор\n12-265 Медицинский ресепшн\n12-393 Пункт проката\n12-382 Бассейн`)
            await bot.sendMessage(chatID, `Подскажите, пожалуйста, чем я могу еще помочь Вам?`, engineerOptions999)
            return bot.sendMessage(chatID, `Если я Вам больше не нужна, буду рада помочь Вам в будущем. Для этого просто нажмите клавишу /start , когда Вам нужна будет моя помощь. \n\n Хорошего Вам отдыха!`)
        }

        if (data === '25') {
            return bot.sendMessage(chatID, `Подскажите, пожалуйста, к какой группе относится тип неисправности?`, engineerOptions25)
        }

        if (data === '231' || data === '232' || data === '233' || data === '234' || data === '235' || data === '236' || data === '237' || data === '238' || data === '239' || data === '240') {

            if (data === '231') {
                await 
                pool.query("SELECT * FROM timetable WHERE `id`BETWEEN 4 AND 6", (err, results) =>{

                    if (err) console.log(err);
                    
                else 
                bot.sendMessage(chatID, 
                `Рацион: ${results[0].Place}\nВремя открытия: ${results[0].TimeStart}\nВремя закрытия: ${results[0].TimeFinish}\n\n
Рацион: ${results[1].Place}\nВремя открытия: ${results[1].TimeStart}\nВремя закрытия: ${results[1].TimeFinish}\n\n
Рацион: ${results[2].Place}\nВремя открытия: ${results[2].TimeStart}\nВремя закрытия: ${results[2].TimeFinish}\nИзменения: ${results[2].Days}
                `,engineerOptions99)
                });
            }
    
            if (data === '232') {
                await 
                pool.query("SELECT * FROM timetable WHERE `id`=9", (err, results) =>{

                    if (err) console.log(err)
                    else bot.sendMessage(chatID, 
                `Место: ${results[0].Place}\nВремя открытия: ${results[0].TimeStart}\nВремя закрытия: ${results[0].TimeFinish}\nПерерывы: ${results[0].TimeOut}\nДни работы: ${results[0].Days}
                `,engineerOptions99)
                });
            }
    
            if (data === '233') {
                await 
                pool.query("SELECT * FROM timetable WHERE `id`=14", (err, results) =>{

                    if (err) console.log(err)
                    else bot.sendMessage(chatID, 
                `Место: ${results[0].Place}\nВремя открытия: ${results[0].TimeStart}\nВремя закрытия: ${results[0].TimeFinish}\nПерерывы: ${results[0].TimeOut}\nДни работы: ${results[0].Days}
                `,engineerOptions99)
                });
            }
    
            if (data === '234') {
                await
                pool.query("SELECT * FROM timetable WHERE `id`=13", (err, results) =>{

                    if (err) console.log(err)
                    else bot.sendMessage(chatID, 
                `Место: ${results[0].Place}\nВремя открытия: ${results[0].TimeStart}\nВремя закрытия: ${results[0].TimeFinish}\nПерерывы: ${results[0].TimeOut}\nДни работы: ${results[0].Days}
                `,engineerOptions99)
                });
            }
    
            if (data === '235') {
                await 
                pool.query("SELECT * FROM timetable WHERE `id`=7", (err, results) =>{

                    if (err) console.log(err)
                    else bot.sendMessage(chatID, 
                `Место: ${results[0].Place}\nВремя открытия: ${results[0].TimeStart}\nВремя закрытия: ${results[0].TimeFinish}\nПерерывы: ${results[0].TimeOut}\nДни работы: ${results[0].Days}
                `,engineerOptions99)
                });
            }
    
            if (data === '236') {
                await 
                pool.query("SELECT * FROM timetable WHERE `id`=15", (err, results) =>{

                    if (err) console.log(err)
                    else bot.sendMessage(chatID, 
                `Место: ${results[0].Place}\nВремя открытия: ${results[0].TimeStart}\nВремя закрытия: ${results[0].TimeFinish}\nПерерывы: ${results[0].TimeOut}\nДни работы: ${results[0].Days}
                `,engineerOptions99)
                });
            }

            if (data === '237') {
                await 
                pool.query("SELECT * FROM timetable WHERE `id`=10", (err, results) =>{

                    if (err) console.log(err)
                    else bot.sendMessage(chatID, 
                `Место: ${results[0].Place}\nВремя открытия: ${results[0].TimeStart}\nВремя закрытия: ${results[0].TimeFinish}\nПерерывы: ${results[0].TimeOut}\nДни работы: ${results[0].Days}
                `,engineerOptions99)
                });
            }

            if (data === '238') {
                await 
                pool.query("SELECT * FROM timetable WHERE `id`=16", (err, results) =>{

                    if (err) console.log(err)
                    else bot.sendMessage(chatID, 
                `Место: ${results[0].Place}\nВремя открытия: ${results[0].TimeStart}\nВремя закрытия: ${results[0].TimeFinish}\nПерерывы: ${results[0].TimeOut}\nДни работы: ${results[0].Days}
                `,engineerOptions99)
                });
            }

            if (data === '239') {
                await 
                pool.query("SELECT * FROM timetable WHERE `id`=8", (err, results) =>{

                    if (err) console.log(err)
                    else bot.sendMessage(chatID, 
                `Место: ${results[0].Place}\nВремя открытия: ${results[0].TimeStart}\nВремя закрытия: ${results[0].TimeFinish}\nПерерывы: ${results[0].TimeOut}\nДни работы: ${results[0].Days}
                `,engineerOptions99)
                });
            }

            if (data === '240') {
                await 
                pool.query("SELECT * FROM timetable WHERE `id`=12", (err, results) =>{

                    if (err) console.log(err)
                    else bot.sendMessage(chatID, 
                `Место: ${results[0].Place}\nВремя открытия: ${results[0].TimeStart}\nВремя закрытия: ${results[0].TimeFinish}\nПерерывы: ${results[0].TimeOut}\nДни работы: ${results[0].Days}
                `,engineerOptions99)
                });
            }

            return 
//             await bot.sendMessage(chatID, `Подскажите, пожалуйста, чем я могу еще помочь Вам?\n\n
// Если я Вам больше не нужна, буду рада помочь Вам в будущем. Для этого просто нажмите клавишу /start , когда Вам нужна будет моя помощь. \n\n Хорошего Вам отдыха!`, engineerOptions99) 
            }

        if (data === '211' || data === '212' || data === '213' || data === '214' || data === '215' || data === '216' || data === '217' || data === '218' || data === '219' || data === '220') {

            if (data === '211') {
                await 
                pool.query("SELECT `name_main`, `text`, `price`, `place`, `time`, `mark` FROM `med` WHERE `id`=1", (err, results) =>{
                    if (err) console.log(err)
                    else bot.sendMessage(chatID, 
                `${results[0].name_main}\n\n${results[0].text}\n\nСтоимость данной процедуры: ${results[0].price}\n\nМесторасположение: ${results[0].place}\n\nВремя работы кабинета: ${results[0].time}\n\n${results[0].mark}\n\nДля получения данной услуги обратитесь, пожалуйста, на медицинский ресепшн или по телефону BTC 122-65
                `,engineerOptions98)
                });
            }
    
            if (data === '212') {
                await 
                pool.query("SELECT `name_main`, `text`, `price`, `place`, `time`, `mark` FROM `med` WHERE `id`=2", (err, results) =>{

                    if (err) console.log(err)
                    else bot.sendMessage(chatID, 
                `${results[0].name_main}\n\n${results[0].text}\n\nСтоимость данной процедуры: ${results[0].price}\n\nМесторасположение: ${results[0].place}\n\nВремя работы кабинета: ${results[0].time}\n\n${results[0].mark}\n\nДля получения данной услуги обратитесь, пожалуйста, на медицинский ресепшн или по телефону BTC 122-65
                `,engineerOptions98)
                });
            }    

            if (data === '213') {
                await 
                pool.query("SELECT `name_main`, `text`, `price`, `place`, `time`, `mark` FROM `med` WHERE `id`=3", (err, results) =>{

                    if (err) console.log(err)
                    else bot.sendMessage(chatID, 
                `${results[0].name_main}\n\n${results[0].text}\n\nСтоимость данной процедуры: ${results[0].price}\n\nМесторасположение: ${results[0].place}\n\nВремя работы кабинета: ${results[0].time}\n\n${results[0].mark}\n\nДля получения данной услуги обратитесь, пожалуйста, на медицинский ресепшн или по телефону BTC 122-65
                `,engineerOptions98)
                });
            }

            if (data === '214') {
                await 
                pool.query("SELECT `name_main`, `text`, `price`, `place`, `time`, `mark` FROM `med` WHERE `id`=4", (err, results) =>{
 
                    if (err) console.log(err)
                    else bot.sendMessage(chatID, 
                `${results[0].name_main}\n\n${results[0].text}\n\nСтоимость данной процедуры: ${results[0].price}\n\nМесторасположение: ${results[0].place}\n\nВремя работы кабинета: ${results[0].time}\n\n${results[0].mark}\n\nДля получения данной услуги обратитесь, пожалуйста, на медицинский ресепшн или по телефону BTC 122-65
                `,engineerOptions98)
                });
            }

            if (data === '215') {
                await 
                pool.query("SELECT `name_main`, `text`, `price`, `place`, `time`, `mark` FROM `med` WHERE `id`=5", (err, results) =>{

                    if (err) console.log(err)
                    else bot.sendMessage(chatID, 
                `${results[0].name_main}\n\n${results[0].text}\n\nСтоимость данной процедуры: ${results[0].price}\n\nМесторасположение: ${results[0].place}\n\nВремя работы кабинета: ${results[0].time}\n\n${results[0].mark}\n\nДля получения данной услуги обратитесь, пожалуйста, на медицинский ресепшн или по телефону BTC 122-65
                `,engineerOptions98)
                });
            }

            if (data === '216') {
                await 
                pool.query("SELECT `name_main`, `text`, `price`, `place`, `time`, `mark` FROM `med` WHERE `id`=6", (err, results) =>{

                    if (err) console.log(err)
                    else bot.sendMessage(chatID, 
                `${results[0].name_main}\n\n${results[0].text}\n\nСтоимость данной процедуры: ${results[0].price}\n\nМесторасположение: ${results[0].place}\n\nВремя работы кабинета: ${results[0].time}\n\n${results[0].mark}\n\nДля получения данной услуги обратитесь, пожалуйста, на медицинский ресепшн или по телефону BTC 122-65
                `,engineerOptions98)
                });
            }

            if (data === '217') {
                await 
                pool.query("SELECT `name_main`, `text`, `price`, `place`, `time`, `mark` FROM `med` WHERE `id`=7", (err, results) =>{

                    if (err) console.log(err)
                    else bot.sendMessage(chatID, 
                `${results[0].name_main}\n\n${results[0].text}\n\nСтоимость данной процедуры: ${results[0].price}\n\nМесторасположение: ${results[0].place}\n\nВремя работы кабинета: ${results[0].time}\n\n${results[0].mark}\n\nДля получения данной услуги обратитесь, пожалуйста, на медицинский ресепшн или по телефону BTC 122-65
                `,engineerOptions98)
                });
            }

            if (data === '218') {
                await 
                pool.query("SELECT `name_main`, `text`, `price`, `place`, `time`, `mark` FROM `med` WHERE `id`=8", (err, results) =>{

                    if (err) console.log(err)
                    else bot.sendMessage(chatID, 
                `${results[0].name_main}\n\n${results[0].text}\n\nСтоимость данной процедуры: ${results[0].price}\n\nМесторасположение: ${results[0].place}\n\nВремя работы кабинета: ${results[0].time}\n\n${results[0].mark}\n\nДля получения данной услуги обратитесь, пожалуйста, на медицинский ресепшн или по телефону BTC 122-65
                `,engineerOptions98)
                });
            }

            if (data === '219') {
                await 
                pool.query("SELECT `name_main`, `text`, `price`, `place`, `time`, `mark` FROM `med` WHERE `id`=9", (err, results) =>{

                    if (err) console.log(err)
                    else bot.sendMessage(chatID, 
                `${results[0].name_main}\n\n${results[0].text}\n\nСтоимость данной процедуры: ${results[0].price}\n\nМесторасположение: ${results[0].place}\n\nВремя работы кабинета: ${results[0].time}\n\n${results[0].mark}\n\nДля получения данной услуги обратитесь, пожалуйста, на медицинский ресепшн или по телефону BTC 122-65
                `,engineerOptions98)
                });
            }

            if (data === '220') {
                await 
                pool.query("SELECT `name_main`, `text`, `price`, `place`, `time`, `mark` FROM `med` WHERE `id`=10", (err, results) =>{

                    if (err) console.log(err)
                    else bot.sendMessage(chatID, 
                `${results[0].name_main}\n\n${results[0].text}\n\nСтоимость данной процедуры: ${results[0].price}\n\nМесторасположение: ${results[0].place}\n\nВремя работы кабинета: ${results[0].time}\n\n${results[0].mark}\n\nДля получения данной услуги обратитесь, пожалуйста, на медицинский ресепшн или по телефону BTC 122-65
                `,engineerOptions98)
                });
            }

            return
            // await bot.sendMessage(chatID, `Подскажите, пожалуйста, чем я могу еще помочь Вам?`, engineerOptions99)
            // return bot.sendMessage(chatID, `Если я Вам больше не нужна, буду рада помочь Вам в будущем. Для этого просто нажмите клавишу /start , когда Вам нужна будет моя помощь. \n\n Хорошего Вам отдыха!`)
        }

        if (data === '321' || data === '322' || data === '323' || data === '324' || data === '325' || data === '326') {

            if (data === '321') {
                await 
                pool.query("SELECT `name_main`, `text`, `time`, `days` FROM `service` WHERE `id`=1", (err, results) =>{

                    if (err) console.log(err)
                    else bot.sendMessage(chatID, 
                `${results[0].name_main}\n\n${results[0].text}\n\nВремя работы: ${results[0].time}\n\nДни работы: ${results[0].days}
                `,engineerOptions96)
                });
            }
    
            if (data === '322') {
                await 
                pool.query("SELECT `name_main`, `text`, `time`, `days` FROM `service` WHERE `id`=2", (err, results) =>{

                    if (err) console.log(err)
                    else bot.sendMessage(chatID, 
                `${results[0].name_main}\n\n${results[0].text}\n\nВремя работы: ${results[0].time}\n\nДни работы: ${results[0].days}
                `,engineerOptions96)
                });
            }
    
            if (data === '323') {
                await 
                pool.query("SELECT `name_main`, `text`, `time`, `days` FROM `service` WHERE `id`=3", (err, results) =>{

                    if (err) console.log(err)
                    else bot.sendMessage(chatID, 
                `${results[0].name_main}\n\n${results[0].text}\n\nВремя работы: ${results[0].time}\n\nДни работы: ${results[0].days}
                `,engineerOptions96)
                });
            }
    
            if (data === '324') {
                await 
                pool.query("SELECT `name_main`, `text`, `time`, `days` FROM `service` WHERE `id`=5", (err, results) =>{

                    if (err) console.log(err)
                    else bot.sendMessage(chatID, 
                `${results[0].name_main}\n\n${results[0].text}\n\nВремя работы: ${results[0].time}\n\nДни работы: ${results[0].days}
                `,engineerOptions96)
                });
            }

            if (data === '325') {
                await 
                pool.query("SELECT `name_main`, `text`, `time`, `days` FROM `service` WHERE `id`=6", (err, results) =>{

                    if (err) console.log(err)
                    else bot.sendMessage(chatID, 
                `${results[0].name_main}\n\n${results[0].text}\n\nВремя работы: ${results[0].time}\n\nДни работы: ${results[0].days}
                `,engineerOptions96)
                });
            }

            if (data === '326') {
                await 
                pool.query("SELECT `name_main`, `text`, `time`, `days` FROM `service` WHERE `id`=7", (err, results) =>{

                    if (err) console.log(err)
                    else bot.sendMessage(chatID, 
                `${results[0].name_main}\n\n${results[0].text}\n\nВремя работы: ${results[0].time}\n\nДни работы: ${results[0].days}
                `,engineerOptions96)
                });
            }

            return 
            // bot.sendMessage(chatID, `Если я Вам больше не нужна, буду рада помочь Вам в будущем. Для этого просто нажмите клавишу /start , когда Вам нужна будет моя помощь. \n\n Хорошего Вам отдыха!`)
        }

        if (data === '1111' || data === '1112' || data === '1113' || data === '1114') {

            if (data === '1111') {
                bot.sendMessage(chatID, `Для регистрации в игре, введите, пожалуйста, Ваш номер телефона в формате 89161234567 (без пробелов). Вы можете зарегистрировать только 1 участника через 1 устройство`).then(bot.on('message', async msg => {
                        var player = msg.text;
                        console.log(player);
                        pool.query("INSERT INTO `gamegame` (`login`, `number`, `balance`) VALUES ('"+msg.from.first_name+"', '"+player+"', '100')", function(err, results) {
                            if (err != null) {console.log(err)
                            bot.sendMessage(chatID, `${msg.from.first_name}, Вы неправильно ввели номер или участник с таким номером уже зарегистрирован!`)
                            }
                            if (results) {bot.sendMessage(chatID, `Поздравляем, ${msg.from.first_name}, теперь Вы участник! 100 приветственных баллов зачисленно на Ваш счет!`, engineerOptions999)
                            console.log(results)
                            };
                        }
                    )})
                        // }
                        )
            return
        }
        }

        if (data === '8002') {
            return bot.sendMessage(chatID, `Выберите количество баллов для начисления`, engineerOptions811)
        }

        if (data === '8111' || data === '8112' || data === '8113' || data === '8114') {

            if (data === '8111') {
                bot.sendMessage(chatID, `Введите номер телефона участника в формате 89161234567 (без пробелов)`).then(bot.on('message', async msg => {
                        var numberplayer = msg.text;
                        pool.query("UPDATE `gamegame` SET `balance` = `balance` + 10 WHERE `number`= '"+numberplayer+"'", function(err, results) {
                            if (err != null) {console.log(err)
                            bot.sendMessage(chatID, `${msg.from.first_name}, Вы неправильно ввели номер или участник с таким номером не зарегистрирован!`)
                            }
                            if (results) {bot.sendMessage(chatID, `Успешно`)
                            console.log(results)
                            };
                        }
                    )})
                        // }
                        )

        }
        }

        if (data === '301' || data === '302' || data === '303' || data === '304' || data === '304') {

            if (data === '301') {
                bot.sendMessage(chatID, `Напишите, пожалуйста, где произошла неисправность?`).then(function (result11) {
                    console.log(result11)
                    bot.on('message', async msg => {
                        var place = msg.text;
                        console.log(place);
                        bot.sendMessage(chatID, `Подскажите, пожалуйста, что произошло?`).then(function (result12) {
                            console.log(result12)
                            bot.on('message', reqtext => {
                                const texttext = reqtext.text;
                                console.log(texttext);
                                bot.sendMessage(chatID, `Ваша заявка принята, спасибо!`, engineerOptions97)
                                pool.query("INSERT INTO `request` (`date`, `time`, `block`, `place`, `text`) VALUES ('"+datestring+"', '"+timestring+"', 'САНТЕХНИКИ', '"+place+"', '"+texttext+"')", function(err, results) {

                                    if(err) console.log(err);
                                    console.log(results);
                                });
                            
                            })  
                            })
                    })
                    })
                }
        
            return 
        }

        if (data === '995') {
            return bot.sendMessage(chatID, `Подскажите, ${msg.from.first_name}, про какие дополнительные платные услуги Вы хотите узнать еще?`, engineerOptions22)
        }

        if (data === '996') {
            return bot.sendMessage(chatID, `Подскажите, ${msg.from.first_name}, для какой службы Вы хотели бы оставить еще одну заявку?`, engineerOptions25)
        }

        if (data === '997') {
            return bot.sendMessage(chatID, `Подскажите, ${msg.from.first_name}, информацию по какой медицинской услуге еще предоставить?`, engineerOptions21)
        }

        if (data === '998') {
            return bot.sendMessage(chatID, `Подскажите, ${msg.from.first_name}, время работы какого объекта еще подсказать?`, engineerOptions23)
        }

        if (data === '999') {
            return bot.sendMessage(chatID, `Снова здравствуйте, ${msg.from.first_name}!\n\nТестовый виртуальный помощник оздоровительного комплекса "Солнечный городок" - София - снова с Вами! Чем я могу Вам помочь?`, engineerOptions)
        }

  

        connection.release();

        return
        // bot.sendMessage (chatID, `Я тебя не понимаю`)
        


        

    })




}

start()



