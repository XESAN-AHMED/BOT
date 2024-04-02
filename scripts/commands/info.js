module.exports.config = {
    name: "admin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    prefix: true,
    description: "",
    category: "prefix",
    usages: "",
    cooldowns: 5,
    dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
  
var callback = () => api.sendMessage({body:`
╭────────────╮
  𝗔𝗗𝗠𝗜𝗡 𝗜𝗗𝗘𝗡𝗧𝗜𝗧𝗬
╰────────────╯
আসসালামু আলাইকুম😊🌺
𝑻𝑯𝑬 𝑩𝑶𝑻 𝑶𝑾𝑵𝑬𝑹🩷🩵🪽
1.𝗡𝗮𝗺𝗲 : 𝗠𝗿.𝗝𝗘𝗦𝗔𝗡💜
2.𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 : 𝐀𝐋𝐄𝐍🙂😈
3.𝗚𝗲𝗻𝗱𝗲𝗿 : 𝖬𝖠𝖫𝖤
4.𝗔𝗴𝗲 : 19+🥲
5.𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻𝘀𝗵𝗶𝗽 : পিওর সিংগেল🙂🌻
6.𝗪𝗼𝗿𝗸 : 𝖲𝖳𝖴𝖣𝖤𝖭𝖳🙄
7.𝗖𝘂𝗿𝗿𝗲𝗻𝘁 𝗔𝗱𝗱𝗿𝗲𝘀𝘀 : JATRABARI,DHAKA💜🫰
8.𝗣𝗲𝗿𝗺𝗮𝗻𝗲𝗻𝘁 𝗔𝗱𝗱𝗿𝗲𝘀𝘀 : 𝖦𝖮𝖯𝖠𝖫𝖦𝖠𝖭𝖩,𝖡𝖠𝖭𝖦𝖫𝖠𝖣𝖤𝖲𝖧.🤗🌻
9.𝗜𝗠𝗢/𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣:- 01566****74 সিঙ্গেল মেয়েরা তাড়াতাড়ি নক দাও/কল দাও🥺🌻
10.𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 𝗟𝗜𝗡𝗞 : https://www.facebook.com/ALEN.OKH`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://graph.facebook.com/100000959749712/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   };
