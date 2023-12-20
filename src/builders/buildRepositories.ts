import dedent from "dedent";
import constants from "../constants";
import { github } from "../api";
import type { RepositoryData } from "../typings/global";

export default async function buildRepositories(repositories: Array<string>) : Promise<string> {
	console.log("\t> Building repositories...");
	const repositoryElements: string[] = [];
	const requests: (Promise<RepositoryData>)[] = [];

	for (const repositoryName of repositories) {
		requests.push(github.fetchRepository(constants.OWNER, repositoryName));
	}

	return Promise.all(requests).then(
		(responses: RepositoryData[]) => responses.forEach((repository: RepositoryData) : void => {
			repositoryElements.push(dedent`
			<li>
			<a href="${repository.html_url}" target="_blank" rel="noopener noreferrer">
			${repository.name}
			[${repository.stargazers_count} ⭐ / ${repository.forks_count} 🍴]
			</a>
			_> ${repository.description}
			</li>
		`);
		})
	).then(() : string => dedent`
		<ul>
		${repositoryElements.join("")}
		</ul>
	`);
}