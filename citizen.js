class Citizen {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }

  addAddress(add) {
    this.add = add;
  }

  getDetails() {
    console.log(
      `The name of the resident is ${this.name} and their ID is ${this.id}. They live at ${this.add}`
    );
  }
}

module.exports = { Citizen };
