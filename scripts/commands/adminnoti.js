const fs = require('fs');
const request = require('request');

module.exports.config = {
    name: "adminnoti",
    version: "1.0.0",
    permission: 2,
    credits: "Nayan",
    description: "",
    prefix: true,
    category: "admin",
    usages: "[msg]",
    cooldowns: 5,
}

let atmDir = [];

const getAtm = (atm, body) => new Promise(async (resolve) => {
    let msg = {}, attachment = [];
    msg.body = body;
    for(let eachAtm of atm) {
        await new Promise(async (resolve) => {
            try {
                let response =  await request.get(eachAtm.url),
                    pathName = response.uri.pathname,
                    ext = pathName.substring(pathName.lastIndexOf(".") + 1),
                    path = __dirname + `/cache/${eachAtm.filename}.${ext}`
                response
                    .pipe(fs.createWriteStream(path))
                    .on("close", () => {
                        attachment.push(fs.createReadStream(path));
                        atmDir.push(path);
                        resolve();
                    })
            } catch(e) { console.log(e); }
        })
    }
    msg.attachment = attachment;
    resolve(msg);
})

module.exports.handleReply = async function ({ api, event, handleReply, Users, Threads, getText }) {
    
    const moment = require("moment-timezone");
      var gio = moment.tz("Asia/Manila").format("DD/MM/YYYY - HH:mm:s");
    const { threadID, messageID, senderID, body } = event;
    let name = await Users.getNameUser(senderID);
    switch (handleReply.type) {
        case "sendnoti": {
            let text = `${name} 𝗿𝗲𝗽𝗹𝗶𝗲𝗱 𝘁𝗼 𝘆𝗼𝘂𝗿 𝘀𝗺𝘀\n\n𝗧𝗶𝗺𝗲 : ${gio}\n𝗥𝗲𝗽𝗹𝘆 𝗦𝗠𝗦 : ${body}\n\n𝗙𝗿𝗼𝗺 𝗚𝗿𝗼𝘂𝗽 : ${(await Threads.getInfo(threadID)).threadName || "unknown"}`;
            if(event.attachments.length > 0) text = await getAtm(event.attachments, `${body}${name} 𝗥𝗲𝗽𝗹𝗶𝗲𝗱 𝘁𝗼 𝘆𝗼𝘂𝗿 𝗮𝗻𝗻𝗼𝘂𝗻𝘀𝗺𝗲𝗻𝘁\n\n𝗧𝗶𝗺𝗲 : ${gio}\n\n𝗙𝗿𝗼𝗺 𝗚𝗿𝗼𝘂𝗽 : ${(await Threads.getInfo(threadID)).threadName || "unknown"}`);
            api.sendMessage(text, handleReply.threadID, (err, info) => {
                atmDir.forEach(each => fs.unlinkSync(each))
                atmDir = [];
                global.client.handleReply.push({
                    name: this.config.name,
                    type: "reply",
                    messageID: info.messageID,
                    messID: messageID,
                    threadID
                })
            });
            break;
        }
        case "reply": {
            let text = `𝗔𝗱𝗺𝗶𝗻 ${name} 𝗿𝗲𝗽𝗹𝗶𝗲𝗱 𝘁𝗼 𝘆𝗼𝘂\n\n𝗥𝗘𝗣𝗟𝗬 𝗦𝗠𝗦  : ${body}\n\nreply to this message if you want to respond again.`;
            if(event.attachments.length > 0) text = await getAtm(event.attachments, `${body}${name} 𝗿𝗲𝗽𝗹𝗶𝗲𝗱 𝘁𝗼 𝘆𝗼𝘂\n\nreply to this message if you want to respond again.`);
            api.sendMessage(text, handleReply.threadID, (err, info) => {
                atmDir.forEach(each => fs.unlinkSync(each))
                atmDir = [];
                global.client.handleReply.push({
                    name: this.config.name,
                    type: "sendnoti",
                    messageID: info.messageID,
                    threadID
                })
            }, handleReply.messID);
            break;
        }
    }
}

module.exports.run = async function ({ api, event, args, Users }) {
    const moment = require("moment-timezone");
      var gio = moment.tz("Asia/Manila").format("DD/MM/YYYY - HH:mm:s");
    const { threadID, messageID, senderID, messageReply } = event;
    if (!args[0]) return api.sendMessage("please input message", threadID);
    let allThread = global.data.allThreadID || [];
    let can = 0, canNot = 0;
    let text = `𝗔𝗡𝗡𝗢𝗨𝗡𝗖𝗘𝗠𝗘𝗡𝗧\n\ntime : ${gio}\n𝗔𝗱𝗺𝗶𝗻 𝗡𝗮𝗺𝗲 : ${await Users.getNameUser(senderID)}\n𝗦𝗠𝗦 𝗳𝗼𝗿 𝘆𝗼𝘂 : ${args.join(" ")}\n\nreply to this message if you want to respond from this announce.`;
    if(event.type == "message_reply") text = await getAtm(messageReply.attachments, `𝗔𝗡𝗡𝗢𝗨𝗡𝗖𝗘𝗠𝗘𝗡𝗧\n\ntime : ${gio}\n𝗔𝗱𝗺𝗶𝗻 𝗡𝗮𝗺𝗲 : ${await Users.getNameUser(senderID)}\n𝗦𝗠𝗦 𝗳𝗼𝗿 𝘆𝗼𝘂 : ${args.join(" ")}\n\nreply to this message if you want to respond from this announce.`);
    await new Promise(resolve => {
        allThread.forEach((each) => {
            try {
                api.sendMessage(text, each, (err, info) => {
                    if(err) { canNot++; }
                    else {
                        can++;
                        atmDir.forEach(each => fs.unlinkSync(each))
                        atmDir = [];
                        global.client.handleReply.push({
                            name: this.config.name,
                            type: "sendnoti",
                            messageID: info.messageID,
                            messID: messageID,
                            threadID
                        })
                        resolve();
                    }
                })
            } catch(e) { console.log(e) }
        })
    })
    api.sendMessage(`send to ${can} thread, not send to ${canNot} thread`, threadID);
}
