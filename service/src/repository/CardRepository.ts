import { cardHolder } from '../Models/cardHolder.d';

export class CardRepository {
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