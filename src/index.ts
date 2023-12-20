import { promises as fsPromises } from "fs";
import path from "path";
import { setGlobalDispatcher, Agent } from "undici";
import marked from "marked";
import { JSDOM, DOMWindow } from "jsdom";
import DOMPurify from "dompurify";
import dedent from "dedent";
import { buildBadges, buildRepositories, buildStats } from "./builders";
import constants from "./constants";

// Setup
setGlobalDispatcher(new Agent({ connect: { timeout: 60_000 } }) );

const window: DOMWindow = new JSDOM("").window;
const purify: DOMPurify.DOMPurifyI = DOMPurify(window);
marked.use({ async: true, breaks: false, gfm: true, pedantic: false, silent: false });

async function generateReadme() : Promise<void> {
	console.time("generateReadme::process");
	const absoluteFilePath: string = path.resolve(__dirname, constants.FILE_PATH);
	const fileName: string = path.basename(absoluteFilePath);

	console.log(`Generating ${fileName}...`);

	const markdownText: string = dedent`
		<!--suppress HtmlDeprecatedAttribute -->
		<div align="center">\n
		${constants.DESCRIPTION}
		\n---
		${buildStats({
		lightTheme: "buefy",
		darkTheme: "material-palenight",
		show: ["prs_merged", "prs_merged_percentage"],
		showIcons: true,
		hideRank: true })}
		</div>
		\n---
		## Projects
		<details>\n
		<summary><b>School projects</b></summary>
		<br/>
		Here's the list of the projects I have done during my studies.
		${await buildRepositories({
		filterBy: { topics: ["school-project"] } })}
		</details>
		\n---
		## Contact
		<div align="center">\n
		${buildBadges()}
		</div>
	`;

	const markdown: string = purify.sanitize(await marked.parse(markdownText));
	await fsPromises.writeFile(absoluteFilePath, markdown);

	console.log(`${fileName} file was successfully generated.`);
	console.timeEnd("generateReadme::process");
}

generateReadme().catch((error: unknown) : void => {
	const errorMessage: string = (error instanceof Error) ? `${error.message}\n${error.stack}` : `${error}`;
	throw new Error(`Woopsie, the system is fucked up: ${errorMessage}`);
});