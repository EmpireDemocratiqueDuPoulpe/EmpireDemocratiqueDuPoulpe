import fsPromises from "fs/promises";

export default {
	OWNER: "EmpireDemocratiqueDuPoulpe",
	WEBSITE_URL: "https://empiredemocratiquedupoulpe.github.io",
	WEBSITE_LOGO: await fsPromises.readFile("../assets/logo/website_logo.jpg", { encoding: "base64" })
};