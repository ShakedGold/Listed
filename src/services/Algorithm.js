/**
 * This service contains a collection of Algorithms that are usefull.
 * @module
 */

/**
 * Searches through the options for the term and returns a filtered and sorted list of options using Rank.
 * @author ShakedGold <shakedgold@listed.com>
 * @param {string} term the partial term to search for (e.g. "abc")
 * @param {string[]} options the options to search through (e.g. ["abcdef", "def", "ghi"])
 * @param {boolean} dontUseFilter if true, the filter will not be used, and all options will be returned
 * @return {string[]} the options sorted by rank (e.g. ["abcdef", "ghi", "def"])
 * @example Search("de", ["def", "abcdef", "ghi"]) -> ["def", "abcdef"];
 */
export function Search(term, options, dontUseFilter = false) {
	const bias = 0.5; // 0.5 is the default value
	// functions to be used in the filter and sort
	const rankBiasFunction = (term, option) => Rank(term, option) / term.length;
	const sortCompareFunction = (optionA, optionB) =>
		Rank(term, optionB) - Rank(term, optionA);
	return options
		.filter((option) => dontUseFilter || rankBiasFunction(term, option) >= bias)
		.sort((optionA, optionB) => sortCompareFunction(optionA, optionB));
}

/**
 * Ranks the term in the option by counting the number of letters in the term that are in the option not depending on the case.
 * @author ShakedGold <shakedgold@listed.com>
 * @param {string} term the partial term to search for (e.g. "abc")
 * @param {string} option the option to search through (e.g. "AbcDef")
 * @return {number} the rank of the term in the option (e.g. 3 for "abc" in "abcdef")
 */
export function Rank(term, option) {
	let rank = 0;
	[...term].forEach((letter) => {
		if (option.toLowerCase().includes(letter.toLowerCase())) {
			rank++;
		}
	});
	return rank;
}
