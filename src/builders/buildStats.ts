import dedent from "dedent";
import constants from "../constants";
import type { Options } from "./buildStats.types";

export default function buildStats({
	lightTheme,
	darkTheme,
	hide,
	show,
	showIcons = true,
	hideRank,
	locale = "en",
	numberFormat = "short"
}: Options) : string {
	console.log("\t> Building stats...");
	let params: string = `username=${constants.OWNER}&show_icons=${showIcons}&locale=${locale}&number_format=${numberFormat}`;

	if (hide) { params += `&hide=${hide.join(",")}`; }
	if (show) { params += `&show=${show.join(",")}`; }

	if (hideRank) { params += "&hide_rank=true"; }

	return dedent`
		[![${constants.OWNER}'s GitHub stats](https://github-readme-stats.vercel.app/api?${params}&theme=${lightTheme}#gh-light-mode-only)](https://github.com/${constants.OWNER})
		[![${constants.OWNER}'s GitHub stats](https://github-readme-stats.vercel.app/api?${params}&theme=${darkTheme}#gh-dark-mode-only)](https://github.com/${constants.OWNER})
	`;
}