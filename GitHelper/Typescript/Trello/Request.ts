export enum RequestMethod {
	GET,
	POST,
	PUT,
};
export enum TrelloRequestType {
	BOARD,
	CARD,
	LIST,
};

export class Request {
	method: RequestMethod;
	type: TrelloRequestType;

	constructor(method: RequestMethod, type: TrelloRequestType) {
		this.method = method;
		this.type = type;
	}
}