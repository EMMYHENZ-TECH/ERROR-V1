

const fs = require('fs');
const chalk = require('chalk');

//owmner v card
global.ytname = "YT: https://whatsapp.com/channel/0029VangYOt96H4JhFarL10C" //ur yt chanel name
global.socialm = "GitHub: EMMYHENZ-TECH" //ur github or insta name
global.location = "Africa, Nigeria, calabar" //ur location

//new
global.botname = '© ERROR-V1' //ur bot name
global.ownernumber = ['2349125042727'] //ur owner number, dont add more than one
global.ownername = '© EMMYHENZ' //ur owner name
global.websitex = "https://www.youtube.com/@EMMYHENZTECHINFO"
global.wagc = "https://whatsapp.com/channel/0029VangYOt96H4JhFarL10C"
global.themeemoji = '🪀'
global.wm = "Xeon Bot Inc."
global.botscript = 'https://github.com/' //script link
global.packname = "Sticker By"
global.author = "EMMYTECHINFO\n\n+2349121785627"
global.creator = "2349125042727@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["2349125042727"] // Premium User

//theme link
global.link = 'https://whatsapp.com/channel/0029VangYOt96H4JhFarL10C'

//channel id
global.xchannel = {
	jid: '120363317747980810@newsletter'
	}

//bot sett
global.typemenu = 'v12' // menu type 'v1' => 'v12'
global.typereply = 'v4' // reply type 'v1' => 'v4'
global.autoblocknumber = '91' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code

global.listv = ['➜','☞','㉨','✪','✯','益','⊡','☆','ෆ','✎','⎆','⫹⫺','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆','֎','ᚏ','⸙','⧉']
global.tempatDB = 'database.json'

global.limit = {
	free: 100,
	premium: 999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	error: 'Error!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
	done: 'Done'
}

global.bot = {
	limit: 0,
	uang: 0
}

global.game = {
	suit: {},
	menfes: {},
	tictactoe: {},
	kuismath: {},
	tebakbom: {},
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
