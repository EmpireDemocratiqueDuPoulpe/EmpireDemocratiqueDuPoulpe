import { fetch, Response } from "undici";
import { FetchFailed } from "../exceptions";
import type { RepositoryData } from "../typings/global";

async function fetchAllRepositoriesOf(owner: string, page: number = 1) : Promise<RepositoryData[]> {
	const repoPerPage: number = 100;
	const uri: string = `https://api.github.com/users/${owner}/repos?type=all&sort=created&direction=desc&per_page=${repoPerPage}&page=${page}`;
	console.log(`Sending request to "${uri}"...`);

	const response: Response = await fetch(uri, { method: "GET" });
	console.log(`  -> Response: ${response.status}`);

	if (!response.ok) {
		const error: string = await response.text();
		throw new FetchFailed(uri, error);
	}

	const repositories: RepositoryData[] = await response.json() as RepositoryData[];

	if (repositories.length === repoPerPage) {
		repositories.push(...await fetchAllRepositoriesOf(owner, page + 1));
	}

	return repositories;
}

export default {
	fetchAllRepositoriesOf
};