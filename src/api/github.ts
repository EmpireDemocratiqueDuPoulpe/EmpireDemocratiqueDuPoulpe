import { fetch, Response } from "undici";
import { FetchFailed } from "../exceptions";
import type { RepositoryData } from "../typings/global";

async function fetchRepository(owner: string, repositoryName: string) : Promise<RepositoryData> {
	const uri: string = `https://api.github.com/repos/${owner}/${repositoryName}`;
	console.log(`Sending request to "${uri}"...`);

	const response: Response = await fetch(uri, { method: "GET" });
	console.log(`  -> Response: ${response.status}`);

	if (!response.ok) {
		const error: string = await response.text();
		throw new FetchFailed(uri, error);
	}

	return await response.json() as RepositoryData;
}

export default {
	fetchRepository
};