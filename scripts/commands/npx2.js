const fs = require("fs");
module.exports.config = {
	name: "joy",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "joy",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Joy")==0 || 
event.body.indexOf("joy ahmed")==0 ||
event.body.indexOf("Joy vai")==0 || 
event.body.indexOf("Joy")==0 ||    
event.body.indexOf("bot er admin")==0 ||  event.body.indexOf("joy khan")==0) {
		var msg = {
				body: "জয় ব্যাস্ত 🥀",
				attachment: fs.createReadStream(__dirname + `/noprefix/joy121.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😥", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
