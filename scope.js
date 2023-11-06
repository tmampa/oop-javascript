const globalVar = 'This is a global variable';

function fun() {
  const localVar = 'Local variable';

  console.log(localVar + 'is usefull inside function');
}

fun();

console.log(localVar + 'is not ' + globalVar);
