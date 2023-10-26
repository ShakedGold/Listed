
/**
 * This service contains a collection of Algorithms that are usefull.
 * @module
 */

/**
 * Searches through the options for the term and returns a filtered and sorted list of options using Rank.
 * @param {string} term - The partial term to search for (e.g. "abc").
 * @param {Array} options - The options to search through (e.g. ["abcdef", "def", "ghi"]).
 * @param {boolean} useFilter - If true, the filter will be used.
 * @returns {Array} The options sorted by rank (e.g. ["abcdef", "ghi", "def"]).
 * @example Search("de", ["def", "abcdef", "ghi"]) -> ["def", "abcdef"];
 * @author ShakedGold <shakedgold@listed.com>
 */
export function Search(term, options, useFilter = true) {
	const bias = 0.5; // 0.5 is the default value
	// functions to be used in the filter and sort
	const rankBiasFunction = (term, option) => Rank(term, option) / term.length;
	const sortCompareFunction = (optionA, optionB) =>
		Rank(term, optionB) - Rank(term, optionA);
	return options
		.filter((option) => !useFilter || rankBiasFunction(term, option) >= bias)
		.sort((optionA, optionB) => sortCompareFunction(optionA, optionB));
}

/**
 * Ranks the term in the option by counting the number of letters in the term that are in the option not depending on the case.
 * @param {string} term - The partial term to search for (e.g. "abc").
 * @param {string} option - The option to search through (e.g. "AbcDef").
 * @returns {number} The rank of the term in the option (e.g. 3 for "abc" in "abcdef").
 * @author ShakedGold <shakedgold@listed.com>
 */
export function Rank(term, option) {
	let rank = 0;
	[...term].forEach((letter) => {
		if (option.toLowerCase().includes(letter.toLowerCase()))
			rank++;
	});
	return rank;
}

export function SplitContent(text, maxChars) {
	const sentences = [];
	const words = text.split(/\s+/); // Split by both spaces and line breaks
	let currentSentence = '';

	for (const word of words) {
		if ((currentSentence + ' ' + word).length <= maxChars) {
			if (currentSentence) {
				currentSentence += ' ' + word;
			} else {
				currentSentence = word;
			}
		} else {
			sentences.push(currentSentence);
			currentSentence = word;
		}
	}

	if (currentSentence) {
		sentences.push(currentSentence);
	}

	return sentences.filter(item => item !== "");
}