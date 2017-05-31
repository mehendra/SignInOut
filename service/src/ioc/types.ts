import { PeopleRpository } from './../repository/PeopleRepository';
import { CardRepository } from './../repository/CardRepository';
import { PeopleService } from '../services/PeopleService';

export interface IserviceRepository {
	peopleService: PeopleService
}

export interface IRepositoryDomainModule {
	cardRepository: CardRepository,
	peopleRpository: PeopleRpository
}

export function RepositoryDomainModule(): IRepositoryDomainModule {
	return {
		cardRepository: new CardRepository(),
		peopleRpository: new PeopleRpository()
	}
}

export function ServiceDomainModule(): IserviceRepository {
	let peopleRepository = RepositoryDomainModule().peopleRpository;
	let cardRepository = RepositoryDomainModule().cardRepository;

	return {
		peopleService: new PeopleService(RepositoryDomainModule())
	};
};
