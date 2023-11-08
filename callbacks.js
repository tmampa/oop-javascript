let school = {
  name: 'Secunda Secondary School',
  location: 'Mpumalanga',
  established: '1990',
  2019: 1000,

  displayInfo: function () {
    console.log(
      // the $ inside the backticks is called a template literal/identifier
      `Welcome to ${this.name} located in ${this.location} and established in ${this.established} with ${this[2019]} students in 2019.`
    );
  },
};

school.displayInfo();
console.log(school.name);
