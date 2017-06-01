import { cardHolder } from './../../Models/cardHolder.d';
import { IRepositoryDomainModule } from './../ioc/types';
import { IPeopleRpository } from './../repository/PeopleRepository';
import { ICardRepository } from './../repository/CardRepository';
import { person } from './../Models/person.d';


export interface IPeopleService {
	getPersonByCardId(cardId: string): person;
	getPerson(personId: string): person;
}

export class PeopleService implements IPeopleService {

	cardRepo: ICardRepository;
	peopleRepo: IPeopleRpository;

	constructor(repositoryDomainModule: IRepositoryDomainModule) {
		this.cardRepo = repositoryDomainModule.cardRepository();
		this.peopleRepo = repositoryDomainModule.peopleRpository();
	}

	public getPerson(personId: string): person {
		if (personId != null) {
			return this.peopleRepo.FindPersonByCardNumber(personId);
		}
		return null;
	}

	public getPersonByCardId(cardId: string): person {

		let personToReturn: person = null;

		if (cardId != null && cardId.length > 5) {
			let cardHolder = this.cardRepo.FindCardHolder(cardId);

			if (cardHolder != null) {
				personToReturn = this.getPerson(cardHolder.cardHolderId);
			}
		}
		return personToReturn;
	}
}
