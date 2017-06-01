import { cardHolder } from '../Models/cardHolder.d';

export interface ICardRepository {
	FindCardHolder(cardNumber: string): cardHolder;
}

export class CardRepository implements ICardRepository {
	constructor() { }

	FindCardHolder(cardNumber: string): cardHolder {
		return {
			cardHolderId: "sdsdsd",
			cardNumber: "sdsdsds",
			dateIssued: new Date(2015, 12, 3),
			versionNumber: 1
		};
	}
}
