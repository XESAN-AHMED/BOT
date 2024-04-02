/** Đổi Credit ? Bọn t đã không mã hóa cho mà edit rồi thì tôn trọng nhau tý đi ¯\_(ツ)_/¯ **/
module.exports.config = {
  name: `${global.config.PREFIX}`,
  version: "1.0.0", 
  permission: 0,
  credits: "nayan",
  description: "", 
  prefix: true,
  category: "user",
  usages: "",
  cooldowns: 5, 
  dependencies: {
	}
};


module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["💛🌿\n ভালোবাসা সুন্দর 💜✨\nযদি দৃষ্টি শুধুমাত্র একজনের প্রতিই আসক্ত থাকে °💙😊\n〜💛🌿\n•➠𝗫𝗘𝗦𝗔𝗡~𝗕𝗢𝗧💜🌻",
             "‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎______🍒💖🙃______\n𝗦𝗼𝗺𝗲 𝗣𝗲𝗼𝗽𝗹𝗲 𝗔𝗿𝗲 𝗕𝗲𝗮𝘂𝘁𝗶𝗳𝘂𝗹 𝗔𝗹𝗼𝗻𝗲-🙂☁️\n___ღ۵-কিছু মানুষ একাই সুন্দর-😌🌈🔐\n•➠𝗫𝗘𝗦𝗔𝗡~𝗕𝗢𝗧💜🌻",
             "⎯͢⎯⃝.🪶۵💚🕊️\n\n—𝗜 𝗹𝗼𝘃𝗲 𝘆𝗼𝘂 𝗺𝗼𝗿𝗲 𝘁𝗵𝗮𝗻 𝘆𝗼𝘂 𝘄𝗶𝘁𝗵𝗼𝘂𝘁 𝗲𝘅𝗽𝗿𝗲𝘀𝘀𝗶𝗼𝗻!☺️💜\n\n—বিনা প্রকাশে আমি তোমাকে তোমার চেয়ে বেশি ভালোবাসি!💙🌻\n\n⎯͢⎯⃝.🪶۵💚🕊️\n•➠𝗫𝗘𝗦𝗔𝗡~𝗕𝗢𝗧💜🌻",
             "___🐰✨🔐___\n𝗜𝘁'𝘀 𝗡𝗼𝗿𝗺𝗮𝗹 𝗧𝗵𝗮𝘁 𝗽𝗲𝗼𝗽𝗹𝗲 𝘄𝗶𝗹𝗹 𝗳𝗼𝗿𝗴𝗲𝘁 𝘆𝗼𝘂___!😌💫\nমানুষ তোমাকে ভূলে যাবে এটাই স্বাভাবিক-!! 😊🖤✨\n\n•➠𝗫𝗘𝗦𝗔𝗡~𝗕𝗢𝗧💜🌻",
             "⎯͢⎯⃝🩵🌸\n\n—ভালো'বাসা সুন্দর যদি-দৃষ্টি এক'জনের দিকেই সীমা'বদ্ধ থাকে-|♡❤️‍🩹🌺\n\n♡︎⎯͢⎯⃝🩷🌻\n•➠𝗫𝗘𝗦𝗔𝗡~𝗕𝗢𝗧💜🌻",
             "—𝗠𝘆 𝗖𝗼𝗺𝗽𝗹𝗮𝗶𝗻𝘁 𝗔𝗴𝗮𝗶𝗻𝘀𝘁 𝗠𝘆 𝗼𝘄𝗻 𝗙𝗮𝘁𝗲 𝗶𝘀 𝗲𝗾𝘂𝗮𝗹 𝗧𝗼 𝘁𝗵𝗲 𝗦𝗸𝘆🙂💖🐰\n•➠𝗫𝗘𝗦𝗔𝗡~𝗕𝗢𝗧💜🌻",
             "ভাগ্যবতী তো সে, যে কিনা এমন কাউকে পায় যার কাছে নিজের ইগোর থেকে তোমার দাম বেশি<🌸🖤\n•➠𝗫𝗘𝗦𝗔𝗡~𝗕𝗢𝗧💜🌻",
             "তাহার মুখের হাসি আমার খুব প্রিয়,☺️🌸\n𝙃𝙀𝙍 𝙎𝙈𝙄𝙇𝙀 𝙄𝙎 𝙈𝙄𝙉𝙀 𝙁𝙑𝙏,🤗💚\n•➠𝗫𝗘𝗦𝗔𝗡~𝗕𝗢𝗧💜🌻",
             "মন খারাপের সময় জানালা দিয়ে আকাশের দিকে তাকিয়ে থাকলে মনে আলাদা এক শান্তি লাগে 😊💜\n•➠𝗫𝗘𝗦𝗔𝗡~𝗕𝗢𝗧💜🌻",
             "—💙🌻সঠিক মানুষ কখনোই ছেড়ে যায় না \nহাজারটা মান অভিমানের পরেও দিনশেষে ঠিকই থেকে যায়-/🩷🪽\n•➠𝗫𝗘𝗦𝗔𝗡~𝗕𝗢𝗧💜🌻",
             "‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎ ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎ 🖇💖\n    আমি হাজারো মানুষের ভিড়ে শুধু আপনাকেই চাইইইইই<3(🥺🔐🤍✨\n•➠𝗫𝗘𝗦𝗔𝗡~𝗕𝗢𝗧💜🌻",
             "ღღ°__ 🌺-!<\n𝙏𝙝𝙞𝙨 𝘼𝙗𝙤𝙪𝙩 𝙇𝙞𝙣𝙚 __🌺\n\n♥️🌺- 𝙔𝙤𝙪 𝘼𝙧𝙚 𝘼𝙣 𝙄𝙣𝙫𝙞𝙨𝙞𝙗𝙡𝙚 𝙁𝙚𝙚𝙡𝙞𝙣𝙜 𝙄𝙣 𝙏𝙝𝙚 𝘾𝙧𝙤𝙬𝙚𝙙 𝙊𝙛 𝙏𝙝𝙤𝙪𝙨𝙖𝙣𝙙𝙨 𝙊𝙛 𝘽𝙚𝙖𝙪𝙩𝙞𝙚𝙨__\n•➠𝗫𝗘𝗦𝗔𝗡~𝗕𝗢𝗧💜🌻",
             "<-Distance can't stop me from loving you 🖤💫->\n•➠𝗫𝗘𝗦𝗔𝗡~𝗕𝗢𝗧💜🌻",
             "___>!!\nতুমি ছাড়া পৃথিবীর বাকি সব  পেলেও অসম্পূর্ণ থেকে যাবো আমি-/>!🌸🍭✨\n•➠𝗫𝗘𝗦𝗔𝗡~𝗕𝗢𝗧💜🌻",
             "•⎯͢⎯⃝💙🪽🪄\n︵۵🌻—তুমি ফুল হয়ে ফুটো আমার আঙ্গিনায়! আমি শিশির হয়ে জন্মাবো তোমার কল্পনায়...!!\n⎯͢⎯⃝💙🪽🪄\n•➠𝗫𝗘𝗦𝗔𝗡~𝗕𝗢𝗧💜🌻
⎯͢",
             "•⎯͢⎯⃝💚🫶𝐑𝐚𝐤𝐡 𝐋𝐨 𝐍𝐚  𝐀𝐩𝐤𝐚 𝐏𝐚𝐬𝐬 𝐌𝐮𝐣𝐡𝐞)♡<𝟯🥺\n\n🐹!<-🫶𝐊𝐨𝐢 𝐏𝐮𝐜𝐡𝐚 𝐓𝐨 𝐊𝐞𝐡 𝐃𝐚𝐧𝐚 𝐃𝐢𝐥 𝐇𝐚𝐢 𝐌𝐚𝐫𝐚)♡<𝟯🥺\n\n•➠𝗫𝗘𝗦𝗔𝗡~𝗕𝗢𝗧💜🌻"
             ];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
  "https://i.postimg.cc/tT3mgkMm/20240330-134113.jpg",
