/*
✍
README:
TOPICS AT -->

 http://csbin.io/callbacks

 WAIT -> the answers are below
*/


// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');


// Challenge 1
function addTwo(num) {
  return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));


// Challenge 2
function addS(word) {
  return word + 's'
}

// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));


// Challenge 3
function map(array, callback) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    const element = callback(array[i]);
    output.push(element);
  }
  return output;
}

// console.log(map([1, 2, 3], addTwo));


// Challenge 4
function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);

  }
}

let alphabet = '';
const letters = ['a', 'b', 'c', 'd'];
forEach(letters, (char) => {
  alphabet += char;
});
// console.log(alphabet);

// see for yourself if your forEach works!


//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
  const output = [];
  forEach(array, i => {
    const element = callback(i);
    output.push(element);
  })
  return output;
}

//Extension 2
function reduce(array, callback, initialValue) {
  let accum = 0;
  for (let i = 0; i < array.length; i++) {
    if (i >= initialValue) {
      console.log("array i ->", array[i])
      accum = callback(accum, array[i]);
    }
  }
  return accum;
}

const nums = [1, 2, 3];
const add = (i, value) => i + value;
// console.log ("Extendions 2 -> ", reduce(nums, add, 0));

//Extension 3
function intersection(arrays) {
  reduce(arrays, (i, array) => {
      console.log("i -> ", i);
      console.log("array-> ", array);
      return i + 1;
  }, 0)
}

  console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
function union(arrays) {

}

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {

}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {

}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }


//Extension 7
function objectFilter(obj, callback) {

}

// const cities = {
// London: 'LONDON',
// LA: 'Los Angeles',
// Paris: 'PARIS',
// };
// console.log(objectFilter(cities, city => city.toUpperCase())) // Should log { London: 'LONDON', Paris: 'PARIS'}