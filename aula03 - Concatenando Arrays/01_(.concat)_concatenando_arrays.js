const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const array3 = array1.concat(array2);
console.log(array3);    // [ 1, 2, 3, 4, 5, 6 ]

const array4 = array1.concat(array2, [7, 8, 9], "Alex");
console.log(array4);    // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, "Alex" ]