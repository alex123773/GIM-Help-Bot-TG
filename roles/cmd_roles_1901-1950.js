module.exports = (g) =>
{
	const {register_role, factions} = g;

	register_role(["allosaurus_shepherd", "allosaurusshepherd", "allosaurus", "shepherd", "as", "1901"], "Gatherer", "Allosaurus Shepherd", {subCat: "Green"}, (e) =>
	{
		e.setDescription("Post 1901\n*“The blessings of Gaea alone are no longer enough.”*");

		e.addField("Alignment", "Gatherer Green", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Generate (Green) each night.\n- (Green)(Green)(4): Tonight, all Attack and Defense values of Gatherers become Unstoppable/Invincible, respectively.");

		e.addField("Attributes:", "- While you live, all Gatherers have Roleblock Immunity, including yourself.");
		
		e.addField("Goal:", factions.Gatherer.goal);
	});

	register_role(["ambitious_dragonborn", "ambitiousdragonborn", "ambitious", "dragonborn", "ad", "1902"], "Gatherer", "Ambitious Dragonborn", {subCat: "Green"}, (e) =>
	{
		e.setDescription("Post 1902");

		e.addField("Alignment", "Gatherer Green", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Abilities:", "- Generate (Green) each night.\n- (Green): Attack a player each night.");

		e.addField("Attributes:", "- You begin the game with X Attack and Defense, where X is tier of the existing Gatherer with the highest Attack value.\n- X is 1 if you're the only Gatherer.");
		
		e.addField("Goal:", factions.Gatherer.goal);
	});

	register_role(["mystic_zealot", "mysticzealot", "mystic", "zealot", "mz", "1903"], "Gatherer", "Mystic Zealot", {subCat: "White"}, (e) =>
	{
		e.setDescription("Post 1903\n*Nomad youths aspire to one of two roles in the tribe: priest or warrior. Their secret dream is to become both.*");

		e.addField("Alignment", "Gatherer White", true);
		e.addField("Attack", "Basic (Powerful)", true);
		e.addField("Defense", "Basic (Powerful)", true);

		e.addField("Abilities:", "- Generate (White) each night.\n- (1) Attack a target each night.");

		e.addField("Attributes:", "- As long as seven or more players are dead, your Attack and Defense will each increase by 1 tier.");
		
		e.addField("Goal:", factions.Gatherer.goal);
	});

	register_role(["beloved_beggar", "belovedbeggar", "beloved", "beggar", "bb", "1904", "1904a"], "Gatherer", "Beloved Beggar", {subCat: "White"}, (e) =>
	{
		e.setDescription("Post 1904A\n*Charity is rare on Innistrad, but kindness is always repaid.*");

		e.addField("Alignment", "Gatherer White", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Generate (White) each night.");

		e.addField("Attributes:", "- While dead, another Gatherer may pay (White)(White)(4) to revive you as the 1904B Generous Soul.");
		
		e.addField("Goal:", factions.Gatherer.goal);
	});

	register_role(["generous_soul", "generoussoul", "generous", "soul", "gs", "1904b"], "Gatherer", "Generous Soul", {subCat: "White", cannotRoll: true}, (e) =>
	{
		e.setDescription("Post 1904B\n*As long as someone threatens his allies, the Blessed Sleep can wait.*");

		e.addField("Alignment", "Gatherer White", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Generate (White)(White) and attack a player each night.");
		
		e.addField("Goal:", factions.Gatherer.goal);
	});

	register_role(["makindi_shieldmate", "makindishieldmate", "makindi", "shieldmate", "ms", "1905"], "Gatherer", "Makindi Shieldmate", {subCat: "White"}, (e) =>
	{
		e.setDescription("Post 1905\n*The more who rely on him, the more resolute he becomes.*");

		e.addField("Alignment", "Gatherer White", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Generate (White) each night.\n- (1) Defend target player, redirecting all attackers against them to yourself.");

		e.addField("Attributes:", "- You gain a +1/+1 counter for each Gatherer, including yourself, that exists when the game begins. You gain another whenever a Gatherer is revived by any means.\n- You are unable to use the factional attack until you are the last living Gatherer.");
		
		e.addField("Goal:", factions.Gatherer.goal);
	});

	register_role(["wizened_cenn", "wizenedcenn", "wizened", "cenn", "wc", "1906"], "Gatherer", "Wizened Cenn", {subCat: "White"}, (e) =>
	{
		e.setDescription("Post 1906\n*“Thoughtweft binds us together as one, part of an intricate pattern that would unravel if even one thread came loose.”*");

		e.addField("Alignment", "Gatherer White", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Generate (White) each night.\n- (1) Attack a player each night.\n- (White)(White): Increase the Attack and Defense of all other Gatherers for tonight, to a maximum of Unstoppable/Invincible, respectively.");
		
		e.addField("Goal:", factions.Gatherer.goal);
	});

	register_role(["lilianas_steward", "lilianassteward", "lilianas", "steward", "ls", "1907"], "Gatherer", "Liliana's Steward", {subCat: "Black"}, (e) =>
	{
		e.setDescription("Post 1907");

		e.addField("Alignment", "Gatherer Black", true);
		e.addField("Attack", "None (Unstoppable)", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Generate (Black) each night.\n- Sacrifice yourself to deal an Unstoppable attack to a target player with the highest possible priority.");

		e.addField("Attributes:", "- Nothing can allow you to survive a successful use of your Sacrifice ability.");
		
		e.addField("Goal:", factions.Gatherer.goal);
	});

	register_role(["soul_snuffers", "soulsnuffers", "soul", "snuffers", "ss", "1908"], "Gatherer", "Soul Snuffers", {subCat: "Black"}, (e) =>
	{
		e.setDescription("Post 1908\n*They once sought to unite with the flame of transcendence. Now they seek only to extinguish the lights of others.*");

		e.addField("Alignment", "Gatherer Black", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Generate (Black) each night.\n- (1): Attack a player each night.");

		e.addField("Attributes:", "- At the start of the game, every single player will be given a -1/-1 counter. It will reduce their Attack and Defense by 1 tier, to a minimum of None and Vulnerable respectively. Trying to attack someone, or being attacked, will use up a -1/-1 counter.");
		
		e.addField("Goal:", factions.Gatherer.goal);
	});

	register_role(["sarevok_deathbringer", "sarevokdeathbringer", "sarevok", "deathbringer", "sd", "1909"], "Gatherer", "Sarevok, Deathbringer", {subCat: "Black"}, (e) =>
	{
		e.setDescription("Post 1909");

		e.addField("Alignment", "Unique Gatherer Black", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Generate (Black) each night.\n- (Black)(1): Attack a player. If they and all Gatherers survive this night, your target will permanently lose defense of a tier equal to your attack. They may be reduced to a minimum of Vulnerable.");
		
		e.addField("Goal:", factions.Gatherer.goal);
	});

	register_role(["saxophone", "sax", "1910"], "Band", "Saxophone", {subCat: "Woodwind"}, (e) =>
	{
		e.setDescription("Post 1910");

		e.addField("Alignment", "Band Woodwind", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Roleblock your target.\n- (Rehearsal) Roleblock all visitors to your target, then Rehearse.\n- (Concert) Roleblock everyone who visits you or your target, then attack all of them in the same way that they would have been attacked in a coldsnap.");

		e.addField("Attributes:", "- **Rehearsal Radius**: 3\n- Roleblock immune.\n- (Concert) Only players you directly roleblock will be attacked.");
		
		e.addField("Goal:", factions.Band.goal);
	});

	register_role(["chorus", "1911"], "Band", "Chorus", {subCat: "Vocal"}, (e) =>
	{
		e.setDescription("Post 1911");

		e.addField("Alignment", "Band Vocal", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Grant a player any immunity.\n- (Rehearsal) Recruit a new singer to the chorus, then rehearse.\n- (Concert) Deal an attack to a player as many times as you have singers.");

		e.addField("Attributes:", "- **Rehearsal Radius**: # of singers\n- Your main ability may be used as many times per night as you have singers. You start with 1, which is yourself.\n- The host has the right to reject any immunities you are trying to grant, such as death immunity.\n- That said, the host may also allow any immunity, such as death immunity, but if that happens, that's their fault, not mine.\n- (Concert) You do not do 4 different attacks, you attack the same person 4 times. This example is if you have 4 singers. If you would die attacking someone, a singer will instead.");
		
		e.addField("Goal:", factions.Band.goal);
	});

	register_role(["frisk", "1912"], "Neutral", "Frisk", {subCat: "Other"}, (e) =>
	{
		e.setDescription("Post 1912");

		e.addField("Alignment", "Neutral Other", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack a player at night.\n- Learn a player's role.\n- At any time, set a SAVE point.\n- At any time, reload a SAVE point. 3 uses. 1 use while dead.");

		e.addField("Pacifist Abilities:", "- Heal a player. If they are killing a player, cause their ability to fail, unless they are killing you.\n- Attempt to SAVE a player. You may select any player at day to be able to SAVE the players they killed, you may select a dead player at night to revive them as long as you have SAVEd their attacker.");

		e.addField("Attributes:", "- Multitask.\n- You have varying LVs up to 20. Killing a player or voting a player who gets lynched that day increases it by 1.\n- Every 4th LV, increase your attack power by 1, up to Modkill.\n- Every 5th LV, increase your defense power by 1, up to Immortal.\n- Every 2nd LV, gain an anonymous vote.\n- SAVE points can be set at any time.\n- Setting a new SAVE point will override the previous one.\n- Reloading a SAVE point will cause the game to go back in time to the phase the SAVE point was set.");

		e.addField("Pacifist Attributes:", "- You enter Pacifist mode after not killing or voting anyone by the beginning of Night 2. Killing or voting will automatically abort Pacifist mode and you cannot reenter it.\n- After SAVing three players (reviving them), you cannot die - your SOUL will refuse to die.\n- SAVing an attacker during the day forbids them from reattacking the person you revived.");

		e.addField("Genocide Attributes:", "- You enter Genocide mode after killing or voting every opportunity that you have by the beginning of Night 2. Failing to kill or vote will automatically abort Genocide mode and you cannot reenter it. You do not have to vote D1. Anonymous votes count, nightfall votes don't.\n- All non-killing abilities against you will fail.\n- Your kills will rampage.");
		
		e.addField("Goal:", "Neutral: Survive to the end of the game.\nPacifist: SAVE three innocent players (good/nb).\nGenocide: Eliminate all other residents until Salem goes empty.");
	});

	register_role(["duelspell", "1913"], "Town", "Duelspell", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1913\n*Immortality is impossible. But, with a little work, you can fucking kill someone.*");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, choose a player to split their life energy into two, allowing them to die. They fucking die. You literally cut their soul in half they're dead.");

		e.addField("Attributes:", "- Split players cannot be given protection, because what the fuck is a Doctor gonna do about soul splitting magic.\n- When split players die, their faction will be revealed. This is because they're dead and when you die your role gets revealed because that's how the game works.\n- After split players die, they may not act at night, because they're dead and, once again, that's how the game works. If they have abilities they can normally use when dead, well, they can cope, because you killed their soul so hard they can't anymore.\n- You may target yourself. Wait, why would you do that?");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["archduke_franz_ferdinand", "archdukefranzferdinand", "archduke", "franz", "ferdinand", "aff", "1914"], "Neutral", "Archduke Franz Ferdinand", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 1914");

		e.addField("Alignment", "Unique Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Hide behind your bodyguards, giving you Invincible Defense for that night. 4 Uses.");

		e.addField("Attributes:", "- You are publicly revealed to be Archduke Franz Ferdinand at the start of the game.\n- Any kill-capable role must see you dead by the end of the game to win, along with their original goal. In the case of roles with factional kills, only the leader of that faction needs to kill you. However, the game will end if they have eliminated all opposing factions before you.\n\n- For flavor text intents and purposes, the game thematically takes place in Belgrade. Good luck.");
		
		e.addField("Goal:", "Survive until the end of the game.");
	});

	register_role(["victim", "1915"], "Town", "Victim", {subCat: "Casual"}, (e) =>
	{
		e.setDescription("Post 1915\n*My body is ready.*");

		e.addField("Alignment", "Town Casual", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Variable", true);

		e.addField("Abilities:", "- At night, choose to redirect every player using an attacking ability to yourself (1 use).");

		e.addField("Attributes:", "- Your defense level on any given night is equal to the number of attacks you received during the night.\n> 0 attacks = Vulnerable\n> 1 attack = Basic\n> 2 attacks = Powerful\n> 3 attacks = Unstoppable\n> 4+ attacks = Overprotective\n- You will gain a charge of any killing ability that you survive.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["blowey_joey", "bloweyjoey", "blowey", "joey", "bj", "1916"], "Koopa", "Blowey Joey", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1916\n*Not the Blosephs!*");

		e.addField("Alignment", "Koopa Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Position yourself outside of a player's house. Anyone who visits that player will be blown into the air and become dizzy causing them to target one of your target's neighbors instead.");

		e.addField("Attributes:", "- You will be notified of the identity and subalignment of all players that you blow into the air.");
		
		e.addField("Goal:", factions.Koopa.goal);
	});

	register_role(["vladimir_lenin", "vladimirlenin", "vladimir", "lenin", "vl", "1917"], "Neutral", "Vladimir Lenin", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1917");

		e.addField("Alignment", "Unique Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Incite a communist rebellion in the town during the night. 1 Use.");

		e.addField("Attributes:", "- Starts with private chats with all \"head\" evil faction roles. If an evil faction has no head, it will be a random member instead.\n- Inciting a communist rebellion requires approval of all \"head\" evil faction roles you are in a chat with, the day after. If they reject the proposition, it does not take up a use.\n- The night after a communist rebellion is approved, all \"Good\" faction players will be equally split between \"Mensheviks\" and \"Bolsheviks\". \"Power\" roles of \"Good\" factions will always be assigned as \"Mensheviks\".\n- \"Mensheviks\" must, along with their original goal, eliminate all \"Bolsheviks\" to win the game, and vice versa.\n- For all intents & purposes of flavor text, the game takes place in Russia. Good luck.");
		
		e.addField("Goal:", "Live to see the Town/Good Factions lose the game.");
	});

	register_role(["sobber", "1918"], "Neutral", "Sobber", {subCat: "Benign"}, (e, chn) =>
	{
		e.setDescription("Post 1918\n*hhhhhHHHHH*");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Sob at a player's house at night.");

		e.addField("Attributes:", "- Your target and anyone that visits them will receive the mp4 attached to this role card.\n- You may sob at your own house at any time. Anyone who visits you will be roleblocked through immunity. They will also receive the mp4 attached to this role card.\n- Anyone who receives the mp4 attached to this role card counts as having heard you sob.\nhttps://cdn.discordapp.com/attachments/970046125065265202/1016204606428164186/sobbing.mp4");
		
		e.addField("Goal:", "Ensure that everyone alive at the end of the game has heard you sob.");
	});

	register_role(["defense_attorney", "defenseattorney", "defense", "attorney", "da", "1919"], "Town", "Defense Attorney", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1919\n*Here to keep people safe from a corrupted legal system.*");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, select a player. You will defend them from the death sentence, meaning that the next time they would be hanged, they are not hanged. Additionally, for the following night after they are successfully defended from the death sentence, you will defend them from incoming attacks, granting them Basic defense.");

		e.addField("Attributes:", "- Only one player can be affected by your ability at a time. If you select a different player while having selected another player previously, the effect wears off of the previous player.\n- The effects of your ability will occur even if you are dead.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["defense_attorney", "defenseattorney", "defense", "attorney", "da", "1920"], "Mafia", "Defense Attorney", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1920\n*Your honor, my client is innocent. My evidence lies here in this briefcase full of money.*");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, select a player. You will defend them from any prison sentences, meaning that if they would be affected by a Jailor-like ability at any point from now on, they are not affected by it. Additionally, you may defend them from anyone attempting to investigate their role by causing their role to appear as though it is a different role of your choice while they are alive, affecting every ability or attribute that returns information based on their role, including public reveals.");

		e.addField("Attributes:", "- Only one player can be affected by your ability at a time. If you select a different player while having selected another player previously, the effect wears off of the previous player.\n- The effects of your ability will occur even if you are dead.");
		
		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["defense_attorney", "defenseattorney", "defense", "attorney", "da", "1921"], "Coven", "Defense Attorney", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1921\n*The best offense is a good defense. No, wait...*");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, select a player. You will defend them from having low defense, meaning their defense level will be permanently upgraded by one level. With the Necronomicon, targeting a player with this ability will also defend them from living a life with imbalanced stats, dealing an attack to them which treats their defense level as the attack level and their attack level as the defense level, unless they are a member of the Coven. The defense gain effect always resolves before the attack effect.");

		e.addField("Attributes:", "- You may target yourself.");
		
		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["defense_attorney", "defenseattorney", "defense", "attorney", "da", "1922"], "Neutral", "Defense Attorney", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1922\n*Don't worry about the legal fees.*");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- At night, select a player. You will defend them from the burden of living by fucking killing them.");

		e.addField("Attributes:", "- As a practitioner of all things defense related, you will ignore the defense of any player you visit, whether innate or granted by an ability or attribute.");
		
		e.addField("Goal:", "Defend all who would oppose you.");
	});

	register_role(["defense_attorney", "defenseattorney", "defense", "attorney", "da", "1923"], "Underworld", "Defense Attorney", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1923");

		e.addField("Alignment", "Underworld Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, select a player. You will defend them from the burden of having to go outside by sending them to the Underworld. This roleblocks them, and oh yeah someone didn't clean up the gasoline leaks whoops they're doused now.");
		
		e.addField("Goal:", factions.Underworld.goal);
	});

	register_role(["defense_attorney", "defenseattorney", "defense", "attorney", "da", "1924"], "Any", "Defense Attorney", (e) =>
	{
		e.setDescription("Post 1924");

		e.addField("Alignment", "Any", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Defend someone from being defended, stopping all Protective roles and other defensive things from defending them tonight. If they're attacking someone, the target's defense will be reduced to none and anything defending them will not defend them.\n- Defend someone, giving them Powerful defense. You can't defend yourself.");

		e.addField("Attributes:", "- You're very defensive, so if someone accuses you, by voting you, you will attack them at the end of the next night, even if you're dead. You're only defensive once throughout the game.\n- You can spawn in any slot that doesn't have an alignment.");
		
		e.addField("Goal:", "Win with the faction you're assigned. If you're Neutral, you must successfully use one of your abilities once, with it actually having an impact on the game.");
	});

	register_role(["defense_attorney", "defenseattorney", "defense", "attorney", "da", "1925"], "Insurgency", "Defense Attorney", {subCat: "Informant"}, (e) =>
	{
		e.setDescription("Post 1925");

		e.addField("Alignment", "Insurgent Informant", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Defend someone from misinformation. They will learn their target's role, you will learn their target and their target's role.\n- Defend someone from the government. If your target is Town, and not Town (Power), give them an Insurgency goal. 1 use, will be used on fail. You are not notified if it fails.");
		
		e.addField("Goal:", factions.Insurgency.goal);
	});

	register_role(["prosecution_attorney", "prosecutionattorney", "prosecution", "attorney", "pa", "1926"], "Town", "Prosecution Attorney", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1926\n*We lived. How's that for you? We're living.*");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Prosecute someone at night denying them the right of privacy. If any Town member attempted to visit your target but failed for any reason, their visit will succeed. Any evil players visiting your target will hear loud legal jargon nearby.\n- Prosecute someone during the day granting them the right to a quick and speedy trial. You will double the number of votes they have received so far today.");

		e.addField("Attributes:", "- Do you like my Phoenix Wright cosplay?");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["defense_attorney", "defenseattorney", "defense", "attorney", "da", "1927"], "Neutral", "Defense Attorney", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1927");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Defend a player from not being British tonight. All of the O's in their rolecard have a U placed after them, and all the S's are replaced with C's. All of the R's and T's are removed. The host must interpret their new rolecard.");

		e.addField("Attributes:", "- When you're visited, you will defend a player from not being offered a cup of tea, which is actually poisoned.");
		
		e.addField("Goal:", "See the good faction lose the game, mate.");
	});

	register_role(["defense_lawyer", "defenselawyer", "defense", "lawyer", "dl", "1928", "1919u"], "Unseen", "Defense Lawyer", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1928\nConvert from: Defense Attorney");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Trial (Any): Defend a player from the death penalty. The next (or current) day phase, they gain Lynch immunity. 3 uses.\n- Guard (Night): Defend a player from death. Gives them Powerful defense.");

		e.addField("Attributes:", "- This still shows up with the rest of the Defense Attorney roles in the bot list.");
		
		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["defense_attorney", "defenseattorney", "defense", "attorney", "da", "1929"], "Rock", "Defense Attorney", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1929");

		e.addField("Alignment", "Rock Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, select a player. You will defend them from any sentences, meaning that they can't receive night feedback and they won't hear whispers.");

		e.addField("Attributes:", "- Only one player can be affected by your ability at a time. If you select a different player while having selected another player previously, the effect wears off of the previous player.\n- The effects of your ability will occur even if you are dead.");
		
		e.addField("Goal:", factions.Rock.goal);
	});

	register_role(["prosecution_lawyer", "prosecutionlawyer", "prosecution", "lawyer", "pl", "1930", "1919u"], "Unseen", "Prosecution Lawyer", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1930\n*I have upgraded my audio equipment.*\nConvert from: Prosecution Attorney");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Suspension of the Writ of Habeas Corpus (Night): Choose a player. Their trial will no longer be seen by a neutral judge. You may determine how many votes it takes to lynch this player. This number cannot be less than half of the majority vote nor can it exceed 150% of the majority vote. Nobody else will be notified about this. Their Writ of Habeas Corpus will be reinstituted the following day, and you may no longer suspend their Writ of Habeas Corpus.\n- Bill of Attainder (Day): Choose a player. They will be convicted without a trial. If they receive another vote within the next thirty minutes, they will instantly be lynched. You lose this ability the first time it results in a lynch.");
		
		e.addField("Goal:", factions.Unseen.goal + " Also get the Mastermind some Raising Cane's chicken fingers.");
	});

	register_role(["defense_lawyer", "defenselawyer", "defense", "lawyer", "dl", "1931"], "Neutral", "Defense Lawyer", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1931");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Hearsay a player at night. If they have the most votes at the end of the day, the first person to have voted them and the person that your target voted will be dealt a Powerful Attack the following night.");

		e.addField("Attributes:", "- As long as you received no \"initial\" votes during the previous day (meaning votes that aren't changed from a different target), you actually have Powerful Defense and can hearsay two players instead.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["chieftan", "1932"], "Town", "Chieftan", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 1932");

		e.addField("Alignment", "Unique Town Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Vulnerable", true);

		e.addField("Abilities:", "- Choose someone, and their abilities will be **buffed**. Make sure you know who you're targeting. This could buff a Mafia member's abilities too, or something worse. This could be a double-edged sword, so beware.");

		e.addField("Attributes:", "Roleblock Immune.\n- Voting a player? Become a makeshift mayor, as your vote is worth three people's. To make sure this is still **balanced**, you can't change your vote to anyone besides your original target.\n- Self-targeting isn't available to you.");
		
		e.addField("Goal:", factions.Town.goal + " No difference here. Just your average Town goal.");
	});

	register_role(["defense_attorney", "defenseattorney", "defense", "attorney", "da", "1933"], "Everfrost", "Defense Attorney", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1933\n*Glacial, calculating, cool. It's required of you.*");

		e.addField("Alignment", "Everfrost Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player to defend each night. It is publicly announced that they cannot be lynched the following day because of the Defence Attorney (Everfrost), and all players that target them with an investigative ability will be roleblocked. You may not target the same player twice in a row.\n**Frozen Paperwork** — The following day, the target of the lynch will not die, and they may instead choose a player to be lynched instead of them. You may only use this ability once each game and you can't use it until Night 3.");

		e.addField("Attributes:", "- Roleblock Immune\n- Whenever a player is roleblocked by anything, gain an anonymous vote for the following day. Majority will be increased accordingly. You cannot use those votes on a player that was roleblocked the previous night.");
		
		e.addField("Goal:", factions.Everfrost.goal);
	});

	register_role(["sniffer", "1934"], "Town", "Sniffer", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1934");

		e.addField("Alignment", "Unique Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Investigate a player's house and find a specific plant.\n- Use the plant at another player's house.");

		e.addField("Attributes:", "- The plants come in various types. Depending on whoever your visiting, you'll get a different plant.\n> If they're a Random, Neutral or Townsperson, you'll get a random plant. If you investigate a Neutral or Townsperson twice in a row, you'll always get a different plant from last time.\n> If they're Mafia, Coven, Rocks, Underworld, Plants, Faunae or Florae, you'll get an oak sapling.\n> If they're Everfrost, Biohazards, Horseman, SCP, Coa, Metamorph or X, you'll get a wither rose. \n> If they're Android, Mathematics, Discordian, Sentries, NTF, Pokemon or NETSEC, you'll get a redstone block.\n> If they're Stalkers, Cult, Unseen, Serial Killers, Werewolves, Vampires, Beasts, Pale Moons, Umbraes or Spirits, you'll get a pumpkin.\n> If they're Army, City, Civilization, Crew, Gatherers, Warfleet or Agents, you'll get a hay bale.\n> If they're Insurgency, Band, Toppat, Loyalist or Koopas, you'll get an iron helmet.\n> If they're Angel, Sith, Seven, Creators, Hallow, Last or Partisan, you'll get a dragon egg.");

		e.addField("Attributes (cont.):", "> If they're Thundercry, and Thundercry alone, you'll get a copper rod. \n> If they're any other faction, you'll get a dead bush.\n- The plants also have several effects when you use them on a player's house.\n> Oak Sapling: Heal the player.\n> Wither Rose: Attack the player. That attack is Powerful.\n> Redstone Block: The player can use their ability twice on the next night.\n> Pumpkin: Visitors of that player are scared away.\n> Hay Bale: Whoever that player visits will gain fall damage protection: The next time they're attacked, if it's Basic or Unstoppable, it will be blocked. Lasts for 2 nights. \n> Iron Helmet: The player gains Basic defense for three nights, but their Attack is reduced to none permanently. \n> Dragon Egg: A new Town NPC is made which the host can control.\n> Copper Rod: When you use the copper rod at the player's house, redirect all players you've given a Plant or have investigated beforehand to them. \n> Dead Bush: Roleblock the player.");

		e.addField("Attributes (more.):", "- You are Astral and Roleblock Immune AND you can self-target.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["kl_33", "kl-33", "kl33", "kl", "1935"], "Neutral", "KL-33", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1935");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "**G-19 'Bastion'** — [25mm Grenade Rifle. Semi-/automatic, 15 vertical clip size, 90 drum mag size] (High Explosive) (Shaped Charge) (High Explosive Fragmentation). This deals a Basic attack to any player.\n**ARL-12 'Red Glare'** — [49mm semi-/automatic, unguided rocket launcher. 13 mag size] (High Explosive) (Shaped Charge) (Flechette Anti-Personnel) (High Velocity Boosted Kinetic Penetrator). This deals a Basic attack to any player.\n**M-77 'Annabelle'** — [109 mm MP Missile launcher, can fire unguided, thermal guidance, or manual TOW guidance with particle pointer] (High Explosive) (Shaped Charge) (Flechette Anti-Personnel) (High Explosive Plasma) (Electro Pulse) (High Velocity+warheads above) (High Velocity Boosted Kinetic Penetrator). This deals a Basic attack to any player.");

		e.addField("Abilities (cont.):", "**AGL-7 Mine Launcher** — [42mm hexagonal mines, can be timed, proximity, or detonated manually. 18 mag size] (High Explosive) (High Explosive Fragmentation) (Flechette Anti-Personnel) (High Explosive Plasma) (Electro Pulse). This deals a Basic attack to any player.\n**Anti-Gravity Blaster** — [Blast of gravitons, massively repulsive, initially non-lethal]. This roleblocks any player.\n**M-42 'Fat Man'** — [Launches mini-nukes with a heavy duty spring launcher] (Low Yield ‘Little Boy’, 38 m total annihilation diameter) (Standard Yield, 60 m total annihilation diameter) (High Yield ‘Big Kid’ 93 m total annihilation diameter) (MIRV Shell ‘Tiny Tots’, 20 small warheads in one shell, each warhead has 18 meter total annihilation diameter) (Low, standard, high yield warheads can be either contact detonated or time fused). This deals a Powerful attack to any player.\n**M-48 'Esther'** — [Improved Fat Man, longer range, built-in assisted targeting system]. This deals a Powerful attack to any player.");

		e.addField("Abilities (moar.):", "**AGL-6 Grenade Machine Gun** — [46mm Automatic grenade launcher, two-handed weapon. 53 ammo cap]. This deas a Basic attack to any player.\n**AGL-8 Grenade Minigun** — [25mm multi-barrel heavy weapon, uses same ammo as G-19 'Bastion', 9 rounds/sec RoF. 168 ammo cap]. This deals a Basic attack to any player.");

		e.addField("Attributes (why.):", "**Enhanced Durability** — Your skin is tough. Under the synthetic skin are military grade ballistic composites, RBC, as well as MSC plates to defend against energy weapon attacks. On top of everything are a few layers of Diamene, two layers of graphene, when hit with a sufficient force, quickly hardens into a material harder than diamond, though goes back to normal once the force dissipates. In other words, you have Basic defense.\n**Enhanced Strength** — You can lift up to 700 kg, having very impressive strength for her size due to enhanced robotic servos. So carrying heavy weapons that normally would require power armor to use effectively is child’s play to you. This is completely useless.\n**Enhanced Agility** — You are agile, both due to your size, strength, and movement programming. This does fucking nothing.\n**CQC Master** — You are well versed in CQC, again brought by combat protocols, which you can also use your weight to your advantage, being heavy for your size. I have no idea what CQC is.");

		e.addField("Attributes (stop.):", "**Master Marksman** — You have enhanced targeting computers, which can easily predict the trajectory of projectiles, given wind and air conditions, as well as predict where a target will be when the projectile gets there, as well as compensating for gravity. This comes with quicker reaction times, due to your robotic nature. Predict the trajectory of my cock in your mouth.\n**Enhanced Sight** — You have powerful lens’ within her eyes, which can allow your to zoom in to things, activate a night vision mode, or transfer to thermal optics at will. They also have a safeguard against flashes, as the lens have an auto-tint feature, like how modern welding helmets auto-darken. Roles are numbered posts in the <#970046125065265202> channel in the “Game Related” category of the Grand Idea Mafia (hell) server.");

		e.addField("Attributes (please.):", "**Relay Chip** — You have an implanted ‘Relay Chip’, which allows you to relay, or teleport, to and from Big MT from anywhere, as well as summon weapons, ammo, or more explosives when you wishes, as it is also linked to an armory somewhere in Big MT. The first person to ping me acknowledging that they've read this gets a scroll. This also allows you to teleport elsewhere at will, though you must know where it is, whether it be line of sight, or through coordinates. Two times two is four.\n**Anti-Gravity Mobility Boots** — You are also equipped with ‘Anti-Gravity Mobility Boots’, which allow you to have even more agility, able to temporarily have low G so you can jump higher and glide, or walk up walls by changing the gravity for yourself. Though, the charge of these boots can be quickly depleted if used a lot. My favourite colour is orange.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["pyramid_scheme", "pyramidscheme", "pyramid", "scheme", "ps", "1936"], "Mafia", "Pyramid Scheme", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1936\n**💸 Wouldn’t you like to get rich quick?**");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Indoctrinate a player into the first tier of your pyramid scheme.\n- Control a player part of your pyramid scheme.");

		e.addField("Attributes:", "- Players who are visited  by a player part of your pyramid scheme are forced to join the pyramid scheme one tier down.\n- The following effects are applied to players part of each tier\n> First tier: Given one basic auto-vest\n> Second tier: Given roleblock immunity\n> Third tier: Nothing\n> Fourth tier: Cannot use ability twice in a row\n> Fifth tier: Given vulnerable defence\n> Sixth+ tier: Will be dealt an unstoppable attack at the end of the following night\n- You will know at all times who is in your pyramid scheme and what tier they are a part of.\n- Players will only be informed that they’re involved in the pyramid scheme if they’re in the fourth tier or later.\n- Mafia members cannot become part of the pyramid scheme.\n- You may only use one ability per night.\n- Control immune.");
		
		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["changeling", "1937"], "Neutral", "Changeling", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1937");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Copy an ability of any Unique role each night.\n- Gain an attribute of any Unique role each night.\n- Become another player at night. Anything done to either of you will have a 50% chance to target the other instead until one dies. You may only use this ability once.");

		e.addField("Attributes:", "- This role is all roles, but it doesn't have the mechanics of those roles.\n- For example, if a Consigliere checks it, they'd learn that it's the Edge of Existence, the Nervous Sleeper, the Power of Three, etc. all the way down for every role in the thread, but it doesn't actually have any of the abilities, attributes, or anything else from those roles. A Vigilante shooting it will commit suicide out of guilt, but the Ringmaster can sacrifice it as if it were a member of the Pale Moon. It can't exist with Unique roles, because it is those roles. A Caporegime can copy its abilities, because it's a Mafia role (except like actually only the third one because rule). Wow, Rasen is actually explaining in-depth how one of their fucked up mechanics work for once. Isn't that nice.");
		
		e.addField("Goal:", "Live to see the Town lose the game.");
	});

	register_role(["synthesizer", "synth", "1938"], "Band", "Synthesizer", {subCat: "Digital"}, (e) =>
	{
		e.setDescription("Post 1938");

		e.addField("Alignment", "Band Digital", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use the ability of any Band member's role.\n- (Rehearsal) Select two targets, use the first target's ability on the second, then rehearse.\n- (Concert) Use any Band role's ability, whether it is normal, Rehearsal, or Concert.");

		e.addField("Attributes:", "- **Rehearsal Radius**: 4\n- Your normal ability can only target Band roles that exist in the game, alive or dead.\n- If you are a solo Band member to begin with, 2 random Band roles will be available at your disposal at the beginning of the day for your normal ability.\n- Control and redirect immune.");
		
		e.addField("Goal:", factions.Band.goal);
	});

	register_role(["dementia", "1939"], "Mafia", "Dementia", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1939");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Make someone forget their night feedback, recieveing it 2 nights later.");

		e.addField("Attributes:", "- You may not Multitask.");
		
		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["guitar", "1940"], "Band", "Guitar", {subCat: "String"}, (e) =>
	{
		e.setDescription("Post 1940");

		e.addField("Alignment", "Band String", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Check a player to learn if they are the same subalignment as your previous target.\n- (Rehearsal) Check a player to see if they would win with your previous target, then rehearse.\n- (Concert) Check a player. If they are the same faction as your previous target, attack them.");

		e.addField("Attributes:", "- **Rehearsal Radius**: 3\n- For the normal ability, I mean only subalignment. A Town (Evil) and Coven (Evil) will show as being the same subalignment.\n- You may select a target on D1. If you don't, it's randomized so your ability may function. It will never be a Band member.\n- If your previous target is dead, they stay your previous target. Even if you killed them.");
		
		e.addField("Goal:", factions.Band.goal);
	});

	register_role(["saul_goodman", "saulgoodman", "saul", "goodman", "sg", "1941"], "Town", "Saul Goodman", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 1941\n*Better Call Saul!*");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Once per night, Use an ability from any Law related role. (Defense, Attorney, Lawyer, Law, Prosecutor...)");

		e.addField("Attributes:", "- Cannot use an ability from the same role twice.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["color_guard", "colorguard", "color", "guard", "cg", "1942"], "Band", "Color Guard", {subCat: "Special"}, (e) =>
	{
		e.setDescription("Post 1942");

		e.addField("Alignment", "Band Special", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Dance at a player's house. If they are attacked, the attack will be unable to fail.\n- (Rehearsal) Throw flags in the air, then plant them at someone's house to give any Band member visiting them redirect, control, and roleblock immunity, and prevent their ability from failing, then rehearse.\n- (Concert) Equip a rifle. You can literally just shoot someone.");

		e.addField("Attributes:", "- **Rehearsal Radius**: 2\n- If you are left with no kill-capable Band members, or are solo, your normal ability will also kill.\n- If you use an ability on your target, they will learn that a Color Guard used their ability on them. They will know which. If they die, they will not be notified.");
		
		e.addField("Goal:", factions.Band.goal);
	});

	register_role(["file_manager", "filemanager", "file", "manager", "fm", "1943"], "Loyalist", "File Manager", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1943");

		e.addField("Alignment", "Loyalist Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select 3 players. Learn what slots in the role list the 3 of them combined take up. (You are not told who has which slot).\n- Select a slot in the role list, learn what role is occupying it.");

		e.addField("Attributes:", "- You are unaffected by frames.\n- This may be rerolled for free if the host decides the role list is way too fucking stupid for this role.\n- If the above is true and you kept it, your first ability will instead tell you the alignments. The second ability is unaffected.");
		
		e.addField("Goal:", factions.Loyalist.goal);
	});

	register_role(["koopa_paratroopa", "koopaparatroopa", "koopa", "paratroopa", "kp", "1944"], "Koopa", "Koopa Paratroopa", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 1944");

		e.addField("Alignment", "Koopa Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Carry a Koopa member in the air, Giving immunity to all negative effects and redirecting attacks randomly to their alive neighbors.\n- Annoy a player, Redirecting them to you.");

		e.addField("Attributes:", "- You will lose your defense for the night if you are Roleblocked.\n- Astral attacks ignore your defense.\n- You may not target yourself.");
		
		e.addField("Goal:", factions.Koopa.goal);
	});

	register_role(["harry_s_truman", "harrystruman", "harry", "truman", "hst", "1945"], "Town", "Harry S. Truman", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 1945\n*I never gave anybody hell! I just told the truth and they thought it was hell.*");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "\"Yes\"", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Drop an atomic bomb on the Town. This will eradicate all enemies of the Town in one fell swoop. All Town members and any other players that have achieved their wincon instantly win the game. This ability does not kill anyone except players that are strictly anti-Town.");

		e.addField("Attributes:", "- You may not use your ability until Night 6.");
		
		e.addField("Goal:", "Obliterate the opposition.");
	});

	register_role(["harry_s_truman", "harrystruman", "harry", "truman", "hst", "1946"], "Town", "Harry S. Truman", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 1946\n*I never gave anybody hell! I just told the truth and they thought it was hell.*");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "\"Yes\"", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Drop an atomic bomb on the Town. This will eradicate all enemies of the Town in one fell swoop. All Town members and any other players that have achieved their wincon instantly win the game. This ability does not kill anyone except players that are strictly anti-Town.");

		e.addField("Attributes:", "- You may not use your ability until Night 6.");

		e.addField("Goal:", "Obliterate the opposition.");
	});

	register_role(["axolotl", "axo", "1947"], "Faunae", "Axolotl", {subCat: "Predator"}, (e) =>
	{
		e.setDescription("Post 1947");

		e.addField("Alignment", "Faunae Predator", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Invincible)", true);

		e.addField("Abilities:", "- Draw people to a target’s house, redirecting the target’s two closest living neighbors to target them.");

		e.addField("Attributes:", "- You have Invincible Defense the first Rampage attack that hits you.\n- Redirected players will know they were redirected.\n- ”Two closest neighbors” means the two living players with player numbers closest to your target. They do not have to be on opposite sides of your target.");
		
		e.addField("Goal:", factions.Faunae.goal);
	});

	register_role(["stoneshaker_shaman", "stoneshakershaman", "stoneshaker", "shaman", "ss", "1948"], "Gatherer", "Stoneshaker Shaman", {subCat: "Red"}, (e) =>
	{
		e.setDescription("Post 1948");

		e.addField("Alignment", "Gatherer Red", true);
		e.addField("Attack", "Basic/Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Generate (Red) at night.\n- (1): Attack a player with a Basic Attack during the night.\n- (Red)(2): Force a player to use a night ability for the next two nights. If they do not use an ability, you will automatically hit them with an Astral Powerful Attack.");

		e.addField("Goal:", factions.Gatherer.goal);
	});

	register_role(["something_happened", "somethinghappened", "in_1949", "in1949", "probably", "1949"], "Neutral", "Something Probably Happened In 1949, Probably", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1949");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Come up with an ability based on something that happened in the year 1949. With host approval, you may use that ability.");

		e.addField("Attributes:", "- You have two Basic autovests, because I said so.");
		
		e.addField("Goal:", "Live to see the Town lose the game, probably.");
	});

	register_role(["animal_keeper", "animalkeeper", "animal", "keeper", "ak", "1950"], "Town", "Animal Keeper", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1950");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Give someone an animal every night.");

		e.addField("Attributes:", "- You will know which animal you give your target.");

		e.addField("Animals:", "- Dogs are given to Town members.\n- Siamese cats are given to Mafia members.\n- Black cats are given to Coven members.\n- Killer bunnies are given to Neutral Evils and Neutral Killings.\n- Beavers are given to Rocks and other Neutrals.\n- Lambs are given to Plants.\n- Phoenixes are given to Underworld members.\n- Doves are given to Hallow members.\n- Jaguars are given to Stalkers.\n- Wolves are given to Were members.\n- Tuxedo cats are given to Umbrae.\n- Goats are given to Everfrost members.\n- Elephants are given to Pale Moon members.\n- Squids are given to Sith members.\n- Pigeons are given to Insurgency members.\n- Canaries are given to Loyalists.\n- Spiders are given to SCPs.\n- Eagles are given to Thundercry members.\n- Parrots are given to Crew members.\n- Deer are given to Pokemon.\n- Foxes are given to Foxes.\n- Sheep are given to Cult members.\n- Horses are given to Horsemen.\n- Owls are given to Unseen members.\n- Skunks are given to Biohazard members.\n- Swans are given to Fallen Angels.");

		e.addField("Animals (cont.):", "- Rats are given to Agents.\n- Random animals are given to Random members.\n- Dragons are given to members of the Last.\n- Chipmunks are given to Spirits.\n- Monkeys are given to Mathematics members.\n- Ferrets are given to Sentries.\n- Cows are given to Koopa.\n- Eagles are given to Toppats.\n- Lions are given to Creators.\n- Sharks are given to Warfleet members.\n- Robot dogs are given to Androids.\n- Bees are given to Florae.\n- Rhinos are given to City members.\n- Otters are given to Serial Killers.\n- Hummingbirds are given to Band members.\n- Peacocks are given to members of the Seven.\n- Brushwaggs are given to Gatherers.\n- Koalas are given to Army members.\n- Emus are given to Civilizations.\n- Horses are given to Discordians.\n- Caterpillars are given to Metamorphs.\n- Beasts are given to Beasts.\n- Roosters are given to Partisans.");
		
		e.addField("Goal:", factions.Town.goal);
	});
};
