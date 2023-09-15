import { Board } from "./Board";
import { Card } from "./Card";

class Trello {
	apiKey: string;
	token: string;
	boards: Board[];

	constructor(apiKey: string, token: string) {
		this.apiKey = apiKey;
		this.token = token;
	}

	addCard(board: Board, card: Card) {
		board.addCard(card);
	}
}