const fs = require("fs");
module.exports.config = {
	name: "Nayan",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "abir",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Joy")==0 || event.body.indexOf("joy")==0 || event.body.indexOf("জয়")==0 || event.body.indexOf("Joy")==0) {
		var msg = {
				body: "জঁয়ঁ এ্ঁখ্ঁন্ঁ ব্যাস্ত আছে 🥰❤️🥀\n🥰😘",
				attachment: fs.createReadStream(__dirname + `/noprefix/joy1.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
