import Citizen from './citizen';

let resident1 = new Citizen('Henry', 123456);
resident1.addAddress('123 Main St');

console.log(resident1);

resident1.getDetails();
