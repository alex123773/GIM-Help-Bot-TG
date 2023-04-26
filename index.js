//Umbrae: https://www.blankmediagames.com/phpbb/viewtopic.php?f=27&t=120271
//Florae: https://www.blankmediagames.com/phpbb/viewtopic.php?f=27&t=119288
//Faunae: https://www.blankmediagames.com/phpbb/viewtopic.php?f=27&t=119748

const {Client, Intents, MessageEmbed, MessageActionRow} = require('discord.js');
const {readFile, writeFile, unlink} = require("fs");

const PRE = "=";

const bot = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS]});

const interactions = {};
const commands = {};
const conflicts = {};
const roles = [];
const events = [];
const menus = {};

const UTILS = require("./utils.js")({MessageActionRow, MessageEmbed, menus, interactions});

const SERVER_DATA = {};

function toggle_day(id)
{
	SERVER_DATA[id].day = !SERVER_DATA[id].day;
	pdata = SERVER_DATA[id].players;
	let players = (Object.keys(pdata));
	for(let i = players.length-1; i >= 0; i--) {
		let player =  pdata[players[i]];
		player.votes = {};
	}


}

function is_day(id)
{
	return SERVER_DATA[id].day;
}

const FNAME = "/Users/Alexk/Downloads/code/whisper-bot/GIM-Help-Bot-TG/example.store.json";
const FNAME2 = ".backup.json";
var TOKEN;
readFile(FNAME, (err, data) =>
{
	if(err) throw err;
	//if(err) return;

	let store = JSON.parse(data);

	if(store.TOKEN)
		TOKEN = store.TOKEN;
	else
		throw "Error: No TOKEN provided.";

	if(store.SERVER_DATA)
	{
		for(let id in store.SERVER_DATA)
			SERVER_DATA[id] = store.SERVER_DATA[id];

		writeFile(FNAME2, data, (err) =>
		{
			if(err) throw err;
		});
	}

	login();
})

var overwrites = 0;
function overwrite(chn)
{
	if(overwrites > 1)
	{
		if(chn) UTILS.msg(chn, "-WARNING: " + overwrites + " simultaneous overwrites!");
		console.log("WARNING: " + overwrites + " simultaneous overwrites!");
	}

	let json = JSON.stringify({TOKEN, SERVER_DATA});
	overwrites++;

	writeFile(FNAME, "", (err) =>
	{
		if(err) throw err;
		if(chn) UTILS.msg(chn, "+Data cleared successfully.");

		writeFile(FNAME, json, (err) =>
		{
			if(err) throw err;
			if(chn) UTILS.msg(chn, "+Data saved successfully.");

			overwrites--;
		});
	});
}

let c = 1;
function add_cmd(name, cmd)
{
	if(typeof name !== "string")
	{
		let usedNames = {};

		for(let i in name)
		{
			if(usedNames[name[i]])
				console.log("Error: Command \"" + cmd.title + " (" + cmd.cat + (cmd.meta.subCat ? (" " + cmd.meta.subCat) : "") + ")\" tries to use the name \"" + PRE + name[i] + "\" more than once.");
			else
			{
				usedNames[name[i]] = true;
				add_cmd(name[i], cmd);
			}
		}

		return;
	}

	if(name !== name.toLowerCase())
	{
		console.log("WARNING: Command name '" + name + "' is not lowercase!");
		name = name.toLowerCase();
	}

	if(name.match(" "))
	{
		console.log("WARNING: Command name '" + name + "' contains a space!");
		name = name.replace(/ /g, "_");
	}

	if(!cmd.id || !cmd.cat || !cmd.title || !cmd.desc || !cmd.func)
		throw "Error: Malformed command: " + name + "\n" + UTILS.display(cmd);

	if(!cmd.param)
		cmd.param = "";

	if(!cmd.meta)
		cmd.meta = {};

	if(commands[name])
	{
		let n1 = name + "-" + 1;
		let n2 = name + "-" + 2;

		if(commands[n1])
		{
			let i = 2;
			let newname = "";

			do
			{
				i = i + 1;
				newname = name + "-" + i;
			}
			while(commands[newname]);

			commands[newname] = cmd;
			conflicts[name][i-1] = {com: newname, title: cmd.title, cat: cmd.cat, subCat: cmd.meta.subCat};
		}
		else
		{
			commands[n1] = commands[name];
			commands[n2] = cmd;
			conflicts[name] = [{com: n1, title: commands[name].title, cat: commands[name].cat, subCat: commands[name].meta.subCat}, {com: n2, title: cmd.title, cat: cmd.cat, subCat: cmd.meta.subCat}];
			delete commands[name];

			add_cmd(name, {
				id: "c" + c,
				cat: "Conflict",
				title: PRE + name + " Conflict",
				desc: "This command exists because of a conflict between two command names. Use it to learn how to specify which individual command you want to see.",

				func: (chn) =>
				{
					let txt = "Command '" + PRE + name + "' refers to multiple commands. Did you mean:\n";

					for(let c in conflicts[name])
					{
						let con = conflicts[name][c];
						txt = txt + "\n" + PRE + con.com + " - " + con.title + " (" + con.cat + (con.subCat && (" " + con.subCat) || "") + ")";
					}

					UTILS.msg(chn, txt);
				}
			});

			c = c + 1;
		}
	}
	else
		commands[name] = cmd
}

