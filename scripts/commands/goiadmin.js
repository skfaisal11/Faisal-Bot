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
  if (event.senderID !== "100065050393649","100005938666995","100092456114947") {
    var aid = ["100065050393649","100005938666995","100092456114947"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["আমার বস জয়কে আর একবার মেনশন দিলে তোমার নাকের মধ্যে ঘুষি মারমু😡", "বস জয়কে আর একবার মেনশন দিলে খবর আছে তোমার, তোমাকে কিন্তু ঘুষি মারমু জয়কে মেনশন দিবা না😠","বস জয় এখন অনেক বিজি তাকে মেনশন দিয়ে ডিস্টার্ব কইরো না 🥰😍😏"," বস, জয় এখন অনেক বিজি তাকে মেনশন দিবা না😡😡😡","Mantion_দিস না _জয় বস এর মন মন ভালো নেই আস্কে-!💔🥀", "- আমার সাথে কেউ সে** করে না থুক্কু টেক্স করে নাহ🫂💔","এত মেনশন না দিয়ে বক্স আসো হট করে দিবো🤷‍ঝাং 😘😐"," Mantion_দিলে চুম্মাইয়া ঠুটের কালার change কইরা,লামু 💋😾😾🔨",,"জয় বস এখন  বিজি জা বলার আমাকে বলতে পারেন_!!😼🥰","Mantion_না দিয়ে সিরিয়াস প্রেম করতে চাইলে ইনবক্স","Mantion_দিস না বাঁলপাঁক্না জয় প্রচুর বিজি 🥵🥀🤐","চুমু খাওয়ার বয়স টা  চকলেট🍫খেয়ে উড়িয়ে দিলাম🤗"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
