const fs = require('fs');
const chalk = require('chalk');

//owmner v card
global.ytname = "YT: EMMYHENZTECHINFO" //ur yt chanel name
global.socialm = "GitHub: EMMYHENZ-TECH" //ur github or insta name
global.location = "Pakistan, Lahore, Sabzazar" //ur location

//new
global.botname = 'ERROR V1.1 MD' //ur bot name
global.ownernumber = ['2349125042727'] //ur owner number, dont add more than one
global.ownername = 'EMMY-HENZ' //ur owner name
global.websitex = "https://youtube.com/@EMMYHENZTECHINFO"
global.wagc = "https://whatsapp.com/channel/0029VangYOt96H4JhFarL10C"
global.themeemoji = '⛩'
global.wm = "EMMY-HENZ Bot Inc."
global.botscript = 'https://github.com/EMMYHENZ-TECH/ERROR-V1' //script link
global.packname = "ERROR V1.1 MD"
global.author = "ERROR V1.1 MD"
global.creator = "2349121785627@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["2349125042727"] // Premium User

//bot sett
global.typemenu = 'v12' // menu type 'v1' => 'v12'
global.typereply = 'v4' // reply type 'v1' => 'v4'
global.autoblocknumber = '' //set autoblock country code
global.antiforeignnumber = '' //set anti foreign number country code
global.antidelete = false //set anti delete 


global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']
global.tempatDB = 'database.json'

//---------------------------------------------------------------------------------------//
//api variables 

global.api = "https://api.maher-zubair.xyz/" ;
global.id = "RnJlZV9rZXlAc2FsbWFu" ;

//---------------------------------------------------------------------------------------//



// Description: This file is used to store global variables.


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
