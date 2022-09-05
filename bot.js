const Discord = require('discord.js')
const client = new Discord.Client({ intents: 131071 })
const { botid, token } = require("./ayarlar.json")
require("./slash")(client)

// * ETİKETE TEPKİ
client.on('messageCreate', async message => {

    const embedetiket = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setDescription(`**/yardım** Komutu ile Komutlarımı Görebilirsiniz`)
    if (message.content === `<@${botid}>`) {
      message.channel.send({ embeds: [embedetiket] })
    }

})

// ! TOKEN
client.login(token)