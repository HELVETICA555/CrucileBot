const Discord = require('discord.js');

const client = new Discord.Client();

function isAQuestion(messageContent) {
	//if it contains "should I" "do i build" "do i go" "is it better to" "what runes"
	let questionSS = ["should i", "do i build", "do i go", "is it better to", "what runes"]
	for (let i = 0; i < questionSS; i++) {
		if (messageContent.toLowercase().includes(questionSS[i]))
			return true
	}
	return false
}

client.once("ready", () => {
	console.log("BEEP BOP BOOP CRUCILE IS LITERALLY ALIVE AND INSIDE YOUR COMPUTER NOW")
});

client.on('message', async message => {
	if (message.authory.username == "Crucile") {
		//if crucile talks, reply with agreement
		message.reply('I agree. Crucile your cock is huge. I love your fat cock + you have a girlfriend of 3 years + people pay you to play league of legends')
	} else if (isAQuestion(message.content)) {
		//if a message is a question, reply with DEPENDS
		message.reply('DEPENDS')
	}
}
);

client.login(process.env.TOKEN)