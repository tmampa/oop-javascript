const courses = [
  'React',
  'Angular 2',
  'Javascript',
  'Java',
];

// courses.length = 10;

// courses[7] = 'Node.js';

// console.log('Available courses: ' + courses);
// console.log(courses.toString());

// courses.push(['Vue.js', 'Node.js', 'Python', 'C#']);

// console.log('Updated courses: ' + courses);

let output = '';
for (let course = 0; course < courses.length; course++) {
  output += courses[course] + ' ';
}
console.log(output);

const learners = new Array(3);

learners[0] = 1;
learners[1] = 2;
learners[2] = 3;
learners[3] = 4;
learners[4] = 5;

console.log( 'Number of Learners: ' + learners);
console.log(learners.length);
