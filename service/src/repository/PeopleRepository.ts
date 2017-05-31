import { person } from '../Models/person.d';

export class PeopleRpository {
    constructor() { }
    FindPersonByCardNumber(cardNumber: string): person {
        if (cardNumber = 'a')
            return {
                name: "Mehendra Munasinghe",
                id: "wewewewe",
                cardNumber: "124233",
                orgId: "555422"
            }
        else
            return {
                name: "Nirangi Munasinghe",
                id: "ksfhkl",
                cardNumber: "33333",
                orgId: "555422"
            }
    }
}

export function depes() {
    
}