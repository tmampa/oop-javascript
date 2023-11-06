const obj = [
  'Computer Science',
  'Computer Literacy',
  'Software Engineering',
  'DataBase',
];

console.log(obj instanceof Array);

let devOps = ' ';

for (let item = 0; item < obj.length; item++) {
  devOps += obj[item] + ' ';
  console.log(devOps);
}
