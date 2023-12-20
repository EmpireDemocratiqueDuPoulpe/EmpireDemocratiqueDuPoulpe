import path from "path";
import { convertToBase64URI } from "./utils/images";

export default {
	FILE_PATH: "../README.md",
	OWNER: "EmpireDemocratiqueDuPoulpe",
	BADGES: {
		theme: "for-the-badge",
		list: [
			{
				text: "Website",
				logo: convertToBase64URI(path.resolve(__dirname, "../assets/logos/website_logo.png")),
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
				logo: convertToBase64URI(path.resolve(__dirname, "../assets/icons/e-mail.png")),
				colors: { background: "D66049", foreground: "55261D" },
				uri: "mailto:alexislecomte.pro@protonmail.com"
			}
		]
	}
};