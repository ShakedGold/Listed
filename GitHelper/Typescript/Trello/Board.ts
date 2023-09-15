import { Card } from "./Card";
import { RequestMethod, TrelloRequestType } from "./Request";

export class Board {
	id: string;
	name: string;
	cards: Card[];

	constructor(id: string) {
		this.id = id;
	}

	addCard(card: Card) {
		this.cards.push(card);
		const request = new Request(RequestMethod.POST, TrelloRequestType.CARD);
	}
}