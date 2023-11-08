// constructor function

function Person(name, age) {
  this.name = name;
  this.age = age;
}

// two persons objects

let john = new Person('John', 23);
let jane = new Person('jane', 19);

console.log(john);
console.log(jane);

let thoko = {
  name: 'Thoko',
  age: 25,
};

function Students(name, age, course) {
  this.name = name;
  this.age = age;
  this.course = course;

 
}

const student = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 25,
  contact: '0781234567',

  get getDetails() {
    return [this.firstName, this.lastName, this.age, this.contact];
  }
}

console.log(student.getDetails);

let lydia = new Students(thoko.name, thoko.age, 'Computer Science');
