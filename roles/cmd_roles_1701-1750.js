module.exports = (g) =>
{
	const {register_role, factions} = g;

	register_role(["asda", "1701"], "Other", "ASDA", {cannotRoll: true}, (e) =>
	{
		e.setDescription("Post 1701\nThis role cannot spawn, as the Vampire faction has been removed.");
	});

	register_role(["motherfucker", "mofo", "mfer", "1702"], "Neutral", "Motherfucker", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1702");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack a player at night.");

		e.addField("Attributes:", "- Your sub-abilities are used at day to make that your night ability for this night only. 1 use per.");

		e.addField("Sub Abilities:", "- Skip the next day and automatically lynch a random player that isn't you.\n- Deal an Unstoppable Rampage attack and clean the victims.\n- Deal a Powerful attack and gain a 1-time use of your target's ability.\n- Select a player to deal an Overkill attack to, and a player to deal an Unstoppable attack to.\n- Change a player's goal to NK goal. You two can win together.\n- Roleblock a player and learn their role, then during the day, downgrade their role, it will be properly downgraded at the beginning of the next night.\n- Roleblock a player. For the rest of the game, every action they take will take effect one night late.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["scp-3008-2", "scp_3008_2", "scp30082", "1703"], "SCP", "SCP-3008-2", {subCat: "Euclid"}, (e) =>
	{
		e.setDescription("Post 1703");

		e.addField("Alignment", "Unique SCP Euclid", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Trap someone in your Ikea, roleblocking them for the night.\n- Once per game, close your Ikea, dealing an Unstoppable Astral Attack to everyone that has previously been locked in your Ikea.");

		e.addField("Attributes:", "- Roleblock Immune");
		
		e.addField("Goal:", factions.SCP.goal);
	});

	register_role(["parrot", "1704"], "Crew", "Parrot", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1704");

		e.addField("Alignment", "Crew Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Assist a Crew member during the day.\n- Mimick a target during the day.");

		e.addField("Attributes:", "- Assisted Crew members may perform their night ability twice the following night.\n- You will use the first ability of your mimicked target on a target the following night.");
		
		e.addField("Goal:", factions.Crew.goal);
	});

	register_role(["hypothermia", "hypo", "1705"], "Everfrost", "Hypothermia", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1705");

		e.addField("Alignment", "Everfrost Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Inflict someone's visitors with Hypothermia. If they are attacked, you will roleblock their attacker(s).\n**Lethal Cold** Turn a player's nighttime ability into a Basic Attack tonight, roleblock all players who attack tonight, then coldsnap. You may only use this ability once per game.");

		e.addField("Attributes:", "- Roleblock Immunity");
		
		e.addField("Goal:", factions.Everfrost.goal);
	});

	register_role(["angel", "1706"], "Hallow", "Angel", {subCat: "Espionage"}, (e) =>
	{
		e.setDescription("Post 1706");

		e.addField("Alignment", "Hallow Espionage", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Grant a player Powerful Defense and all immunities during the night. May self target, but only once.");

		e.addField("Attributes:", "- You do not count as an Hallow member. Meaning, you are not counted in for calculating the cost of Saint Points for the Saint to transform, abilities that target the Hallow will not affect you, etc etc.\n- While you are alive, all Hallow members will need 1 more cost to grant the Saint a Saint Point. Meaning, Prince will need 3 Faith Points instead of 2, the Redeemer will need to gain 3 abilities instead of 2, etc etc. You are affected by this.\n- If you protect an Hallow Member from any ability that would negatively affect them, you will gain a Faith Point.\n- Once you have accumulated 2 Faith Points, the Saint will gain a Saint Point.");
		
		e.addField("Goal:", factions.Hallow.goal);
	});

	register_role(["zhalfirin_knight", "zhalfirinknight", "zhalfirin", "knight", "zk", "1707"], "Gatherer", "Zhalfirin Knight", {subCat: "White"}, (e) =>
	{
		e.setDescription("Post 1707\n*“You returned a warrior… . Your hair was cut, your eye tattooed with the red triangle of war.”*\n*—\"Love Song of Night and Day\"*");

		e.addField("Alignment", "Gatherer White", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Generate (White) each night.\n- (White): Attack a target each night. You may spend a second (White) to give yourself highest priority.");

		e.addField("Goal:", factions.Gatherer.goal);
	});

	register_role(["rotten_lunch", "rottenlunch", "rotten", "rl", "1708"], "Cult", "Rotten Lunch", {subCat: "Nutrition"}, (e) =>
	{
		e.setDescription("Post 1708");

		e.addField("Alignment", "Cult Nutrition", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Heal a target player during the night.\n- Roleblock a target player. If they are Cult, you will instead grant them all forms of immunities.\n- Poison a target player. 2 uses.");

		e.addField("Attributes:", "- This role is converted from Town (Nutrition) roles.");
		
		e.addField("Goal:", factions.Cult.goal);
	});

	register_role(["mandurugo", "mandu", "durugo", "1709"], "Mafia", "Mandurugo", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1709");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Seduce a player during the night.\n- Detach yourself from the world during the night, becoming visit immune (1-shot)");

		e.addField("Attributes:", "- Seduced players will be roleblocked, and if they attempt to vote for you the next day, their vote will secretly have 0 weight.\n- While you are detached, visitors will be given the generic failed visit message. Astral actions can still target you.\n- If you take no action during the night, you have detection immunity, appearing as a different random Town role each night. You will know what Town role you appear as each night.");
		
		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["believer", "believe", "1710"], "Cult", "Believer", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1710");

		e.addField("Alignment", "Cult Evil", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Worship during the night (3-shot)");

		e.addField("Attributes:", "- If you are visited while worshiping, you will roleblock and mark all of your visitors.\n- Marked players do not know that they are marked.\n- Cult attacks against marked targets are upgraded by one tier.\n- If a marked player visits you again at any point, you will deal a Powerful Attack to them. This does not count as a “Cult attack” upgraded by your mark.\n- You will know how many people you mark each night, but not who.\n- This role is converted from Town Evil roles.");
		
		e.addField("Goal:", factions.Cult.goal);
	});

	register_role(["darth_bane", "darthbane", "bane", "1711"], "Sith", "Darth Bane", {subCat: "Commanding"}, (e) =>
	{
		e.setDescription("Post 1711");

		e.addField("Alignment", "Unique Sith Commanding", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Convert another player to a random Sith Offensive role. You only convert the roles if they are any of the following:\n> - Town/City\n> - Neutral Benign\n> - Neutral Evils/Chaos with the witch wincon of seeing Town/City lose\n- 2-shot: Enable both yourself and the other Sith member to use the factional kill tonight.");

		e.addField("Attributes:", "- If this role spawns, only one other Sith may spawn. Any other Sith slots will be converted to Random Neutral slots.\n- The Sith faction cannot increase beyond two members by any means while you are alive.\n- Can perform the Sith factional kill.\n- Has private chat with the other Sith.\n- Conversion Immune");
		
		e.addField("Goal:", factions.Sith.goal);
	});

	register_role(["flagellant", "flage", "1712"], "Umbrae", "Flagellant", {subCat: "Assault"}, (e) =>
	{
		e.setDescription("Post 1712");

		e.addField("Alignment", "Umbra Assault", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Abilities:", "- Whip yourself during the night.\n- Bleed a target.");

		e.addField("Attributes:", "- While you are whipping yourself, you have Basic Defense, roleblock immunity, redirect immunity, and you will hit yourself with a Basic Attack.\n- If any player gives you defense or otherwise prevents you from attacking yourself, you will deal a Powerful Attack to them.\n- Your self-attack does not count you as the attacker for roles like Bodyguard (56).\n- If you bleed a target, they will be dealt a Basic Attack. If the attack hits, but does not kill, the victim will bleed out at the end of the next night unless healed.\n- Under a Full Moon, your Defense becomes Powerful while you are whipping yourself.\n- Under a Blood Moon, your Attacks are increased by one tier each.");
		
		e.addField("Goal:", factions.Umbrae.goal);
	});

	register_role(["osprey_x", "ospreyx", "1713"], "X", "Osprey X", {subCat: "Onslaught"}, (e) =>
	{
		e.setDescription("Post 1713");

		e.addField("Alignment", "X Onslaught", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None (Variable)", true);

		e.addField("Abilities:", "- Redirect all visits on a player to yourself, deal a Basic Attack to all your visitors, and gain a Strike.\n- Prepare 2 Strikes on players. Strikes will activate the following morning.\n- Use the factional attack");

		e.addField("Attributes:", "- You have 4 Strikes to use at the start of the game.\n- At the beginning of every night, all Striked players alive grants you 1 Volt Point. A Striked player dying causes you to lose 1 Volt Point. As you gain Volt Points, you become more powerful.\n\n2 VP: Basic Attack\n3 VP: Roleblock + Redirect Immunity\n4 VP: Powerful Attack + Basic Defense\n5 VP: Rampage\n6 VP: Powerful Defense\n7 VP: Lynchproof once per game\n8 VP: Unstoppable Attack\n10 VP: Take 2 actions per night");
		
		e.addField("Goal:", factions.X.goal);
	});

	register_role(["unstable", "1714"], "Neutral", "Unstable", {subCat: "Other"}, (e) =>
	{
		e.setDescription("Post 1714");

		e.addField("Alignment", "Neutral Other", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "Invincible", true);

		e.addField("Abilities:", "- Attack a player at night. One use.");

		e.addField("Attributes:", "- Redirect, Control, Roleblock, and Lynch immune.\n- You may only self-target.\n- Stable (1715) will always spawn.\n- The day after you use your ability, you permanently gain death immunity.");
		
		e.addField("Goal:", "Eliminate yourself.");
	});

	register_role(["stable", "1715"], "Neutral", "Stable", {subCat: "Other"}, (e) =>
	{
		e.setDescription("Post 1715");

		e.addField("Alignment", "Neutral Other", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Grant a player one tier of defense higher than what they currently have. 1 use.");

		e.addField("Attributes:", "- Redirect, Control, and Roleblock immune.\n- You may act while dead.\n- You may only target Unstable (1714).\n- Unstable (1714) will always spawn and you know who they are.\n- If your ability saves a player, you are considered to have won immediately.");
		
		e.addField("Goal:", "Keep Unstable (1714) alive at all costs.");
	});

	register_role(["barbarians", "barbarian", "1716"], "Neutral", "Barbarians", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1716");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Raid a player. Their abilities are nullified.\n- Raid a player. Their attributes are nullified.\n- Raid a player. Their life is nullified. (3 uses, can only be used on Even nights.)");

		e.addField("Attributes:", "- After being raided, your targets gain the ability to Repair, which is a night ability that restores all lost abilities and attributes but sets their defense to Vulnerable for the night.\n- All Neutral roles except for Neutral (Benign) are immune to all raids, and you are immune to all negative abilities used by Neutral roles.\n- If you are not visited for three nights in a row, you will become a random non-Neutral role. You can only become roles which have living members in their faction.");
		
		e.addField("Goal:", "Survive until the end of the game with only Neutrals alive.");
	});
	
	register_role(["australia", "au", "🇦🇺", "1717"], "Civilization", "Australia", {subCat: "Scientific"}, (e) =>
	{
		e.setDescription("Post 1717\n*”Australia is like Jack Nicholson. It comes right up to you and laughs very hard in your face in a highly threatening and engaging manner.” -Douglas Adams*");

		e.addField("Alignment", "Unique Civilization Scientific", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Flip someone’s post number upside down. Their abilities and attributes will be replaced by those of the post number opposite of theirs. Their win condition does not change. (e.g. if someone’s post number is n and there are x total roles then their new abilities will be that of post x-n)\n- Poison someone. If they take any actions aside from speaking for the next day and night, they will be killed immediately. (Costs 3 Gold)");

		e.addField("Attributes:", "- If any Civilization is attacked and survives, they can perform two attacks the next time they perform the factional kill. ");

		e.addField("Messages:", "“They were bested by an Australian digger.” (Factional Kill)\n“You were bitten by a snake. You must stay home to recover!” (Poisoned)"); 

		e.addField("Goal:", factions.Civilization.goal);
	});

	register_role(["australia", "au", "🇦🇺", "1718"], "Civilization", "Australia", {subCat: "Scientific"}, (e) =>
	{
		e.setDescription("Post 1718\n*”Australia is like Jack Nicholson. It comes right up to you and laughs very hard in your face in a highly threatening and engaging manner.” -Douglas Adams*");

		e.addField("Alignment", "Unique Civilization Scientific", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Flip someone’s post number upside down. Their abilities and attributes will be replaced by those of the post number opposite of theirs. Their win condition does not change. (e.g. if someone’s post number is n and there are x total roles then their new abilities will be that of post x-n)\n- Poison someone. If they take any actions aside from speaking for the next day and night, they will be killed immediately. (Costs 3 Gold)");

		e.addField("Attributes:", "- If any Civilization is attacked and survives, they can perform two attacks the next time they perform the factional kill. ");

		e.addField("Messages:", "“They were bested by an Australian digger.” (Factional Kill)\n“You were bitten by a snake. You must stay home to recover!” (Poisoned)");

		e.addField("Goal:", factions.Civilization.goal);
	});

	register_role(["australia", "au", "🇦🇺", "1719"], "Civilization", "Australia", {subCat: "Scientific"}, (e) =>
	{
		e.setDescription("Post 1719\n*”Australia is like Jack Nicholson. It comes right up to you and laughs very hard in your face in a highly threatening and engaging manner.” -Douglas Adams*");

		e.addField("Alignment", "Unique Civilization Scientific", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Flip someone’s post number upside down. Their abilities and attributes will be replaced by those of the post number opposite of theirs. Their win condition does not change. (e.g. if someone’s post number is n and there are x total roles then their new abilities will be that of post x-n)\n- Poison someone. If they take any actions aside from speaking for the next day and night, they will be killed immediately. (Costs 3 Gold)");

		e.addField("Attributes:", "- If any Civilization is attacked and survives, they can perform two attacks the next time they perform the factional kill. ");

		e.addField("Messages:", "“They were bested by an Australian digger.” (Factional Kill)\n“You were bitten by a snake. You must stay home to recover!” (Poisoned)");

		e.addField("Goal:", factions.Civilization.goal);
	});

	register_role(["owl", "1720"], "Thundercry", "Owl", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1720");

		e.addField("Alignment", "Thundercry Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Target a striked player, and roleblock them through immunity.\n- Prepare a strike on a player. Strikes will activate the following morning.");

		e.addField("Attributes:", "- Roleblock Immunity\n- If one or more striked players are alive, all Thundercry members gain Roleblock Immunity.\n- If two or more striked players are alive, gain Basic defense.\n- If you prevent a target from negatively affecting a Thundercry member, gain a Strike.");
		
		e.addField("Goal:", factions.Thundercry.goal);
	});

	register_role(["darth_nihlus", "darthnihlus", "nihlus", "1721"], "Sith", "Darth Nihlus", {subCat: "Offensive"}, (e) =>
	{
		e.setDescription("Post 1721");

		e.addField("Alignment", "Unique Sith Offensive", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Visit a player, if they are a Jedi, they lose their Force Abilities, otherwise they are Drained.");

		e.addField("Attributes:", "- Drained Enemies lose their Defense stats.\n- Conversion Immune, (has special message \"You attempted to convert someone who is a hole in the Force.\")");
		
		e.addField("Goal:", factions.Sith.goal);
	});

	register_role(["smug", "smuggamer", "thatsmuggamer", "1722"], "Discordian", "Smug", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1722");

		e.addField("Alignment", "Unique Discordian Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Can ressurect 1 Discordian Role if killed");

		e.addField("Attributes:", "- Is allowed to pick music for the game, because fuck you.\n- At the beginning of the game, is told how many Factions are in play, though not how many members each faction has.");
		
		e.addField("Goal:", factions.Discordian.goal);
	});

	register_role(["aaaaaaaaaa", "aaaaaaaaa", "aaaaaaaa", "aaaaaaa", "aaaaaa", "aaaaa", "aaaa", "aaa", "aa", "1723"], "Town", "AAAAAAAAAA", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 1723");

		e.addField("Alignment", "Town AAAAAAAAAA", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None (Powerful)", true);

		e.addField("Abilities:", "- AAAAAAAAAA, redirecting everyone in the game to you and gain Powerful defense.\n- AAAAAAAAAA, killing a player.");

		e.addField("Attributes:", "- For practical purposes, this role is Town Power.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["secret_agent", "secretagent", "secret", "agent", "sa", "1724", "105u"], "Unseen", "Secret Agent", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1724\n*This is your mission. You have no choice but to accept it.*\nConverted from: Super Sneaky Spy");

		e.addField("Alignment", "Unseen Investigative", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None (Powerful)", true);

		e.addField("Abilities:", "- Tail (Night): Choose a player. You will be informed of all notifications they receive tonight, apart from ability feedback from their own ability, as well as who they visit.\n- Wiretap (Night, 2 use): Choose a player. You will be informed of any ability feedback they receive as well as who they visit.");

		e.addField("Attributes:", "- At the start of each night, you will be told how many roles of each subalignment are alive.\n- Upon your conversion, you will be given five more completely random and almost entirely useless pieces of information about the game decided about the host.");
		
		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["two_grams_of_iron", "twogramsofiron", "grams", "iron", "tgoi", "2goi", "1725", "182u"], "Unseen", "Two Grams of Iron", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 1725\n*Don't stand up too fast.*\nConverted from: Two Grams of Protein");

		e.addField("Alignment", "Unseen Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Palate Cleanser (Night): When using this ability, any other member of the Unseen may choose to not use their ability in return for a heal and a purge of any negative effects.\n- Pump Some Iron (Night): When using this ability, any other member of the Unseen may choose to not use their ability in return for gaining roleblock, redirect, and detection immunity tomorrow night.");

		e.addField("Attributes:", "- Any Unseen member the sacrifices their night ability for your benefits will visit you the night they sacrifice their ability.");
		
		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["quantum_mechanic", "quantummechanic", "quantum", "mechanic", "qm", "1726"], "Stalker", "Quantum Mechanic", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1726\n*Any breath can be your last. There are an infinite number of timelines where any one of your breaths was actually your last.*");

		e.addField("Alignment", "Stalker Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose two players at night to store their abilities tonight in an alternate timeline.\n- Choose a player whose abilities you have previously stored to learn who they were intending to target with their ability (3 use).\n- Merge your alternate timeline with the current one at night.");

		e.addField("Attributes:", "- Any player whose abilities you store in an alternate timeline will be roleblocked the night that you store their action, but the ability will be stored in your timeline exactly the way it happened. You will be informed of all players.\n- When you unleash your timeline, all abilities that you have stored will activate immediately. You may choose two abilities that you have stored to redirect it to another player of your choosing. This happens automatically upon your death. Any abilities performed by dead players will be performed through you instead.");
		
		e.addField("Goal:", factions.Stalker.goal);
	});

	register_role(["dementia", "1727"], "Mafia", "Dementia", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1727");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Make someone forget their night feedback, recieveing it 2 nights later.\n‎ - Make someone forget their night feedback, recieveing it 2 nights later.\n- Make someone forget their night feedback, recieveing it 2 nights later.\n- Make someone forget their night feedback, recieveing it 2 nights later.");

		e.addField("Attributes:", "- You may not Multitask.\n- Post 1727\n- You may not Multitask.\n- You may not Multitask.\n- You may not Multitask.\n\nAbilities:\n- Make someone forget their night feedback, recieveing it 2 nights later.\n‎ - Make someone forget their night feedback, recieveing it 2 nights later.\n\nAttack: None");
		
		e.addField("Goal:", factions.Mafia.goal + "\nDementia (Mafia Support)");
	});

	register_role(["stormcaller", "storm", "caller", "1728"], "Thundercry", "Stormcaller", {subCat: "Onslaught"}, (e) =>
	{
		e.setDescription("Post 1728\n*Master of growing lightning.*");

		e.addField("Alignment", "Thundercry Onslaught", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Vulnerable (None)", true);

		e.addField("Abilities:", "- Attack another player at night.\n- Lower another player's defense for the night, to a minimum of None.\n- Learn a player's current defense level at the end of a night (with other abilities factored in).\n- Prepare a Strike on a player. Strikes will activate the following morning.");

		e.addField("Attributes:", "- The number of abilities you can use each night is equal to the current night's number. For example, you can use 1 ability on night 1, or 4 on night 4.\n- You must use each ability once before you can use them another time. This carries over between nights. (If you've used 3/4 of your abilities before Night 3 for example, on Night 3, you must use your fourth ability. Then you can choose any 2 distinct abilities of the 4 to use at the same time. Like a deck of four cards that gets reshuffled whenever it gets emptied.)\n- You have Vulnerable Defense if only 1 or fewer Striked players are alive. Otherwise, you have None Defense.");
		
		e.addField("Goal:", factions.Thundercry.goal);
	});

	register_role(["magmadon", "1729"], "Underworld", "Magmadon", {subCat: "Offensive"}, (e) =>
	{
		e.setDescription("Post 1729\n*Evolved to overcome a meteor.*");

		e.addField("Alignment", "Unique Underworld Offensive", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Place a Burn on a player at night.\n- Douse every player with at least one Burn on them.");

		e.addField("Attributes:", "- While you live, whenever any ability affects any Underworld member, including abilities that are counted as astral or indirect, a Burn will be placed on the user.\n- No victims know when a Burn is on them, but you will know the names of every player with a Burn on them at all times, as well as how many they have.\n- Each burn will reduce the victim's defense by 1 level, to a minimum of Vulnerable.\n- You can only use your Douse ability once, and only when at least 10 Burns exist on living players.\n- Any time a player dies with at least one Burn on them, \"burned to death\" will replace whatever their true cause of death was.");
		
		e.addField("Goal:", factions.Underworld.goal);
	});

	register_role(["wisp", "1730"], "Spirit", "Wisp", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1730\n*Flickering radiantly; follow to your doom...*");

		e.addField("Alignment", "Spirit Killing", true);
		e.addField("Attack", "Faction Variable (Unstoppable)", true);
		e.addField("Defense", "Faction Variable", true);

		e.addField("Abilities:", "- Attack a player with your current attack tier.\n- Discharge stored energy at a player for an Unstoppable Attack.");

		e.addField("Attributes:", "- Discharging will permanently reduce your attack or defense at random by one tier. This is permanent.\n- Your Defense will be set to Vulnerable the night that you use Discharge.\n- You cannot Discharge two nights in a row.\n- Your permanent attack/defense reductions can set your attack to a minimum of None and your defense to a minimum of Vulnerable.");
		
		e.addField("Goal:", factions.Spirit.goal);
	});

	register_role(["rock_golem", "rockgolem", "golem", "rg", "1731"], "Rock", "Rock Golem", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1731\n*Common weapon in mage's duels. Often the only survivor.*");

		e.addField("Alignment", "Unique Rock Killing", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Overprotective (Variable)", true);

		e.addField("Abilities:", "- Slam a player with the weight of your current Defense level.");

		e.addField("Attributes:", "- You cannot use Slam before Night 3, and you cannot use it two nights in a row.\n- Each attack against you will reduce your defense level by 1 permanently, to a minimum of None.\n- Roleblock, Burn, Douse, Poison, Plague Immune\n- Strike Immunity: Thundercry players will think they were successful if they try to place a Strike on you, but it will secretly have failed.");
		
		e.addField("Goal:", factions.Rock.goal);
	});

	register_role(["priest", "1732"], "Umbrae", "Priest", {subCat: "Assault"}, (e) =>
	{
		e.setDescription("Post 1732\n*Hears voices. They tell him to kill. To kill you.*");

		e.addField("Alignment", "Unique Umbra Assault", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Pray for violence upon another player each night.\n- Offer Piety on a Full Moon night. (2 use)");

		e.addField("Attributes:", "- When you pray, you must choose a number \"X\" between 1 and 4. Your target will be hit by an X-tier attack after X nights pass, including the one that you pray on.\n- Offering Piety will allow all pending Prayer attacks to occur 1 night sooner, up to as early as the end of the current night.\n- Detection Immunity during non-moon nights.\n- The Blood Moon will allow all pending Prayer attacks to occur at the end of this night. This excludes Prayers made that night.\n- The Blood Moon will grant you one-use Death Immunity\n- During a Blood Moon, you may Pray twice.\n- Astral Visitor");
		
		e.addField("Goal:", factions.Umbrae.goal);
	});

	register_role(["giant_shark", "giantshark", "shark", "gs", "1733"], "Crew", "Giant Shark", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1733\n*Because what pirate crew is complete without a good shark to eat those who walk the plank?*");

		e.addField("Alignment", "Crew Killing", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Bite a player at night. If they survive by any means, future attacks against them will have their tier increased by 1.\n- Thrash a player at night. You may use a second ability in addition to this one. (1 use)\n- Execute a player at night. If their defense is None or below, they will immediately die, and any non-immediate action they planned to use will be cancelled. (1 use)");

		e.addField("Attributes:", "- You are the last priority in promotion lists.\n- Your attack starts at Basic. After the end of every even night, your attack will increase, to a maximum of Unstoppable.\n- In Night 5 and afterwards, you will be Control and Redirect immune.");
		
		e.addField("Goal:", factions.Crew.goal);
	});

	register_role(["gelatinous_cube", "gelatinouscube", "gelatinous", "gelatin", "cube", "gc", "1734"], "Biohazard", "Gelatinous Cube", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1734\n*Eats everything. Including you.*");

		e.addField("Alignment", "Biohazard Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Engulf a player each night, disabling one of their abilities at random. If the disabled ability was the one they tried to use, you will be notified and gain Basic Defense.");

		e.addField("Attributes:", "- Every non-Biohazard ability that targets you has a 35% chance to fail. If it fails, you will be notified and gain Basic Defense. If the ability that fails has limited uses, it will still lose a use.\n- Poison Immunity");
		
		e.addField("Goal:", factions.Biohazard.goal);
	});

	register_role(["white_dragon", "whitedragon", "dragon", "wd", "1735"], "Everfrost", "White Dragon", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1735");

		e.addField("Alignment", "Unique Everfrost Support", true);
		e.addField("Attack", "Basic (Variable)", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Frost Breath: Drain up to two uses from a player's limited-use abilities at random. If they run out of all uses from this, or had no limited uses left already, roleblock them.\n- Frost Shape: Grant yourself basic defense tonight. If you get attacked, the attacker will be hit by a basic attack. (1 use)\n**Biting Cold** — Choose a player who has been previously roleblocked, and hit them with an attack tier equal to the amount of living players who have been previously roleblocked, up to a maximum of Unstoppable. This can only be used once per game.");

		e.addField("Attributes:", "- Roleblock Immunity\n- You cannot use Frost Shape two nights in a row.\n- Whenever three or more different players are roleblocked by anything in a single night, you will gain a use for Frost Shape.");
		
		e.addField("Goal:", factions.Everfrost.goal);
	});

	register_role(["copyfox", "1736"], "Neutral", "Copyfox", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1736");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Use an ability from any other role once per phase.\n- Permanently copy an ability from a role, 1 use.");

		e.addField("Attributes:", "- You may not use an ability from the same role twice, additionally, you may not use abilities that would give you another ability (outside of your own).\n- Anytime you perform an ability, It will be publically revealed which one you used, But not your name.\n- Abilities will still be affected by the original role's attributes.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["copywolf", "1737"], "Were", "Copywolf", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1737");

		e.addField("Alignment", "Were Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During a New Moon, copy a fellow Were member's ability, using it again on the same target.\n- During a Full Moon, copy any non-killing night ability from a Were role.");

		e.addField("Attributes:", "- Abilities you copy retain the original role's attributes that are tied to that ability.\n- You may only copy an ability from any given role once.");

		e.addField("Hunting Moon Enhancement: Master of the Night", "You may copy any non-killing night ability that any role has.");
		
		e.addField("Goal:", factions.Were.goal);
	});

	register_role(["acedia", "1738"], "Neutral", "Acedia", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1738");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack someone each night.\n- Roleblock a player at night and delay them by a night. You may only use this ability thrice.\n**Insatiable Indifference** — Delay all players targetting you by two nights and all other players except you by one night. You may only use this ability once.");

		e.addField("Attributes:", "- Roleblock and delay immune\n- When someone is delayed, for the rest of the game, every action they take will resolve the night after instead. They will not know they have been delayed.\n- Whenever someone targets you, they're delayed by one night.\n- You may multitask.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["nitrogen", "nitro", "1739"], "Everfrost", "Nitrogen", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1739\n*Cryoboutit*");

		e.addField("Alignment", "Unique Everfrost Support", true);
		e.addField("Attack", "Unstoppable (Basic)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Prepare a cryogenic chamber for a player at night. Cryogenic chambers take one night to build.\n- Force a player into a cryogenic chamber at night. They will be unable to perform any of their functions, and they will be unable to show up during the day phase. Once a player has been visited by three other players after they have been frozen, they will become unfrozen and resume normal functions.\n**Pleistocene** — Deal an Unstoppable attack to the cryogenically frozen player, roleblock all of their visitors, then coldsnap.");

		e.addField("Attributes:", "- Roleblock immune.\n- Only one person may be cryogenically frozen at any point in time. You may choose to unfreeze a cryogenically frozen at any point in time, and it will be available for use the next night. This will reset the number of times the cryogenically frozen player is visited.\n- Abilities targeting cryogenically frozen players will fail, but the visit will still process.");
		
		e.addField("Goal:", factions.Everfrost.goal);
	});

	register_role(["collector", "1740"], "Neutral", "Collector", {subCat: "Other"}, (e) =>
	{
		e.setDescription("Post 1740");

		e.addField("Alignment", "Neutral Other", true);
		e.addField("Attack", "Basic (Powerful)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use 1 of your weapons to attack someone.\n\n**Ritual Knife** -  Changes your faction to the target if they die.\n**Knuckleduster** - Roleblocks target.\n**Longsword** - Rampaging.\n**Crossbow** - Astral.\n**Dagger** - Higher priority.\n**Sai** - Gain Basic defense this night.\n**Greatsword** - Unstoppable attack, you are RBed next night.\n**Baseball Bat** - Target will be redirected to someone random.\n**Spiked Shield** - Attack all your visitors.\n**Grappling Hook** - Transport you and your target.\n**Frying Pan** - Roleblocks Target and their visitors next night.\n**Axe** - Powerful attack, but target is cleaned.\n**Shuriken** - Target 4 players, Randomly attack 2 of them.\n**Hidden Blade** - Day action.\n**Ghostly Mace** - +2 votes in the next day if target dies.\n**Scalpel** - Cleans target, but you learn their role.\n**Pen** - Choose to change target's will and revealed role.\n**Replica** - Repeat last effect, cannot be Ritual knife.");

		e.addField("Attributes:", "- You must use Ritual Knife before any abilities.\n- All abilities have 1 use, except Ritual knife, who can't be used after you change your factong.");
		
		e.addField("Goal:", "Win with the faction you changed into.");
	});

	register_role(["listler", "listier", "lister", "1741"], "Neutral", "Listler", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1741");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Use any ability from any role with a \"list\" of abilities each night (e.g. 724: Shadow of Descent, 231: Blade of a Silver Tongue, Kaori).");

		e.addField("Attributes:", "- You may only copy any given ability once.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["cardinal", "1742"], "Thundercry", "Cardinal", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1742\n*Your final words may not be so final after all.*");

		e.addField("Alignment", "Thundercry Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Choose a dead player that was Striked. You will receive all notifications that they received on the night they died, and you will take their Strike back. Taking a Strike back from a dead player will negate that strike from counting towards your last two attributes.\n- Choose an alive player. If they die tonight, they will perform their all of their night abilities on their attacker (if applicable).\n- Prepare a Strike on a player. Strikes are announced the following morning.");

		e.addField("Attributes:", "- If one or more Striked players are alive, you will learn the identity of your target’s attacker for your second ability.\n- If two or more Striked players are alive, gain Basic defense.\n- If any Striked players have died, you will receive the logs of the previous night’s dead chat at the start of the day.\n- If two or more Striked players have died, all dead Thundercry may communicate in the Thundercry chat.");
		
		e.addField("Goal:", factions.Thundercry.goal);
	});

	register_role(["spire_watcher", "spirewatcher", "spire", "watcher", "sw", "1743"], "Town", "Spire Watcher", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1743\n*Blind ascetic who has come to \"evaluate\" the town.*");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Cause a player to enter the Wrath stance. All attacks they deal are upgraded by one attack stage. If this increases their attack from None to Basic, they are able to make an attack instead of using their night ability. Their defence is also set to Vulnerable.\n- Cause a player to enter the Calm stance. When they exit Calm, they may make an additional action the following day/night.");

		e.addField("Attributes:", "- Your abilities resolve after every other night action.\n- Players will know what stance they are in.\n- You may multitask, but you cannot target the same player with both abilities on the same night.\n- You may target yourself.\n- When you die, all stances are cleared (Calm is triggered from this).");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["solarwind", "1744"], "Thundercry", "Solarwind", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1744");

		e.addField("Alignment", "Thundercry Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose to disrupt a Striked player, stealing their night feedback messages and giving them an ability fail message.\n- Prepare a Strike on a player. Strikes are announced the following morning.");

		e.addField("Attributes:", "- If two or more Striked players are alive, gain Basic defense.\n- If two or more Striked players are alive, you may additionally give them any message you choose at the end of the night.");
		
		e.addField("Goal:", factions.Thundercry.goal);
	});

	register_role(["flamedrift", "1745"], "Underworld", "Flamedrift", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1745");

		e.addField("Alignment", "Underworld Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Each night, choose one:\n> - Redirect a player with a Fire Mark to another player with a Fire Mark.\n> - Cause all visits against a player with a Fire Mark to fail.\n> - Transport two players with Fire Marks.\n**Red Pillow** — Cause all non-Underworld players' night abilities to not resolve tonight. You may only use this ability once each game.");

		e.addField("Attributes:", "- Roleblock Immune\n- You may only choose each mode up to twice.\n- Whenever a player is doused by anything, they gain a Fire Mark and you learn their name.");
		
		e.addField("Goal:", factions.Underworld.goal);
	});

	register_role(["thwomp", "1746"], "Koopa", "Flamedrift", {subCat: "All-Rounder"}, (e) =>
	{
		e.setDescription("Post 1746\n*I wonder if this one's gonna be a jebaiter...*");

		e.addField("Alignment", "Koopa All-Rounder", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Position yourself over a player's house, preparing to attack. Your target will be informed of such. After slamming down, you must reposition yourself.\n- Slam down, crushing and roleblocking them, their visitors and their neighbours (dead players are taken into account). If a player has been crushed before, you will instead attack them.");

		e.addField("Attributes:", "- Roleblock immune.\n- Koopa members are immune to being crushed, although you still can target them.\n- When slamming down, you cannot be affected negatively by your target in anyway, including dying.\n- You may only use one ability per night.\n- If a player dies whilst you are positioned over their house, you must reposition before slamming down.");
		
		e.addField("Goal:", factions.Koopa.goal);
	});

	register_role(["indigo", "1747"], "Neutral", "Indigo", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1747\n*Blazing wanderer. Rumours run rampant of a connection to a demon.*");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Summon a blinding pillar of energy, rampage attacking a player. If you kill a town member, your attack level is increased by one stage and you have control over an extra anonymous vote the following day (majority is increased)\n- Build your pyre, letting you choose an additional target when next attacking. This can stack if this ability is used multiple nights in a row. ");

		e.addField("Attributes:", "- Your sub-abilities are used at day to make that your night ability for this night only. 1 use per.");

		e.addField("Sub Abilities:", "- Once you choose to build your pyre, you must use one of your abilities the following night. If no action is chosen, it is randomly decided.\n- If the last town member has died and you have not fulfilled your second goal, the game will not end.");
		
		e.addField("Goal:", factions.Town.goal + " (Town goal) OR attack 5 players in one night and live to see the end of the game.");
	});

	register_role(["assarii", "ass", "1748"], "Town", "Assarii", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 1748\n*Bronze-winged colossus. It seems a wonder that he doesn't topple over from the weight of them.*");

		e.addField("Alignment", "Unique Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Vulnerable", true);

		e.addField("Abilities:", "- Stand guard outside a player's house, redirecting all their visitors to yourself.\n- Draw energy from malice in a player. If they would show up as suspicious, you gain one basic autovest.\n- Cast away your protection for a player, losing two basic autovests in order to invincibly heal them, purge them and give them one basic autovest.");

		e.addField("Attributes:", "- You start with one basic autovest that blocks one attack.\n- If you die, any autovests you granted will be removed.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["werehydra", "hydra", "wh", "1749"], "Were", "WereHydra", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1749");

		e.addField("Alignment", "Unique Were Killing", true);
		e.addField("Attack", "Unstoppable (Variable)", true);
		e.addField("Defense", "Basic/Overprotective", true);

		e.addField("Abilities:", "- During a Full Moon, attack a player.\n- During a New Moon, check a player to learn if they can threaten you or not.");

		e.addField("Attributes:", "- Overprotective Defense in Full Moon nights.\n- Basic Defense and Detection Immunity in New Moon nights.\n- Poisons, Plagues, and Ignitions while being Doused will bypass your defense.\n- Each attack against you in a Full Moon night will cut off one of your heads, reducing your attack. If your attack is reduced to None, you will die, and only one attacker will be given credit fot the kill.\n- Your heads and attack level are fully regrown after the end of each night.\n- A playee can threaten you as long as they are capable of one of the following: Poisoning, Plagueing, Dousing, Igniting, or using three or more attacks on a single target in a single night.");

		e.addField("Hunting Moon Enhancement: Three-Pronged Chomp", "You will also attack up to 2 of your target's visitors. If there are less than 2 visitors to attack, leftover attacks will go to your target instead.");
		
		e.addField("Goal:", factions.Were.goal);
	});

	register_role(["self-defense_survivor", "self_defense_survivor", "selfdefensesurvivor", "sds", "1750"], "Neutral", "Self-Defense Survivor", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 1750");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "Basic (Variable)", true);
		e.addField("Defense", "None (Variable)", true);

		e.addField("Abilities:", "- Attack a player at night.\n- Switch out one or both of your items during the day.");

		e.addField("Attributes:", "- You start with the Bandage and Stick equipped.\n- You may reequip items multiple times.\n- Having both the Torn Notebook and Cloudy Glasses allows you to only take a maximum of one attack per night. This will always be the lowest valued attack.");

		e.addField("Weapons:", "- Stick: Basic attack. Also roleblocks any animal-type role on attack. (if it was dogs only it would be way too weak)\n- Toy Knife: None attack. Instead, the threat of being stabbed roleblocks players.\n- Tough Glove: Basic attack. Deals 4 attacks at once.\n- Ballet Shoes: Powerful attack. Always processed before everything else.\n- Torn Notebook: Basic attack. You can only take a max of two attacks per night (the lowest value attacks are processed first, all other attacks are automatically blocked and will fail).\n- Frying Pan: Powerful attack. If your target survives, they cannot perform an action tomorrow.\n- Gun: Unstoppable attack.");

		e.addField("Armor:", "- Bandage: No defense. You cannot be poisoned or bled while having it.\n- Faded Ribbon: No defense. Negates the first attack dealt towards you.\n- Manly Bandana: Basic defense. You also will learn everyone who visits you.\n- Old Tutu: Basic defense. The first person to visit you will be redirected to the next player on the player list.\n- Cloudy Glasses: Basic defense. You can only take a max of two attacks per night (the lowest value attacks are processed first, all other attacks are automatically blocked and will fail).\n- Stained Apron: Basic defense. Additionally, if you attack a Protective role, you won't attack them, and instead redirect them to you, and you will be notified of this.\n- Cowboy Hat: No defense. Increase your attack value by one.");
		
		e.addField("Goal:", "Survive to the end of the game.");
	});
};
