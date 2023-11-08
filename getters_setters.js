const student = {
  firstName: 'Logan',

  // accessor property(getter)
  get getName() {
    return this.firstName;
  },

  // accessor property(setter)
  set changeName(newName) {
    this.firstName = newName;
  },
};

console.log(student.firstName);

console.log(student.getName);

student.changeName = 'Maverick';

console.log(student.firstName);
