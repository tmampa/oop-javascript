const passMark = 50;
const excemption = 75;
const distinction = 85;

// const results = prompt('Enter your results: ');
const results = 88;

const checkPassMark = (results) => {
  if (results == 0) {
    return 'Did not write.';
  } else if (results >= excemption && results < distinction) {
    return 'Excemption';
  } else if (results >= distinction) {
    return 'Distinction';
  } else if (results > passMark) {
    return 'Achieved';
  } else {
    return 'Not Achieved';
  }
};

console.log(checkPassMark(results));
