import { IRepositoryDomainModule } from './../../ioc/types';
import { PeopleService } from './../PeopleService';
import * as sinon from 'sinon';
import { expect } from 'chai';
import 'mocha';
import { RepositoryDomainModule, IserviceRepository } from '../../ioc/types';
import { EmptyServiceDomainModule, EmptyRepositoryDomainModule } from '../../ioc/emptyTypes';
import { IPeopleService } from '../PeopleService';

const people = [
	{
		name: "Mehendra Munasinghe",
		id: "wewewewe",
		cardNumber: "124233",
		orgId: "555422"
	},
	{
		name: "Jay De Silva",
		id: "wewewewe",
		cardNumber: "233434",
		orgId: "555422"
	}
]

const SpyDeps: IRepositoryDomainModule = EmptyRepositoryDomainModule;


describe('When people service is invoked and failes to find records', () => {
	it('Should pass the correct parameter and return value should be null', () => {
		queryPeopleService(null, null);
	});
});

describe('When people service is invoked and get back records', () => {
	it('Should pass the correct parameter and return value should be same as passed in value', () => {
		queryPeopleService(people[0], { cardHolderId: 1 });
	});
});



describe('When card number is too short', () => {
	it('Should not make any service calls', () => {
		let findByCardNumberMethod = sinon.stub().returns(null);
		let findCardHolderMethod = sinon.stub().returns(null);

		let testee = updateSpyDepsAndGetPeopleService(findByCardNumberMethod, findCardHolderMethod);
		let result = testee.getPersonByCardId('23442');

		expect(findByCardNumberMethod.notCalled).to.be.true;
		expect(findCardHolderMethod.notCalled).to.be.true;
	});
});

function updateSpyDepsAndGetPeopleService(findByCardNumberMethod: any, findCardHolderMethod: any): IPeopleService {
	SpyDeps.peopleRpository = () => {
		return {
			FindPersonByCardNumber: findByCardNumberMethod,
		} as any;
	};

	SpyDeps.cardRepository = () => {
		return {
			FindCardHolder: findCardHolderMethod,
		} as any;
	};

	return new PeopleService(SpyDeps);
}

function queryPeopleService(personInfo: any, cardHolderInfo: any) {
	let findByCardNumberMethod = sinon.stub().returns(personInfo);
	let findCardHolderMethod = sinon.stub().returns(cardHolderInfo);

	let testee = updateSpyDepsAndGetPeopleService(findByCardNumberMethod, findCardHolderMethod);


	let result = testee.getPersonByCardId('4584534534');

	expect(findCardHolderMethod.getCall(0).args[0]).to.be.eq('4584534534');// always should call card holder
	if (cardHolderInfo == null) {
		expect(findByCardNumberMethod.notCalled).to.be.true; // make sure that findByCardNumberMethod not getting called if the card holder not found
	}
	else {
		expect(findByCardNumberMethod.getCall(0).args[0]).to.be.eq(cardHolderInfo.cardHolderId);
	}
	expect(result).to.be.eq(personInfo);
	findByCardNumberMethod.reset();
	findCardHolderMethod.reset();
}
