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
   var hi = ["ღ••\n– কোনো নেতার পিছনে নয়.!!🤸‍♂️\n– মসজিদের ইমামের পিছনে দাড়াও জীবন বদলে যাবে ইনশাআল্লাহ.!!🖤🌻\n۵\n•➠𝗫𝗘𝗦𝗔𝗡~𝗕𝗢𝗧💜🌻",
             "-!\n__আল্লাহর রহমত থেকে নিরাশ হওয়া যাবে না!” আল্লাহ অবশ্যই তোমাকে ক্ষমা করে দিবেন☺️🌻\nসুরা যুমাহ্ আয়াত ৫২..৫৩💙🌸\n-!\n•➠𝗫𝗘𝗦𝗔𝗡~𝗕𝗢𝗧💜🌻",
             "- ইসলাম অহংকার করতে শেখায় না!🌸\n\n- ইসলাম শুকরিয়া আদায় করতে শেখায়!🤲🕋🥀\n•➠𝗫𝗘𝗦𝗔𝗡~𝗕𝗢𝗧💜🌻",
             "- বেপর্দা নারী যদি নায়িকা হতে পারে\n _____🤗🥀 -তবে পর্দাশীল নারী গুলো সব ইসলামের শাহাজাদী __🌺🥰\n  __মাশাল্লাহ।।\n•➠𝗫𝗘𝗦𝗔𝗡~𝗕𝗢𝗧💜🌻",
             "┏━━━━ ﷽ ━━━━┓\n 🖤﷽স্মার্ট নয় ইসলামিক ﷽🥰\n 🖤﷽ জীবন সঙ্গি খুঁজুন ﷽🥰\n┗━━━━ ﷽ ━━━━┛\n•➠𝗫𝗘𝗦𝗔𝗡~𝗕𝗢𝗧💜🌻",
             "ღ࿐– যখন বান্দার জ্বর হয়,😇\n🖤তখন গুনাহ গুলো ঝড়ে পড়তে থাকে☺️\n– হযরত মুহাম্মদ(সাঃ)●───༊༆\n•➠𝗫𝗘𝗦𝗔𝗡~𝗕𝗢𝗧💜🌻",
             "~🍂🦋\n              ━𝐇𝐚𝐩𝐩𝐢𝐧𝐞𝐬𝐬 𝐈𝐬 𝐄𝐧𝐣𝐨𝐲𝐢𝐧𝐠 𝐓𝐡𝐞 𝐋𝐢𝐭𝐭𝐥𝐞\n                          ━𝐓𝐡𝐢𝐧𝐠𝐬 𝐈𝐧 𝐋𝐢𝐟𝐞..♡🌸\n           ━𝐀𝐥𝐡𝐚𝐦𝐝𝐮𝐥𝐢𝐥𝐥𝐚𝐡 𝐅𝐨𝐫 𝐄𝐯𝐞𝐫𝐲𝐭𝐡𝐢𝐧𝐠...💗🥰\n•➠𝗫𝗘𝗦𝗔𝗡~𝗕𝗢𝗧💜🌻",
             "•___💜🌈___•\n°___:))-তুমি আসক্ত হও-||-🖤🌸✨\n°___:))-তবে নেশায় নয় আল্লাহর ইবাদতে-||-🖤🌸✨\n•___🍒🖇️✨___•\n•➠𝗫𝗘𝗦𝗔𝗡~𝗕𝗢𝗧💜🌻",
             "─❝হাসতে❜❜ হাসতে❜❜ একদিন❜❜😊😊\n ━❥❝সবাইকে❜❜ ─❝কাদিয়ে ❜❜বিদায়❜❜ নিবো❜❞.!!🙂💔🥀\n•➠𝗫𝗘𝗦𝗔𝗡~𝗕𝗢𝗧💜🌻 ",
             "🦋🥀࿐\nლ_༎হাজারো༎স্বপ্নের༎শেষ༎স্থান༎••༊🙂🤲🥀\n♡_༎কবরস্থান༎_♡❤\n🦋🥀࿐\n•➠𝗫𝗘𝗦𝗔𝗡~𝗕𝗢𝗧💜🌻",
             "•\n\nপ্রসঙ্গ যখন ধর্ম নিয়ে•🥰😊\nতখন আমাদের ইসলামই সেরা•❤️\n𝐀𝐥𝐡𝐚𝐦𝐝𝐮𝐥i𝐥𝐥𝐚🌸❤️\n•➠𝗫𝗘𝗦𝗔𝗡~𝗕𝗢𝗧💜🌻",
             "🥀😒কেউ পছন্দ না করলে,,,,\n        কি যায় আসে,,🙂\n                😇আল্লাহ তো,,\n        পছন্দ করেই বানিয়েছে,,♥️🥀\n         🥰  Alhamdulillah 🕋\n•➠𝗫𝗘𝗦𝗔𝗡~𝗕𝗢𝗧💜🌻",
             "🌼 এত অহংকার করে লাভ নেই! 🌺 \n  মৃত্যুটা নিশ্চিত,, শুধু সময়টা\n   অ'নিশ্চিত।🖤🙂\n•➠𝗫𝗘𝗦𝗔𝗡~𝗕𝗢𝗧💜🌻 ",
             "_🌻••ছিঁড়ে ফেলুন অতীতের\nসকল পাপের\n                 অধ্যায় ।\n_ফিরে আসুন রবের ভালোবাসায়••🖤🥀\n•➠𝗫𝗘𝗦𝗔𝗡~𝗕𝗢𝗧💜🌻",
             "_বুকে হাজারো কষ্ট নিয়ে\n                  আলহামদুলিল্লাহ বলাটা••!☺️\n_আল্লাহর প্রতি অগাধ বিশ্বাসের নমুনা❤️🥀\n•➠𝗫𝗘𝗦𝗔𝗡~𝗕𝗢𝗧💜🌻",
             "_আল্লাহর ভালোবাসা পেতে চাও•••!🤗\n\n_তবে রাসুল (সা:)কে অনুসরণ করো••!🥰   \n•➠𝗫𝗘𝗦𝗔𝗡~𝗕𝗢𝗧💜🌻"
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
