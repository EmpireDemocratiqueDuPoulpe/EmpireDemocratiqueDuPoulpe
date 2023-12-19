import constants from "../constants";

export default function buildBadges(
	style: "flat" | "flat-square" | "plastic" | "for-the-badge" | "social" = "flat",
	background: `#${string}`,
	foreground: `#${string}`
) : string {
	const colors: { background: string, foreground: string } = {
		background: background.replace("#", ""),
		foreground: foreground.replace("#", "")
	};

	return `
		![Website](https://img.shields.io/website-${colors.background}?style=${style}&labelColor=${colors.foreground}&logoColor=${colors.foreground}&logo=${constants.WEBSITE_LOGO}/${encodeURIComponent(constants.WEBSITE_URL)})
	`;
}