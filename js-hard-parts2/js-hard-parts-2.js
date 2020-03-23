//High Order Functions

// example 1
function copyAndArrayAndManipulate(array, instrucctions) {
  const output = []
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    output.push(instrucctions(element));
  }

  return output;
}

function multiplyBy2(input) { return input * 2 };

const result = copyAndArrayAndManipulate([1, 2, 3], multiplyBy2);
console.log(result);

// output [2,4,6]


//Arrowest  function version
const multiplyBy3 = input => input * 3;

// and we could do

const result2 = copyAndArrayAndManipulate([1, 2, 3], input => input * 3);

//output [3, 6 ,9]

// Closure study

function createFunction() {
  function multiplyBy4(num) {
    return num * 4;
  }

  return multiplyBy4();
}

const generatedFunction = createFunction();
const result = generatedFunction(3); //12
