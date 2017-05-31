import { person } from './../../Models/person.d';


export function getPeople(): person[] {
    var people: Array<person> = new Array<person>();
    people[0] = {
        name: "Mehendra Munasinghe",
        id: "wewewewe",
        cardNumber: "124233",
        orgId: "555422"
    }
    people[1] = {
        name: "Nirangi Munasinghe",
        id: "ksfhkl",
        cardNumber: "33333",
        orgId: "555422"
    }
    return people;
}

export function getPerson(personId: string): person {
    if (personId = 'a')
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