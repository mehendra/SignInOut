import { IRepositoryDomainModule, IserviceRepository } from './types';
import { PeopleRpository, IPeopleRpository } from './../repository/PeopleRepository';
import { CardRepository, ICardRepository } from './../repository/CardRepository';
import { PeopleService, IPeopleService } from '../services/PeopleService';


const EmptyRepositoryDomainModule: IRepositoryDomainModule = {
	cardRepository: () => null as ICardRepository,
	peopleRpository: () => null as IPeopleRpository
}

const EmptyServiceDomainModule: IserviceRepository = {
	peopleService: (EmptyRepositoryDomainModule) => null as IPeopleService
};


export {
	EmptyRepositoryDomainModule,
	EmptyServiceDomainModule
};
