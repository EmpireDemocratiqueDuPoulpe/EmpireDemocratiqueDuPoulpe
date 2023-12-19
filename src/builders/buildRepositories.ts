import constants from "../constants";
import { github } from "../api";
import type { RepositoryData } from "../typings/global";

export default async function buildRepositories(repositories: Array<string>) : Promise<string> {
	const repositoryElements: string[] = [];

	for await (const repositoryName of repositories) {
		const repository: RepositoryData = await github.fetchRepository(constants.OWNER, repositoryName);
		repositoryElements.push(`
			<li>
				<a href="${repository.html_url}" target="_blank" rel="noopener noreferrer">${repository.name}</a>
				[${repository.stargazers_count} ⭐ / ${repository.forks_count} 🍴]
				_> ${repository.description}
			</li>
		`);
	}

	return `
		<ul>
			${repositoryElements.join("")}
		</ul>
	`;
}