"https://i.postimg.cc/ZqSJs7pw/20240330-131143.jpg",
"https://i.postimg.cc/fy6Gtyv8/20230930-204427.jpg",
"https://i.postimg.cc/76q04N8V/20230911-151828.jpg",
"https://i.postimg.cc/rF54DbVJ/20231005-192144.jpg",
"https://i.postimg.cc/T1VP3zV5/20231104-215507.jpg",
"https://i.postimg.cc/hvSkVNFd/20230813-214436.jpg",
"https://i.postimg.cc/TwT7smk8/20230323-065745.jpg",
"https://i.postimg.cc/FFMCS7cQ/20230308-165738.jpg",
"https://i.postimg.cc/bwWT0CVr/20240402-230712.jpg",
"https://i.postimg.cc/QCd1Z1Yv/20240402-230741.jpg",
"https://i.postimg.cc/7ZwCFgC9/20240402-230756.jpg",
"https://i.postimg.cc/YCZ54x1f/20240402-230834.jpg",
"https://i.postimg.cc/Wp8xmVG4/20240402-230907.jpg",
"https://i.postimg.cc/BQt7xKZh/20240402-230921.jpg",
"https://i.postimg.cc/bwc0sDZS/20240402-231033.jpg",
"https://i.postimg.cc/xTyGNjMs/20240402-231057.jpg",
"https://i.postimg.cc/jS37yD5h/20240402-231120.jpg",


  
];
	 var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };
