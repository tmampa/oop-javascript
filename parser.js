// JSON.parse() and JSON.stringify() are used to convert data to and from the JSON format

const myDetails = `
  {
    "name": "Tshephang",
    "surname": "Mampa",
    "age": 25,
    "course": "Computer Science"
  }
`;

const data = JSON.parse(myDetails);
console.log(data);

results = JSON.stringify(data);
console.log(results);
