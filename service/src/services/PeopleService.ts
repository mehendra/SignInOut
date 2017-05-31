import { IRepositoryDomainModule } from './../ioc/types';
import { PeopleRpository } from './../repository/PeopleRepository';
import { CardRepository } from './../repository/CardRepository';
import { person } from './../Models/person.d';


export interface IPeopleService {
	getPerson(personId: string): person;
}

export class PeopleService implements IPeopleService {
	cardRepo: CardRepository;
	peopleRepo: PeopleRpository;

	constructor(repositoryDomainModule: IRepositoryDomainModule) {
		this.cardRepo = repositoryDomainModule.cardRepository;
		this.peopleRepo = repositoryDomainModule.peopleRpository;
	}

	public getPerson(personId: string): person {
		let person = this.peopleRepo.FindPersonByCardNumber(personId);
		return person;
	}
}
