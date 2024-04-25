const fs = require("fs");
module.exports.config = {
	name: "🙆",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "MrTomXxX", 
	description: "hihihihi",
prefix: false,
	category: "no prefix",
	usages: "🙆",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("জয়")==0 || event.body.indexOf("Joy")==0 || event.body.indexOf("joy")==0 ||
event.body.indexOf("joy")==0 ||
event.body.indexOf("Joy")==0 ||
 event.body.indexOf("@Joy")==0) {
		var msg = {
				body: "༊᭄- 🤙💯🔥\n\n𝐌𝐃 𝐉𝐔𝐁𝐀𝐄𝐃 𝐀𝐇𝐌𝐌𝐄𝐃 𝐉𝐎𝐘 🖤🌸༊᭄..! ❥┼─༊💝🥀",
				attachment: fs.createReadStream(__dirname + `/noprefix/joyefa.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💝", event.messageID, (err) => {}, true)
		}
	}
	module.exports😊.run = function({ api, event, client, __GLOBAL }) {

  }
