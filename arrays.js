// basics will be in functions.js
// * join
// create and return a new string by concatenating all the elements in array
// example
// const elements = ['Fire', 'Air', 'Water'];

// console.log(elements.join());
// Expected output: "Fire,Air,Water"

// console.log(elements.join(''));
// Expected output: "FireAirWater"

// console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"

// * parameters
// separator - is a string that will be in between two elements, if it's an empty string all element will come concatenated


// * concat()
// used to merge two or more arrays
// doesn't change existing array but return a new array
// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);

// console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]

// * split()
// method takes a pattern and divides a String into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.

// parameters
// separator
// limit - limit the number of substrings to be included in the array

// const str = 'The quick brown fox jumps over the lazy dog.';

// const words = str.split(' ');
// console.log(words[3]);
// Expected output: "fox"

// const chars = str.split('');
// console.log(chars[8]);
// Expected output: "k"

// const strCopy = str.split();
// console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]


// ex - 2
// const emptyString = "";

// string is empty and separator is non-empty
// console.log(emptyString.split("a"));
// [""]

// string and separator are both empty strings
// console.log(emptyString.split(emptyString));
// []

// * reverse()  inplace

// const array1 = ['one', 'two', 'three'];
// console.log('array1:', array1);
// Expected output: "array1:" Array ["one", "two", "three"]

// const reversed = array1.reverse();
// console.log('reversed:', reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
// console.log('array1:', array1);
// Expected output: "array1:" Array ["three", "two", "one"]

// ex-2
// const numbers = [3, 2, 4, 1, 5];
// [...numbers] creates a shallow copy, so reverse() does not mutate the original
// const reverted = [...numbers].reverse();
// reverted[0] = 5;
// console.log(numbers[0]); // 3

// * sort()  inplace

// const months = ['March', 'Jan', 'Feb', 'Dec'];
// months.sort();
// console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

// const array1 = [1, 30, 4, 21, 100000];
// array1.sort();
// console.log(array1);
// Expected output: Array [1, 100000, 21, 30, 4]

// parameters
// compareFn - function that define the sort order
//  The return value should be a number whose positivity indicates the relative order of the two elements. 
    // arguments:
    // a
    // The first element for comparison. Will never be undefined.

    // b
    // The second element for comparison. Will never be undefined.


// ! without compareFn - all non-undefined elements are sorted by converting them to string and comparing in UTF-16
// ! ex: "banana" comes before "cherry", in case of numeric sort 9 comes before 80 but here it's converted to string so "80" comes before "9"

// If compareFn is supplied, all non-undefined array elements are sorted according to the return value of the compare function (all undefined elements are sorted to the end of the array, with no call to compareFn).

// compareFn(a, b) return value	           sort order
//     > 0	                        sort a after b, e.g. [b, a]
//     < 0	                        sort a before b, e.g. [a, b]
//     === 0	                    keep original order of a and b

// sample compareFn
// function compareFn(a, b) {
//     if (a is less than b by some ordering criterion) {
//       return -1;
//     }
//     if (a is greater than b by the ordering criterion) {
//       return 1;
//     }
     // a must be equal to b
//     return 0;
//   }

// ex
// let arr = [1,2,10,3,50,9,80]

// arr.sort((a,b)=>{
//   if(a>b)
//     return 1
//   else if(a<b)
//     return -1
//   return 0
// })

// console.log(arr)

// * indexOf()
// returns the first index at which a given element can be found in the array, or -1 if it is not present.
// const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

// console.log(beasts.indexOf('bison'));
// Expected output: 1

// Start from index 2
// console.log(beasts.indexOf('bison', 2));
// Expected output: 4

// console.log(beasts.indexOf('giraffe'));
// Expected output: -1

// Syntax
// indexOf(searchElement)
// indexOf(searchElement, fromIndex)
