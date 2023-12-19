export default class FetchFailed extends Error {
	constructor(uri: string, message: string) {
		super(`Fetch failed of URI [${uri}]: ${message}`);
	}
}