// TODO closure
// closure are property which states, the inner function has access to the variable that are declared in the outer function

// closure is combination of function + lexical environment in which the function is created
// var i = 10;
// function outer() {
//     var j = 20;
//     console.log(i, j);
//     function inner() {
//         var k = 30;
//         console.log(j, k);
//     }
//     inner();
// }

// outer();

// output
// 10 20
// 20 30

//now instead of calling inner inside outer let's return inner function
// var i = 10;
// function outer() {
//     var j = 20;
//     console.log(i, j);
//     var inner = function () {
//         var k = 30;
//         console.log(j, k);
//     }
//     return inner;
// }
// var inner = outer();
// inner()

// output
// 10 20
// 20 30

// now how the output is same
// ideally the variable j should be cleaned up from memory because execution is over
// but due to the closure property it will be there. here j will be there.

// Let's update the above code to explore more on closure
// var i = 10;
// function outer() {
//     var j = 20;
    // console.log(i, j);
//     var inner = function () {
//         var k = 30;
//         console.log(j, k);
//         j++;
//         k++;
//     }
//     return inner;
// }
// var inner = outer();
// inner()
// inner()

// k is not updated in the second call
// if we do j++ than it will be get updated

// now let's print i as well and increment it as well.
// var i = 10;
// function outer() {
//     var j = 20;
    // console.log(i, j);
//     var inner = function () {
//         var k = 30;
//         console.log(i, j, k);
//         i++;
//         j++;
//         k++;
//     }
//     return inner;
// }
// var inner = outer();
// inner()
// inner()
// here i will also be incremented
// output
// 10 20 30
// 11 21 30

// now let's do even more, make an another call to outer and then to inner
// var i = 10;
// function outer() {
//     var j = 20;
    // console.log(i, j);
//     var inner = function () {
//         var k = 30;
//         console.log(i, j, k);
//         i++;
//         j++;
//         k++;
//     }
//     return inner;
// }
// var inner = outer();
// inner()
// inner = outer()
// inner() 

// here only i is getting incremented and shown
// j,k will not, because in another call to outer  j will be 20.
// output
// 10 20 30
// 11 20 30

// * closures and let
// for(var i = 1;i <= 5; i++){
//     setTimeout(function () {
//         console.log(i);
//     }, 1000);
// }
//this will print 6 five times.
//loop will continue to run but the function will be called after 1 sec only.
// so when that function will be called after delay, i will be 6

// we can use let to resolve this.
// for(let i = 1;i <= 5; i++){
//     setTimeout(function () {
//         console.log(i);
//     }, 1000);
// }
// so now, the i has a block scope
// in the every iteration new i will be declared and used,
// every function is bind with the new i within the iteration

// now we've question, if i is declared new in each iteration, how increment is performed?
// consider this piece of code
// var arr = new Array(6)
// for (let i = 1; i <= 5; i++) {
//     i++;
//     array[i] = function () {
//         console.log(i)
//     }
//     i--;
// }
// so for each iteration another function is called and in there new instance of that var is created.

// * Arrow functions
// consider below code
// var multiply = function (x, y) {
//     return x*y
// }
// console.log(multiply(4,6))

// so this will be easy using arrow functions
// var multiply = (x,y) => {return x * y};
// console.log(multiply(4,6))

// if there is single statement we can omit {}
// and even if the one statement is return, than we can omit return i.e. (x,y) => x*y

// Arrow function binds to the parent scope instead of the window scope 
// function Person(name){
//   this.name = name;
//   setTimeout(function(){
//     console. log(this);
//  	},1000);
// }
// var p = new Person("chintan");

// this will print window object, because it has window context by default, but if we use arrow function here, than it will not have default binding to window so it will take context of it's parent.
// function Person(name){
//     this.name = name;
//     setTimeout(() => console.log(this),1000);
// }
// var p = new Person("chintan");

// this will print the person object
