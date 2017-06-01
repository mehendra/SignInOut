import { PeopleRpository } from './repository/PeopleRepository';
import { sayHello } from "./greet";
import { PeopleService, IPeopleService } from './services/PeopleService';
import { CardRepository } from './repository/CardRepository';
import { ServiceDomainModule } from './ioc/types';



//console.log('ggggg');

let blah: IPeopleService;
//blah = ServiceDomainModule().peopleService();


console.log(sayHello("TypeScript"));
console.log(blah.getPersonByCardId('ddd'));
//console.log(peopleService.GetPerson('ddd'));
