import constants from "../constants";

export default function buildBadges() : string {
	console.log("\t> Building badges...");
	const badges: string[] = [];

	for (const badge of constants.BADGES.list) {
		badges.push(
			`[![${badge.text}](https://img.shields.io/badge/${badge.text}-${badge.colors.background}?style=${constants.BADGES.theme}&labelColor=${badge.colors.foreground}&logoColor=${badge.colors.background}&logo=${badge.logo})](${encodeURIComponent(badge.uri)})`
		);
	}


	return badges.join("\n");
}