let r = 1;
function register_role(name, cat, desc, meta, func)
{
	if(!func)
	{
		func = meta;
		meta = {};
	}

	let cmd = 
	{
		id: "r" + r,
		cat,
		title: desc,
		desc: "View details of the " + desc + " role.",
		param: "",
		meta,
		isRole: true,
		func: (chn, message, e, args, nosend) =>
		{
			let fac = GLOBAL.factions[cat] || {color: "808080"};
			let color = fac.color

			if(color === "random")
				color = UTILS.rHex(6);

			e.setAuthor({name: desc, iconURL: fac.icon});
			
			if(color !== "null")
				e.setColor(color || "808080");

			try
			{
				if(func(e, chn, message, args) || nosend)
					return;

				UTILS.embed(chn, e);
			}
			catch(error)
			{
				console.log(error.message + "\n\n" + error.stack);
				UTILS.msg(chn, "-ERROR: " + error.message + "\n\n" + error.stack);
			}
		}
	};

	r = r + 1;

	add_cmd(name, cmd);

	let rate = cmd.meta.spawnRate || 1;

	if(typeof cmd.meta.spawnCat === "object")
		rate *= Math.max(Math.pow(0.9, cmd.meta.spawnCat.length-1), 0.25);

	roles[roles.length] = {cmd, rate};
}

let ev = 1;
function register_event(name, desc, meta, func)
{
	if(!func)
	{
		func = meta;
		meta = {};
	}

	let cmd = 
	{
		id: "e" + ev,
		cat: "Event",
		title: desc,
		desc: "View details of the " + desc + " event.",
		param: "",
		meta,
		func: (chn, message, e, args, nosend) =>
		{
			e.setAuthor({name: desc});
			e.setColor("4F545C");

			try
			{
				if(func(e, chn, message, args) || nosend)
					return;

				for(let f in e.fields)
				{
					if(e.fields[f].value.length > 1024)
					{
						UTILS.msg(chn, "-ERROR: Command " + PRE + (typeof name === "string" ? name : name[0]) + " contains a Field which is longer than 1024 characters!");
						return;
					}
				}

				UTILS.embed(chn, e);
			}
			catch(error)
			{
				console.log(error.message + "\n\n" + error.stack);
				UTILS.msg(chn, "-ERROR: " + error.message + "\n\n" + error.stack);
			}
		}
	};

	ev = ev + 1;
	add_cmd(name, cmd);
	events[events.length] = {cmd, rate: cmd.meta.spawnRate || 1};
}

function getMentions(text)
{
	let matched;
	let matchlist = [];
	let mentions = [];
	let regex = /<@/g;

	while(matched = regex.exec(text))
		matchlist[matchlist.length] = matched.index;

	for(let i = 0; i < matchlist.length; i++)
	{
		let end;
		let n;

		for(n = matchlist[i]+2; n < text.length; n++)
		{
			let c = text.charAt(n);

			if(c === '>')
			{
				end = n;
				mentions[mentions.length] = text.substring(matchlist[i], end+1);
				break;
			}
			else if(!UTILS.isInt(c) && !(n === matchlist[i]+2 && c === "&"))
				break;
		}

		if(!end && n == text.length)
			break;
	}

	return mentions;
}

const GLOBAL = {
	PRE,
	UTILS,
	
	bot,
	commands,
	roles,
	events,
	add_cmd,
	register_role,
	register_event,
	overwrite,

	SERVER_DATA,
	is_day,
	toggle_day,

	MessageEmbed,
	MessageActionRow
};

require("./cmd_factions.js")(GLOBAL);
require("./cmd_archive.js")(GLOBAL);
require("./cmd_basics.js")(GLOBAL);
require("./cmd_rng.js")(GLOBAL);
require("./cmd_game.js")(GLOBAL);

require("./roles/cmd_roles_misc.js")(GLOBAL);
for(let i = 50; i <= 3500; i+=50)
	require("./roles/cmd_roles_" + (i-49) + "-" + (i) + ".js")(GLOBAL);
for(let i = 50; i <= 50; i+=50)
	require("./events/cmd_events_" + (i-49) + "-" + (i) + ".js")(GLOBAL);

for(let i = 1; i <= 3484; i++)
	if(!commands[i.toString()])
		console.log("Missing: " + i);
for(let i = 1; i <= 32; i++)
	if(!commands["e" + i.toString()])
		console.log("Missing: e" + i);



bot.on("ready", () =>
{
	console.log("Logged in as " + bot.user.tag + "!");

	console.log("Guilds:");
	bot.guilds.cache.forEach(g =>
	{
		g.members.fetch(bot.user.id).then(b =>
		{
			g.members.fetch(g.ownerId).then(o =>
			{
				console.log(g.id + " - " + g.name + " - " + g.memberCount + " - " + o.user.tag + " - " + b.permissions.has("CREATE_INSTANT_INVITE") + " - " + b.permissions.has("ADMINISTRATOR"));
			});
		});
	});
});

