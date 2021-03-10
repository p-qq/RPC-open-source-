const { Client } = require('discord-rpc');
const prompt = require('prompt-sync')();
const client = new Client({ transport: 'ipc' })
const chalk = require('chalk');
const log = console.log
const green = chalk.hex('#5DCC34');
const red = chalk.hex('#F04747');
const r = chalk.hex('#F04747');
const white = chalk.hex('#FFFFFF');
const p = chalk.hex('#F6B0F2')
const w = chalk.hex('#FFFFFF')



const letters = ['$ ', 'K ', 'A ', 'D ', 'A ', 'D ', 'D ', 'L ', 'E'];
let pusher = "";
letters.forEach((l, i) => {
    setTimeout(() => {
        pusher += l;
        process.title = pusher;
        console.log(`Cooldown: ${i * 75}ms`)
    }, i * 75);
})
let date = new Date();
let hours = date.getUTCHours().toString().padStart(2, '0');
let minutes = date.getUTCMinutes().toString().padStart(2, '0');
let seconds = date.getUTCSeconds().toString().padStart(2, '0');

let originalConsoleLog = console.log;
penis = function() {
        args = [];
        let date = new Date();

        let hours = date.getUTCHours().toString().padStart(2, '0');
        let minutes = date.getUTCMinutes().toString().padStart(2, '0');
        let seconds = date.getUTCSeconds().toString().padStart(2, '0');
        args.push(`${white(`[${red(`${hours}:${minutes}:${seconds}`)}]`)}`);
    for (let i = 0; i < arguments.length; i++) {
        args.push(arguments[i]);
    }
    originalConsoleLog.apply(console, args);
}



let initialTasks = [validateConfig],
    i = 0;


function onStartup() {
    initialTasks[i++]();
    if (i < initialTasks.length) {
        setTimeout(onStartup, 5 * 1000);
    }
}

function validateConfig() {
    penis(white(`Connections is ${green('Successful')}`));
    penis(white(`Skadaddle RPC is configured, Attempting to update ${green(`${client.user.username}#${client.user.discriminator}`)}'s Rich Presence`));
}



const logo = (`
${chalk.hex('#FFFFFF')("                                   ┌┼┐  ╦╔═  ╔═╗  ╔╦╗  ╔═╗  ╔╦╗  ╔╦╗  ╦    ╔═╗")}
${chalk.hex('#8D8C8C')("                                   └┼┐  ╠╩╗  ╠═╣   ║║  ╠═╣   ║║   ║║  ║    ║╣")}
${chalk.hex('#71E3FF')("                                   └┼┘  ╩ ╩  ╩ ╩  ═╩╝  ╩ ╩  ═╩╝  ═╩╝  ╩═╝  ╚═╝")}

${w(`Links must be ${p('https://')} eg: ${p('https://')}skadaddle.cc${p('/')}`)}

`)
const logo2 = (`
${chalk.hex('#FFFFFF')("                                   ┌┼┐  ╦╔═  ╔═╗  ╔╦╗  ╔═╗  ╔╦╗  ╔╦╗  ╦    ╔═╗")}
${chalk.hex('#8D8C8C')("                                   └┼┐  ╠╩╗  ╠═╣   ║║  ╠═╣   ║║   ║║  ║    ║╣")}
${chalk.hex('#DA2525')("                                   └┼┘  ╩ ╩  ╩ ╩  ═╩╝  ╩ ╩  ═╩╝  ═╩╝  ╩═╝  ╚═╝")}
`)
log(logo)
const clientID = prompt(w(`[${red(`${hours}:${minutes}:${seconds}`)}] ClientID: `))
const Text1 = prompt(w(`[${red(`${hours}:${minutes}:${seconds}`)}] Text 1: `))
const Text2 = prompt(w(`[${red(`${hours}:${minutes}:${seconds}`)}] Text 2: `))
const LImage = prompt(w(`[${red(`${hours}:${minutes}:${seconds}`)}] LargeImageName: `))
const SImage = prompt(w(`[${red(`${hours}:${minutes}:${seconds}`)}] SmallImageName: `))
const Nimage = prompt(w(`[${red(`${hours}:${minutes}:${seconds}`)}] TextOnImage: `))
const Box1 = prompt(w(`[${red(`${hours}:${minutes}:${seconds}`)}] Box 1: `))
const Box2 = prompt(w(`[${red(`${hours}:${minutes}:${seconds}`)}] Box 2: `)) 
const link1 = prompt(`[${red(`${hours}:${minutes}:${seconds}`)}] Link For ${Box1}: `)
const link2 = prompt(`[${red(`${hours}:${minutes}:${seconds}`)}] Link For ${Box2}: `)





client.on('ready', () => {
    console.clear()
    log(logo2)
    penis(w('Attempting to connect, please wait...'));
    try {
        onStartup();
    } catch (err) {
        console.error(ERROR(err));
    }
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity : {
            state : Text2,
            details : Text1,
                assets : {
                    small_text : Nimage,
                    small_image : SImage,
                    large_image : LImage,
                    large_text : Nimage
                    },
buttons : [{label : Box1 , url : `${link1}`},{label : Box2 ,url : `${link2}`}]
}
})
penis(w(`Set The First Box Name To ${green(`${Box1}`)}`))
penis(w(`Set The First Box Name To ${green(`${Box2}`)}`))
penis(w(`Link For ${green(`${Box1}`)} Has been set to ${p(`${link1}`)}`))
penis(w(`Link For ${green(`${Box2}`)} Has been set to ${p(`${link2}`)}`))
penis(w(`Successfully updated RPC for ${green(`${client.user.username}#${client.user.discriminator}`)}`));
})


client.login({ clientId : clientID }).catch(console.error)
