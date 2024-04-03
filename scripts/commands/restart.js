module.exports.config = {
	name: "restart",
	version: "7.0.0",
	permission: 2,
	credits: "ryuko",
	prefix: false,
	description: "restart bot system",
	category: "admin",
	usages: "",
	cooldowns: 0,
	dependencies: {
		"process": ""
	}
};
module.exports.run = async function({ api, event, args, Threads, Users, Currencies, models }) {
  const process = require("process");
  const { threadID, messageID } = event;
  api.sendMessage(`𝗥𝗲𝘀𝘁𝗮𝗿𝘁𝗶𝗻𝗴 ${global.config.BOTNAME} 𝗔𝗜, 𝗣𝗹𝗲𝗮𝘀𝗲 𝗯𝗲 𝗽𝗮𝘁𝗶𝗲𝗻𝘁.`, threadID, ()=> process.exit(1));
}
