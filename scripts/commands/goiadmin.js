module.exports.config = {
  name: "goiadmin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    description: "mention",
    prefix: true,
    category: "user",
    usages: "tag",
    cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100001473448671") {
    var aid = ["100001473448671"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Mantion_দিস না 𝗝𝗘𝗦𝗔𝗡 বস এর মন মন ভালো নেই আস্কে-!💔🥀\n•➠𝗫𝗘𝗦𝗔𝗡~𝗕𝗢𝗧💜🌻", "- আমার সাথে কেউ সেক্স করে না থুক্কু টেক্স করে নাহ🫂💔\n•➠𝗫𝗘𝗦𝗔𝗡~𝗕𝗢𝗧💜🌻", "আমার একটা প্রিয় মানুষ খুব দরকার কারন আমার চোখে পানি আসার আগে নাকে সর্দি চলে আসে🤣🤣\n•➠𝗫𝗘𝗦𝗔𝗡~𝗕𝗢𝗧💜🌻","এত মেনশন না দিয়ে বক্স আসো হট করে দিবো🤷‍ঝাং 😘🥒\n•➠𝗫𝗘𝗦𝗔𝗡~𝗕𝗢𝗧💜🌻"," Mantion_দিলে চুম্মাইয়া ঠোটের কালার change কইরা,লামু 💋😾😾🔨\n•➠𝗫𝗘𝗦𝗔𝗡~𝗕𝗢𝗧💜🌻","এতু ইমুশানাল কথা বলো তল দেশ দিয়ে অজরে বৃষ্টি হচ্ছে আমার 😭😭\n•➠𝗫𝗘𝗦𝗔𝗡~𝗕𝗢𝗧💜🌻","𝗝𝗘𝗦𝗔𝗡 বস এখন  বিজি জা বলার আমাকে বলতে পারেন_!!😼🥰\n•➠𝗫𝗘𝗦𝗔𝗡~𝗕𝗢𝗧💜🌻","এতো মেনশন নাহ দিয়া আমার সিংগেল 𝗝𝗘𝗦𝗔𝗡 বস রে একটা গফ দে 😒😏\n•➠𝗫𝗘𝗦𝗔𝗡~𝗕𝗢𝗧💜🌻","Mantion_না দিয়ে সিরিয়াস প্রেম করতে চাইলে ইনবক্স🙂\n•➠𝗫𝗘𝗦𝗔𝗡~𝗕𝗢𝗧💜🌻","মেনশন দিসনা পারলে একটা গফ দে\n•➠𝗫𝗘𝗦𝗔𝗡~𝗕𝗢𝗧💜🌻","Mantion_দিস না বালপাক্না জিসান বস প্রচুর বিজি 🥵🥀🤐\n•➠𝗫𝗘𝗦𝗔𝗡~𝗕𝗢𝗧💜🌻","চুমু খাওয়ার বয়স টা  চকলেট🍫খেয়ে উড়িয়ে দিলাম🤗\n•➠𝗫𝗘𝗦𝗔𝗡~𝗕𝗢𝗧💜🌻"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
