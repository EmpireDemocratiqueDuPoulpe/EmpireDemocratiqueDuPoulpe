import { FetchFailed } from "../exceptions";
import type { RepositoryData } from "../typings/global";

async function fetchRepository(owner: string, repositoryName: string) : Promise<RepositoryData> {
	const uri: string = `https://api.github.com/repos/${owner}/${repositoryName}`;
	const response: Response = await fetch(uri, { method: "GET" });

	if (!response.ok) {
		const error: string = await response.text();
		throw new FetchFailed(uri, error);
	}

	return await response.json();
}

export default {
	fetchRepository
};