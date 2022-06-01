/*
Format:

register_role(["role_cmd_name", "other_role_cmd_name", "###"], "Alignment", "Actual Role Name", (e) =>
{
	e.setDescription("Post ###");

	e.addField("Alignment", "Alignment Subalignment", true);
	e.addField("Attack", "None/Basic/Whatever", true);
	e.addField("Defense", "Powerful/Invincible/Whatever", true);

	e.addField("Abilities:", "- Ability 1\n- Ability 2\n - etc...");

	e.addField("Attributes:", "- Attribute 1\n- Attribute 2\n- etc...");

	e.addField("Goal:", "Goal here.");
});

Other Notes:

- If a role is Unique, put it with its alignment (e.g. "Unique Town Killing")

- If a role has additional immunities under the listed attack/defense, put those immunities as additional attributes.

- If a role has " within part of its description, you can use \" so that the bot can use the " character without breaking the code. (e.g. "a fake cause of \"death\" (ww, sk, etc).")

- If a role doesn't list its attack and defense stats, try to come up with them based off of the listed abilities and attributes. If even those don't specify anything, assume basic for any ability that provides attack or defense, or "None" if a role mentions neither.

- If a role only has Abilities or Attributes, but not the other, then just delete that role's e.addField() for whichever one would go unused.

- If a role uses or comes with an image, you can use e.setImage("URL");

- If a role mentions a specific channel on the Discord Server, use the format "<#970046125065265202>". That example will mention the "#roles" channel. You need to enable Discord Developer Mode in your settings to be able to copy channel IDs.

- If a role doesn't fit the server's rules, you may leave a note in its description that it cannot be rolled, and just cut out every other part since nothing else will be needed.

- If a role defines a custom faction that only it uses, feel free to put it in the "Other" category.

- If a role can roll in any faction's slot, you may use the "Any" category.
*/

module.exports = (g) =>
{
	const {register_role} = g;

	register_role(["creepy_girl", "creepygirl", "651"], "Neutral", "Creepy Girl", (e) =>
	{
		e.setDescription("Post 651");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Give someone your doll on night one.\n- Force your doll onto another player at night.\n- Choose to roleblock the player with your doll at night.");

		e.addField("Attributes:", "- A player who possesses your doll may choose to give the doll to another player during the night.\n- Forcing your doll onto another player will override the player choosing to give their doll to another player. You may do this once.\n- When you roleblock the player with your doll, you will also learn their identity. You may do this twice.\n- If the player with your doll is lynched, you will come into possession with the doll again at the beginning of the night and may choose another player to receive the doll.");
		
		e.addField("Goal:", "Have the player in possession of your doll die at night.");
	});
};
