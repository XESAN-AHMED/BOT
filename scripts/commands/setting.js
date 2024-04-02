module.exports.config = {
   name: "settings",
    version: "1.0.0",
    permission: 2,
    credits: "Nayan",
    description: "",
    prefix: true,
    category: "admin",
    usages: "",
    cooldowns: 10,
    
};
const totalPath = __dirname + '/cache/totalChat.json';
const _24hours = 86400000;
const fs = require("fs-extra");
function handleByte(byte) {
	const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

	let i = 0, usage = parseInt(byte, 10) || 0;

	while(usage >= 1024 && ++i){
		usage = usage/1024;
	}
  
	return(usage.toFixed(usage < 10 && i > 0 ? 1 : 0) + ' ' + units[i]);
}

function handleOS(ping) {
	var os = require("os");
	var cpus = os.cpus();
	var speed, chips;
	for (var i of cpus) chips = i.model, speed = i.speed;
	if (cpus == undefined) return;
	else return msg = 
	`📌 Ping: ${Date.now() - ping}ms.\n\n`;

}
module.exports.onLoad = function() {
    const { writeFileSync, existsSync } = require('fs-extra');
    const { resolve } = require("path");
    const path = resolve(__dirname, 'cache', 'data.json');
    if (!existsSync(path)) {
        const obj = {
            adminbox: {}
        };
        writeFileSync(path, JSON.stringify(obj, null, 4));
    } else {
        const data = require(path);
        if (!data.hasOwnProperty('adminbox')) data.adminbox = {};
        writeFileSync(path, JSON.stringify(data, null, 4));
    }
}
module.exports.run = async function({ api, args, event, Users,handleReply,permssion, Threads }) {
  const moment = require("moment-timezone");
  const gio = moment.tz("Asia/Ho_Chi_Minh").format("HH");
    var phut = moment.tz("Asia/Ho_Chi_Minh").format("mm");
    var giay = moment.tz("Asia/Ho_Chi_Minh").format("ss");
  const axios = require("axios")
  const fs = require('fs-extra');
  const request = require('request')
  const { threadID, messageID, senderID } = event;
   return api.sendMessage({body: `========\n[1] 𝗥𝗲𝗯𝗼𝗼𝘁 𝘁𝗵𝗲 𝗕𝗢𝗧 𝘀𝘆𝘀𝘁𝗲𝗺.\n[2] 𝗥𝗲𝗹𝗼𝗮𝗱 𝗖𝗼𝗻𝗳𝗶𝗴.\n[3] 𝗨𝗽𝗱𝗮𝘁𝗲 𝗕𝗼𝘅 𝗗𝗮𝘁𝗮.\n[4] 𝗨𝗽𝗱𝗮𝘁𝗲 𝗨𝘀𝗲𝗿 𝗗𝗮𝘁𝗮.\n[5] 𝗟𝗼𝗴 𝗢𝗨𝗧 𝗼𝗳 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 𝗔𝗰𝗰𝗼𝘂𝗻𝘁.\n========\n[6] 𝗧𝘂𝗿𝗻 𝗢𝗙𝗙 𝘁𝗵𝗲 𝗺𝗼𝗱𝗲 𝘁𝗵𝗮𝘁 𝗼𝗻𝗹𝘆 𝗔𝗗𝗠𝗜𝗡𝗦 𝗰𝗮𝗻 𝘂𝘀𝗲 𝗕𝗢𝗧.\n[7] 𝗠𝗼𝗱𝗲 𝗙𝗼𝗿𝗯𝗶𝗱 𝘂𝘀𝗲𝗿𝘀 𝗳𝗿𝗼𝗺 𝗲𝗻𝘁𝗲𝗿𝗶𝗻𝗴 𝘁𝗵𝗲 𝗯𝗼𝘅.\n[8] 𝗧𝗼𝗴𝗴𝗹𝗲 𝗔𝗻𝘁𝗶-𝗥𝗼𝗯𝗯𝗲𝗿𝘆 𝗠𝗼𝗱𝗲 𝗼𝗻 𝗳𝗼𝗿 𝘁𝗵𝗶𝘀 𝗕𝗼𝘅.\n[9] 𝗧𝗼𝗴𝗴𝗹𝗲 𝗔𝗻𝘁𝗶𝗼𝘂𝘁 𝗠𝗼𝗱𝗲.\n[10] 𝗞𝗶𝗰𝗸 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 𝗨𝘀𝗲𝗿.\n=========\n[11] 𝗩𝗶𝗲𝘄 𝗕𝗢𝗧 𝗶𝗻𝗳𝗼.\n[12] 𝗩𝗶𝗲𝘄 𝗕𝗢𝗫 𝗶𝗻𝗳𝗼.\n[13] 𝗩𝗶𝗲𝘄 𝗚𝗿𝗼𝘂𝗽 𝗔𝗗𝗠𝗜𝗡 𝗹𝗶𝘀𝘁.\n[14] 𝗩𝗶𝗲𝘄 𝗔𝗱𝗺𝗶𝗻 𝗯𝗼𝗼𝗸.\n[15] 𝗩𝗶𝗲𝘄 𝗴𝗿𝗼𝘂𝗽 𝗹𝗶𝘀𝘁.\n-----------\n 👉 Reply to this message at the number you choose\n\n`
        }, threadID, (error, info) => {
            global.client.handleReply.push({
               name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "choosee",
            })
        }, event.messageID)
}
module.exports.handleReply = async function({
  args, event, Users,Threads, api, handleReply, permssion
}) {
  const { threadID, messageID, senderID } = event;
  switch (handleReply.type) {
    case "choosee": {
      switch (event.body) {
        case "1": {
             const permission = ["100001473448671"];
             if (!permission.includes(event.senderID))
             return api.sendMessage("Do you want the age to reset?", event.threadID, event.messageID);
 

	const { threadID, messageID } = event;
	return api.sendMessage(`《Restarted successfully》`, threadID, () => process.exit(1));
}break;
         case "2": {
           const permission = ["100001473448671"];
             if (!permission.includes(event.senderID))
             return api.sendMessage("Border convex rights?", event.threadID, event.messageID);
           const listAdmin = global.config.ADMINBOT[0];
    if (senderID != listAdmin) return api.sendMessage("done -_-", threadID, messageID);
          delete require.cache[require.resolve(global.client.configPath)];
global.config = require(global.client.configPath);
return api.sendMessage("Successfully reloaded config.json", event.threadID, event.messageID);    
}break;
        case "3": {
          const permission = ["100001473448671"];
             if (!permission.includes(event.senderID))
             return api.sendMessage("Border convex rights?", event.threadID, event.messageID);
          const { threadID } = event;
const { setData, getData } = Threads;
var inbox = await api.getThreadList(100, null, ['INBOX']);
  let list = [...inbox].filter(group => group.isSubscribed && group.isGroup);
  const lengthGroup = list.length
  for (var groupInfo of list) {
    console.log(`Updated box data ID: ${groupInfo.threadID}`)
    var threadInfo = await api.getThreadInfo(groupInfo.threadID);
    threadInfo.threadName;
    await Threads.setData(groupInfo.threadID, { threadInfo });
  }
    console.log(`Updated your data ${lengthGroup} box`)
    return api.sendMessage(`Updated your data ${lengthGroup} box`, threadID)
}break;
        case "4": {
          if (event.senderID != "100001473448671") return api.sendMessage(`The age of the cock`, event.threadID, event.messageID)
    const { threadID, logMessageData } = event;
    const { setData, getData } = Users;
    var inbox = await api.getThreadList(100, null, ['INBOX']);
    let list = [...inbox].filter(group => group.isSubscribed && group.isGroup);
    for (var groupInfo of list) {
        var { participantIDs } = await Threads.getInfo(groupInfo.threadID) || await api.getThreadInfo(groupInfo.threadID);
        for (var id of participantIDs) {
            let data = await api.getUserInfo(id);
            data.name
            let userName = data[id].name
            await Users.setData(id, { name: userName, data: {} });
            console.log(`Updated your data ID: ${id}`)
        }
    }
    console.log(`𝗨𝗽𝗱𝗮𝘁𝗲 𝘀𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹!`)
    return api.sendMessage(`𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 𝘂𝗽𝗱𝗮𝘁𝗲𝗱 𝗮𝗹𝗹 𝘂𝘀𝗲𝗿𝘀 𝗱𝗮𝘁𝗮!`, threadID)
}break;        
        case "5": {
          const fs = global.nodemodule["fs-extra"];
  const permission = ["100001473448671"];

	if (!permission.includes(event.senderID)) return api.sendMessage("quail", event.threadID, event.messageID);
api.sendMessage("Logging out of Facebook...",event.threadID,event.messageID)
api.logout()
}break;
        case "6": {
          const { writeFileSync } = global.nodemodule["fs-extra"];
        const { resolve } = require("path");
        const pathData = resolve(__dirname, 'cache', 'data.json');
        const database = require(pathData);
        const { adminbox } = database;  
        if (adminbox[threadID] == true) {
            adminbox[threadID] = false;
            api.sendMessage("» Successfully turn off admin mode everyone can use bot 🔓", threadID, messageID);
        } else {
            api.sendMessage("» Successfully enable qtvonly mode (only admin with qtv box can use bot) 🔒", threadID, messageID);
            adminbox[threadID] = true;
        }
        writeFileSync(pathData, JSON.stringify(database, null, 4));
}break;
        case "7": {
          const info = await api.getThreadInfo(event.threadID);
    if (!info.adminIDs.some(item => item.id == api.getCurrentUserID())) 
      return api.sendMessage('» Bots need group administrator permissions', event.threadID, event.messageID);
    const data = (await Threads.getData(event.threadID)).data || {};
    if (typeof data.newMember == "undefined" || data.newMember == false) data.newMember = true;
    else data.newMember = false;
    await Threads.setData(event.threadID, { data });
      global.data.threadData.set(parseInt(event.threadID), data);
    return api.sendMessage(`» Already ${(data.newMember == true) ? "pluck" : "turn off"} Successfully prohibits users from entering the box.`, event.threadID, event.messageID);
}break;
        case "8": {
            const info = await api.getThreadInfo(event.threadID);
    if (!info.adminIDs.some(item => item.id == api.getCurrentUserID())) 
      return api.sendMessage('❯ 𝗚𝗿𝗼𝘂𝗽 𝗔𝗱𝗺𝗶𝗻 𝗙𝘂𝗹𝗹 𝗽𝗲𝗿𝗺𝗶𝘀𝘀𝗶𝗼𝗻𝘀 𝗮𝗿𝗲 𝗻𝗲𝗲𝗱𝗲𝗱 𝗳𝗼𝗿 𝗕𝗢𝗧.', event.threadID, event.messageID);
    const data = (await Threads.getData(event.threadID)).data || {};
    if (typeof data["guard"] == "guard" || data["guard"] == false) data["guard"] = true;
    else data["guard"] = false;
    await Threads.setData(event.threadID, { data });
      global.data.threadData.set(parseInt(event.threadID), data);
    return api.sendMessage(`𝗜𝘀 ${(data["guard"] == true) ? "𝗼𝗳𝗳" : "𝗢𝗻"} Successful anti-robbery box mode`, event.threadID, event.messageID);
}break;
          case "9": {
           var info = await api.getThreadInfo(event.threadID);
 let data = (await Threads.getData(event.threadID)).data || {};
 if (typeof data["antiout"] == "undefined" || data["antiout"] == false) data["antiout"] = true;
 else data["antiout"] = false;
 await Threads.setData(event.threadID, { data });
 global.data.threadData.set(parseInt(event.threadID), data);
 return api.sendMessage(`𝗜𝘀 𝗔𝗹𝗿𝗲𝗮𝗱𝘆 ${(data["antiout"] == true) ? "𝗼𝗳𝗳" : "𝗼𝗻"} 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹 𝗔𝗻𝘁𝗶𝗼𝘂𝘁!`, event.threadID);
}break;
        case "10": {
          var { userInfo, adminIDs } = await api.getThreadInfo(event.threadID);    
    var success = 0, fail = 0;
    var arr = [];
    for (const e of userInfo) {
        if (e.gender == undefined) {
            arr.push(e.id);
        }
    };

    adminIDs = adminIDs.map(e => e.id).some(e => e == api.getCurrentUserID());
    if (arr.length == 0) {
        return api.sendMessage("In the group you don't exist 'Facebook users' '.", event.threadID);
    }
    else {
        api.sendMessage("Existing group of friends" + arr.length + " 'User Facebook'.", event.threadID, function () {
            if (!adminIDs) {
                api.sendMessage("𝗕𝘂𝘁 𝘁𝗵𝗲 𝗕𝗢𝗧 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗻 𝗮𝗱𝗺𝗶𝗻,𝗦𝗼 𝗶𝘁 𝗰𝗮𝗻𝗻𝗼𝘁 𝗯𝗲 𝗙𝗶𝗹𝘁𝗲𝗿𝗲𝗱.", event.threadID);
            } else {
                api.sendMessage("𝗦𝘁𝗮𝗿𝘁 𝗙𝗶𝗹𝘁𝗲𝗿𝗶𝗻𝗴.", event.threadID, async function() {
                    for (const e of arr) {
                        try {
                            await new Promise(resolve => setTimeout(resolve, 1000));
                            await api.removeUserFromGroup(parseInt(e), event.threadID);   
                            success++;
                        }
                        catch {
                            fail++;
                        }
                    }
                  
                    api.sendMessage("𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 𝗙𝗶𝗹𝘁𝗲𝗿𝗲𝗱" + success + " 𝗽𝗲𝗿𝘀𝗼𝗻𝘀.", event.threadID, function() {
                        if (fail != 0) return api.sendMessage("𝗙𝗶𝗹𝘁𝗲𝗿𝗲𝗱 𝗙𝗮𝗶𝗹𝗱" + fail + " 𝗽𝗲𝗿𝘀𝗼𝗻𝘀.", event.threadID);
                    }); 
                  })
            }
        })
    }
}break;
        case "11": {
         const moment = require("moment-timezone");
    const gio = moment.tz("Asia/Ho_Chi_Minh").format("HH");
    var phut = moment.tz("Asia/Ho_Chi_Minh").format("mm");
    var giay = moment.tz("Asia/Ho_Chi_Minh").format("ss");
    const namebot = config.BOTNAME
    const PREFIX = config.PREFIX
    const admin = config.ADMINBOT
    const ndh = config.NDH
    const { commands } = global.client;
    const threadSetting = (await Threads.getData(String(event.threadID))).data || 
    {};
    const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX 
    : global.config.PREFIX;
	  var ping = Date.now();
  
    var threadInfo = await api.getThreadInfo(event.threadID);
    var time = process.uptime(),
        hours = Math.floor(time / (60 * 60)),
        minutes = Math.floor((time % (60 * 60)) / 60),
        seconds = Math.floor(time % 60);
	 var severInfo = handleOS(ping);
	 var msg =`𝗡𝗼𝗪⏰ : ${gio} 𝗵𝗼𝘂𝗿𝘀 ${phut} 𝗺𝗶𝗻𝗶𝘁𝘂𝗲𝘀 ${giay} 𝘀𝗲𝗰𝗼𝗻𝗱𝘀\n𝗕𝗼𝘁 𝗡𝗮𝗺𝗲🤖 : ${namebot}\n⏱ 𝗔𝗹𝗿𝗲𝗮𝗱𝘆 𝗔𝗰𝘁𝗶𝘃𝗲 :${hours < 10 ? (hours > 0 ? " 0" + hours + " hours" : 
   "") : (hours > 0 ? " " + hours + " hours" : "")} ${minutes < 10 ? (minutes > 0 ? " 0"  + minutes + " minute" : "") : (minutes > 0 ? " " + minutes + " minute" : 
 "")}${seconds < 10 ? (seconds > 0 ? " 0" + seconds + " second." : "") : (seconds > 0 ? " " + 
 seconds + " second." : "")}\n--------------\n` +
	`𝗧𝗼𝘁𝗮𝗹 𝗚𝗿𝗼𝘂𝗽👨‍👨‍👧‍👦 : ${global.data.allThreadID.length} the group.\n𝗧𝗼𝘁𝗮𝗹 𝗨𝘀𝗲𝗿𝘀👥 : ${global.data.allUserID.length} People.\n
𝗕𝗼𝘁 𝗔𝗱𝗺𝗶𝗻👤 : ${admin.length}.\n` + 
`𝗧𝗼𝘁𝗮𝗹 𝗢𝗿𝗱𝗲𝗿𝘀📝 : ${commands.size }\n--------------\n`+`𝗦𝘆𝘀𝘁𝗲𝗺 𝗣𝗿𝗲𝗳𝘂𝘅🌟 : [ ${PREFIX} ]\n𝗕𝗼𝘁 𝗣𝗿𝗲𝗳𝗶𝘅🥀 :  ${prefix}\n${severInfo ? severInfo : `𝗣𝗶𝗻𝗴📌 : 
${Date.now() - ping}ms.\n\n`}`
    return api.sendMessage(msg, event.threadID)
}break; 
        case "12": {
          const moment = require("moment-timezone");
    const request = require("request")
    var timeNow = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
    if (!fs.existsSync(totalPath)) fs.writeFileSync(totalPath, JSON.stringify({}));
    let totalChat = JSON.parse(fs.readFileSync(totalPath));
    let threadInfo = await api.getThreadInfo(event.threadID);
    let timeByMS = Date.now();

    var memLength = threadInfo.participantIDs.length;
    let threadMem = threadInfo.participantIDs.length;
    var nameMen = [];
    var gendernam = [];
    var gendernu = [];
    var nope = [];
    for (let z in threadInfo.userInfo) {
      var gioitinhone = threadInfo.userInfo[z].gender;
      var nName = threadInfo.userInfo[z].name;
      if (gioitinhone == "MALE") {
        gendernam.push(z + gioitinhone)
      } else if (gioitinhone == "FEMALE") {
        gendernu.push(gioitinhone)
      } else {
        nope.push(nName)
      }
    };
    var nam = gendernam.length;
    var nu = gendernu.length;
    let qtv = threadInfo.adminIDs.length;
    let sl = threadInfo.messageCount;
    let u = threadInfo.nicknames;
    let icon = threadInfo.emoji;

    let threadName = threadInfo.threadName;
    let id = threadInfo.threadID;
    let sex = threadInfo.approvalMode;
    var pd = sex == false ? 'Ｏｆｆ' : sex == true ? 'ＯＮ' : 'Kh';


    if (!totalChat[event.threadID]) {
      totalChat[event.threadID] = {
        time: timeByMS,
        count: sl,
        ytd: 0
      }
      fs.writeFileSync(totalPath, JSON.stringify(totalChat, null, 2));
    }

    let mdtt = "𝗡𝗼 𝘀𝘁𝗮𝘁𝗶𝘀𝘁𝗶𝗰𝘀 𝘆𝗲𝘁";
    let preCount = totalChat[event.threadID].count || 0;
    let ytd = totalChat[event.threadID].ytd || 0;
    let hnay = (ytd != 0) ? (sl - preCount) : "𝗡𝗼 𝗦𝘁𝗮𝘁𝗶𝘀𝘁𝗶𝗰𝘀 𝘆𝗲𝘁";
    let hqua = (ytd != 0) ? ytd : "𝗡𝗼 𝗦𝘁𝗮𝘁𝗶𝘀𝘁𝗶𝗰𝘀 𝘆𝗲𝘁";
    if (timeByMS - totalChat[event.threadID].time > _24hours) {
      if (timeByMS - totalChat[event.threadID].time > (_24hours * 2)) {
        totalChat[event.threadID].count = sl;
        totalChat[event.threadID].time = timeByMS - _24hours;
        totalChat[event.threadID].ytd = sl - preCount;
        fs.writeFileSync(totalPath, JSON.stringify(totalChat, null, 2));
      }
      getHour = Math.ceil((timeByMS - totalChat[event.threadID].time - _24hours) / 3600000);
      if (ytd == 0) mdtt = 100;
      else mdtt = ((((hnay) / ((hqua / 24) * getHour))) * 100).toFixed(0);
      mdtt += "%";
    }
    
    var callback = () =>
      api.sendMessage({
        body: `» 𝗕𝗼𝗫 𝗡𝗮𝗺𝗘 : ${threadName}\n» 𝗕𝗼𝗫 𝗨𝗶𝗗 : ${id}\n» 𝗔𝗽𝗽𝗿𝗼𝘃𝗮𝗟 : ${pd}\n» 𝗘𝗺𝗼𝗷𝗶 : ${icon}\n» 𝗕𝗼𝗫 𝗜𝗻𝗳𝗢 : 👇.\n» 𝗧𝗼𝘁𝗮𝗟 ${threadMem} 𝗠𝗲𝗺𝗯𝗲𝗿𝗦.\n» 𝗠𝗮𝗟𝗲👨‍🦰 : ${nam} 𝗣𝗲𝗼𝗽𝗹𝗘. \n» 𝗙𝗲𝗺𝗮𝗹𝗘👩‍🦰 : ${nu} 𝗣𝗲𝗼𝗽𝗹𝗘.\n» 𝗕𝗼𝘀𝗦🕵️‍♂️ : 𝗪𝗶𝘁𝗵 ${qtv} 𝗔𝗱𝗺𝗶𝗻𝗦.\n» 𝗧𝗼𝘁𝗮𝗟💬 : ${sl} 𝗠𝗲𝘀𝘀𝗮𝗴𝗲𝗦.\n   === 「${timeNow}」 ===`,
        attachment: fs.createReadStream(__dirname + '/cache/box.png')
      },
        threadID,
        () => fs.unlinkSync(__dirname + '/cache/box.png')
      );
    return request(encodeURI(`${threadInfo.imageSrc}`))
      .pipe(fs.createWriteStream(__dirname + '/cache/box.png'))
      .on('close', () => callback());
}break;      
       case "13": {
         var threadInfo = await api.getThreadInfo(event.threadID);
    let qtv = threadInfo.adminIDs.length;
    var listad = '';
    var qtv2 = threadInfo.adminIDs;
    dem = 1;
    for (let i = 0; i < qtv2.length; i++) {
        const info = (await api.getUserInfo(qtv2[i].id));
        const name = info[qtv2[i].id].name;
        listad += '' + `${dem++}` + '. ' + name + '\n';
    }

    api.sendMessage(
        ` ${qtv} 𝗔𝗱𝗺𝗶𝗻 𝗟𝗶𝘀𝘁 :\n ${listad}`,event.threadID,event.messageID)
}break;
        case "14": {
          const { ADMINBOT } = global.config;
           listAdmin = ADMINBOT || config.ADMINBOT ||  [];
            var msg = [];
            for (const idAdmin of listAdmin) {
                if (parseInt(idAdmin)) {
                  const name = (await Users.getData(idAdmin)).name
                    msg.push(`»  ${name}\nLink: fb.me/${idAdmin}`);              
                }
            }
           return api.sendMessage(`======〘『ADMIN』〙======\n${msg.join("\n")}\n`, event.threadID, event.messageID);
}break;
        case "15": {
            let threadInfo = await api.getThreadInfo(event.threadID);
          var inbox = await 
api.getThreadList(300, null, ["INBOX"]);
  let list = [...inbox].filter(group => group.isSubscribed && group.isGroup);

var abc = "𝗟𝗶𝘀𝘁 𝗼𝗳 𝗽𝗮𝗿𝘁𝗶𝗰𝗶𝗽𝗮𝘁𝗶𝗻𝗴😉\n"; let i = 0;
  for (var groupInfo of list) {
    abc += `${i+=1}. ${groupInfo.name}\n💌 ID BOX: ${groupInfo.threadID}\n------------------------------\n`;
  }
  api.sendMessage(abc, event.threadID);
}break;
     }
   }
 }
}


module.exports.handleEvent = async ({ api, event }) => {
  if (!fs.existsSync(totalPath)) fs.writeFileSync(totalPath, JSON.stringify({}));
  let totalChat = JSON.parse(fs.readFileSync(totalPath));
  if (!totalChat[event.threadID]) return;
  if (Date.now() - totalChat[event.threadID].time > (_24hours * 2)) {
    let sl = (await api.getThreadInfo(event.threadID)).messageCount;
    totalChat[event.threadID] = {
      time: Date.now() - _24hours,
      count: sl,
      ytd: sl - totalChat[event.threadID].count
    }
    fs.writeFileSync(totalPath, JSON.stringify(totalChat, null, 2));
  }
    }
