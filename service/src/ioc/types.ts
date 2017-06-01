import { IPeopleService } from './../services/PeopleService';
import { PeopleRpository, IPeopleRpository } from './../repository/PeopleRepository';
import { CardRepository, ICardRepository } from './../repository/CardRepository';
import { PeopleService } from '../services/PeopleService';

export interface IserviceRepository {
	peopleService: (repositoryDomainModule: IRepositoryDomainModule) => IPeopleService;
}

export interface IRepositoryDomainModule {
	cardRepository: () => ICardRepository,
	peopleRpository: () => IPeopleRpository
}

export function RepositoryDomainModule(): IRepositoryDomainModule {
	return {
		cardRepository: () => new CardRepository(),
		peopleRpository: () => new PeopleRpository()
	}
}

export function ServiceDomainModule(): IserviceRepository {
	return {
		peopleService: () => new PeopleService(RepositoryDomainModule())
	};
};
