// METHOD 1
let array = [1, 2, 3, 4, 5];

let newArray = array.slice();

// METHOD 2
let array2 = [];
for (let val in array) {
  array2[val] = array[val];
}

let array3 = [...array];

console.log(newArray);
console.log(array2);
console.log(array3);
