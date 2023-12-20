import path from "path";
import { convertToBase64URI } from "./utils/images";

const constants = {
	FILE_PATH: "../README.md",
	OWNER: "EmpireDemocratiqueDuPoulpe",
	DESCRIPTION: "Hi.",
	BADGES: {
		theme: "for-the-badge",
		list: [
			{
				text: "Website",
				logo: path.resolve(__dirname, "../assets/logos/website_logo.png"),
				colors: { background: "D66049", foreground: "55261D" },
				uri: "https://empiredemocratiquedupoulpe.github.io"
			},
			{
				text: "LinkedIn",
				logo: "linkedin",
				colors: { background: "0A66C2", foreground: "04284D" },
				uri: "https://www.linkedin.com/in/alexicomte/"
			},
			{
				text: "E--Mail",
				logo: path.resolve(__dirname, "../assets/icons/e-mail.png"),
				colors: { background: "D66049", foreground: "55261D" },
				uri: "mailto:alexislecomte.pro@protonmail.com"
			}
		]
	}
};

export async function initializeConstants() : Promise<void> {
	for (const badge of constants.BADGES.list) {
		if (badge.logo.match(/^([a-zA-Z]:)?(\\[^<>:"/\\|?*]+)+\\?$/)) {
			badge.logo = await convertToBase64URI(badge.logo);
		}
	}
}

export default constants;