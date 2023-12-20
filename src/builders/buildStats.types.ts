export type Options = {
	lightTheme: string
	darkTheme: string
	hide?: ("stars" | "commits" | "prs" | "issues" | "contribs")[]
	show?: ("reviews" | "discussions_started" | "discussions_answered" | "prs_merged" | "prs_merged_percentage")[]
	showIcons?: boolean
	hideRank?: boolean
	locale?: "cn" | "zh-tw" | "ar" | "cs" | "de" | "en" | "bn" | "es" | "fr" | "hu" | "it" | "ja" | "kr" | "nl" | "pt-pt" |
		"pt-br" | "np" | "el" | "ru" | "uk-ua" | "id" | "ml" | "my" | "sk" | "tr" | "pl" | "uz" | "vi" | "se"
	numberFormat?: "short" | "long"
};