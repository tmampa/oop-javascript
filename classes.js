export default class Vehicle {
  constructor(make, name, engine) {
    this.make = make;
    this.name = name;
    this.engine = engine;
  }

  get getName() {
    return `The name of the vehicle is ${this.name}`;
  }
}

let bike = new Vehicle('BMW', 'R 1250 GS', '1250cc');
let car = new Vehicle('Toyota', 'Corolla', '1.6L');
let truck = new Vehicle('Mercedes-Benz', 'Actros', 'V8');

console.log(bike.getName)
console.log(car.name)
console.log(truck.engine)
