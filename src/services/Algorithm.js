export function Search(term, options) {
	return options
		.filter((option) => term === "" || Rank(term, option) / term.length > 0.5)
		.sort((a, b) => Rank(term, b) - Rank(term, a));
}

export function Rank(term, option) {
	let rank = 0;
	for (let i = 0; i < term.length; i++) {
		if (option.toLowerCase().includes(term[i].toLowerCase())) {
			rank++;
		}
	}
	return rank;
}
