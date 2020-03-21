//High Order Functions

// example 1
function copyAndArrayAndManipulate(array, instrucctions){
  const output = []
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    output.push(instrucctions(element));
  }

  return output;
}

function multiplyBy2(input){ return input * 2 };

const result = copyAndArrayAndManipulate([1,2,3], multiplyBy2);
console.log(result);

// output [2,4,6]


