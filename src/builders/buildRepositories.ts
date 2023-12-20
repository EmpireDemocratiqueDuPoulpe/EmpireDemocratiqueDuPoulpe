import dedent from "dedent";
import constants from "../constants";
import { github } from "../api";
import type { RepositoryData } from "../typings/global";
import type { Options } from "./buildRepositories.types";

export default async function buildRepositories({ filterBy }: Options = {}) : Promise<string> {
	console.log("\t> Building repositories...");
	let repositories: RepositoryData[] = await github.fetchAllRepositoriesOf(constants.OWNER);

	if (filterBy) {
		repositories = repositories.filter((repository: RepositoryData) : boolean => {
			if (filterBy.topics) {
				return repository.topics.some((topic: string) => filterBy.topics!.includes(topic));
			}

			return true;
		});
	}

	const repositoryElements: string[] = [];

	for (const repository of repositories) {
		repositoryElements.push(dedent`
			<li>
			<b><a href="${repository.html_url}" target="_blank" rel="noopener noreferrer">
			${repository.name}
			[${repository.stargazers_count} ⭐ / ${repository.forks_count} 🍴]
			</a>
			_></b> ${repository.description}
			</li>
		`);
	}

	return dedent`
		<ul>
		${repositoryElements.join("")}
		</ul>
	`;
}