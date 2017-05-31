import { PeopleService } from '../PeopleService';
import { expect } from 'chai';
import 'mocha';
import { RepositoryDomainModule } from '../../ioc/types';

describe('Hello function', () => {
	it('should return hello world', () => {
		let result = 'Hello World!';
		expect(result).to.equal('Hello World!');
	});
});
