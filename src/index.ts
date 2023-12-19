import fs from "fs";
import markdown from "markdown-it";
import { buildBadges, buildRepositories } from "./builders";
import constants from "./constants";

const markdownProcessor: markdown = markdown({
	html: true,
	breaks: true,
	linkify: true,
	typographer: true,
	quotes: [ "«\xA0", "\xA0»", "‹\xA0", "\xA0›" ]
});

async function generateReadme() : Promise<void> {
	const markdownText: string = `
		<div align="center">
			${buildBadges("for-the-badge", "#D66049", "#FFFFFF")}
			
			---
			
			Hi.
			
			---
			
			[![${constants.OWNER}'s GitHub stats](https://github-readme-stats.vercel.app/api?username=${constants.OWNER}&show=prs_merged,prs_merged_percentage&show_icons=true&theme=buefy&locale=en&number_format=short#gh-light-mode-only)](https://github.com/${constants.OWNER})
			[![${constants.OWNER}'s GitHub stats](https://github-readme-stats.vercel.app/api?username=${constants.OWNER}&show=prs_merged,prs_merged_percentage&show_icons=true&theme=material-palenight&locale=en&number_format=short#gh-dark-mode-only)](https://github.com/${constants.OWNER})
		</div>
	`;
}

generateReadme().catch(console.error);