bot.on("messageCreate", (message) =>
{
	let data = SERVER_DATA[message.guild.id];

	if(data)
	{
		for(let i = 0; i < data.relay.length; i++)
		{
			let ch1 = message.guild.channels.cache.get(data.relay[i].inp);

			if(ch1 && ch1.id === message.channel.id)
			{
				let ch2 = message.guild.channels.cache.get(data.relay[i].out);

				if(ch2 && (message.member.user.id !== bot.user.id || message.embeds.length === 0 || !message.embeds[0].timestamp))
				{
					let addedText = "";
					let output = new MessageEmbed();
					let sender = UTILS.getPlayerByID(SERVER_DATA[message.guild.id].players, message.author.id);

					if(sender && sender.tags.relay_nick)
					{
						let nicklib = UTILS.libSplit(sender.tags.relay_nick, ",", ":");

						if(typeof nicklib === "string")
							output.setAuthor({name: sender.tags.relay_nick});
						else if(nicklib[message.channel.id])
							output.setAuthor({name: nicklib[message.channel.id]});

						if(!output.author)
							for(let nick in nicklib)
								if(!nicklib[nick])
									output.setAuthor({name: nick});
					}

					if(!output.author)
					{
						output.setAuthor({name: message.member.displayName, iconURL: message.author.avatarURL()});
						output.setColor(message.member.displayHexColor);
					}

					output.setTimestamp();
					output.setDescription(message.content);

					if(output.description)
					{
						let mentions = getMentions(output.description);

						for(let n = 0; n < mentions.length; n++)
							addedText = addedText + " " + mentions[n];
					}

					for(const [k, s] of message.stickers)
					{
						if(!output.image)
							output.setImage(s.url);
						else
							output.addField(s.name, s.url);
					}

					for(const [k, a] of message.attachments)
					{
						let title = a.contentType;
						if(!title) title = "Attachment";

						if(!output.image && title.substring(0, 5) === "image")
							output.setImage(a.url);
						else
							output.addField("Attached: " + title, a.url);
					}

					let embeds = [output];

					for(let n = 0; n < message.embeds.length; n++)
						embeds[embeds.length] = message.embeds[n];

					ch2.send({content: (addedText.length > 0 ? addedText : null), embeds});
				}
			}
		}
	}

	if(message.content.substring(0, PRE.length) === PRE)
	{
		let channel = message.channel;
		let embed = new MessageEmbed();
		let args = UTILS.split(message.content.substring(PRE.length), " ");
		let cmd = (args[0] || "").toLowerCase();
		args = args.splice(1);

		if(commands[cmd])
		{
			let meta = commands[cmd].meta;

			if(meta.adminOnly && !message.member.permissions.has("ADMINISTRATOR"))
				UTILS.msg(channel, "-You do not have elevated permissions for this bot.");
			else if(meta.minArgs && args.length < meta.minArgs)
				UTILS.msg(channel, "-USAGE: " + PRE + cmd + " " + commands[cmd].param);
			else
				commands[cmd].func(channel, message, embed, args);
		}
		else
			UTILS.msg(channel, "-ERROR: Unknown command: " + PRE + cmd);
	}

	if(message.member.user.id === bot.user.id || UTILS.randInt(20000) !== 666)
		return;

	let egg = "null";

	switch(message.guild.id)
	{
		case "701906009651675208": egg = "pingas"; break;
		case "910802299918626866": egg = "Hmm..."; break;
		case "868350543859441754": egg = "Who are you people?!"; break;
		case "986855008840601613": egg = "I see you..."; break;
		case "1000084058698690630": egg = "Mwah hah hah...!"; break;
		case "1003685028837994578": egg = "What are you talking about?"; break;
		case "1013511586587103402": egg = "Look behind you."; break;
		case "630529858920906764": egg = "Nice place you got here."; break;
		case "775193835147755520": egg = "Ew."; break;
		case "983960475446435910": egg = "Suspicious..."; break;
	}

	if(egg !== "null") UTILS.msg(message.channel, egg, true);
	console.log(egg);
});

bot.on("interactionCreate", (i) =>
{
	if(i.customId && interactions[i.customId])
		if(!interactions[i.customId](i))
			i.update({});
});

bot.on("guildMemberAdd", (member) =>
{
	if(!member.user.bot && member.guild.id === "970041597590929519")
		member.roles.add("990419145944334366");
});

bot.on("debug", (e) => console.log(e));
bot.on("error", (error) => console.log(error.message + "\n\n" + error.stack));
bot.on("shardError", (error) => console.log(error.message + "\n\n" + error.stack));

function login()
{
	bot.login(TOKEN);
}

setInterval(() =>
{
	let now = new Date().getTime();

	for(let mid in menus)
	{
		let menu = menus[mid];

		if(now - menu.time >= 3600000)
		{
			let message = menu.message;

			if(menu.type === "text")
				message.edit({components: [], content: menu.list[menu.page-1]});
			else if(message.embeds[0])
				message.edit({components: [], embeds: [message.embeds[0]]});

			delete menus[mid];
		}
	}
}, 1000)
