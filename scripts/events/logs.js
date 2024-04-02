module.exports.config = {
	name: "logs",
	eventType: ["log:unsubscribe","log:subscribe","log:thread-name"],
	version: "1.0.0",
	credits: "Nayan",
	description: "record bot activity notifications",
    envConfig: {
        enable: true
    }
};

module.exports.run = async function({ api, event, Threads }) {
    const logger = require("../../Nayan/catalogs/Nayanc.js");
    if (!global.configModule[this.config.name].enable) return;
    var formReport =  "===🌻𝗕𝗢𝗧 𝗡𝗢𝗧𝗜𝗙𝗜𝗖𝗔𝗧𝗜𝗢𝗡🌻===" +
                        "\n\n𝗧𝗵𝗿𝗲𝗮𝗱 𝗜𝗗 : " + event.threadID +
                        "\n𝗔𝗰𝘁𝗶𝗼𝗻 : {task}" +
                        "\n𝗨𝘀𝗲𝗿 𝗜𝗗 : " + event.author +
                        "\n𝗚𝗿𝗼𝘂𝗽 𝗜𝗗 : " + Date.now() +" ",
        task = "";
    switch (event.logMessageType) {
        case "log:thread-name": {
            const oldName = (await Threads.getData(event.threadID)).name || "name does not exist",
                    newName = event.logMessageData.name || "name does not exist";
            task = "কেউ একজন গ্রুপের নাম পরিবর্তন করে দিয়েছে🌻\n•➠𝗫𝗘𝗦𝗔𝗡~𝗕𝗢𝗧💜🌻 : '" + oldName + "' to '" + newName + "'";
            await Threads.setData(event.threadID, {name: newName});
            break;
        }
        case "log:subscribe": {
            if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) task = "কেউ একজন আপনার 𝗕𝗢𝗧 কে নতুন একটি গ্রুপে এড করেছে🌻\n•➠𝗫𝗘𝗦𝗔𝗡~𝗕𝗢𝗧💜🌻";
            break;
        }
        case "log:unsubscribe": {
            if (event.logMessageData.leftParticipantFbId== api.getCurrentUserID()) task = "কেউ আপনার 𝗕𝗢𝗧 কে কোনো গ্রুপ থেকে 𝗞𝗜𝗖𝗞 দিয়েছে🌻\n•➠𝗫𝗘𝗦𝗔𝗡~𝗕𝗢𝗧💜🌻"
            break;
        }
        default: 
            break;
    }

    if (task.length == 0) return;

    formReport = formReport
    .replace(/\{task}/g, task);

    return api.sendMessage(formReport, global.config.ADMINBOT[0], (error, info) => {
        if (error) return logger("", "");
    });
  return api.sendMessage(formReport, global.config.ADMINBOT[0]);
}
