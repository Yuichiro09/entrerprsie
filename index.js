const Discord =require('discord.js')
const client= new Discord.Client()

const fs = require('fs')

client.on('message', function (message) {
   if (message.content === 'Slt') {
       message.reply('salut')
    if (message.content === 'help') {
        message.reply('en cours de dev')
    }
   }
})

fs.readdir("./Events/", (error, f) => {
    if(error) console.log(error);
    console.log(`${f.length} events en chargement`)

    f.forEach((f) => {
        const events = require(`./Events/${f}`)
        const event = f.split(".")[0]

    client.on(event, events.bind(null, client))    
    })
})
client.login('NzA2ODQyODQzNzAwMDAyODI3.XrBIJw.2nRkiN2qXT21Sri3ueWfLQ9lmq8')