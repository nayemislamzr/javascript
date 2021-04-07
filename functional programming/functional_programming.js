// Higher Order Function :

// A fuction that rececives or passes out a function is called a higher order function

// Task : Copy an array and double its each element in new array 

// ::Normie Version

// const arr = ["1", "2", "3", "4", "5"]

// function copyArrayandDouble(array) {
//     let new_array = [];
//     for (let i = 0; i < array.length; i++) {
//         new_array.push(array[i] * 2);
//     }
//     return new_array;
// }

// const copyArrayandDoubleResult = copyArrayandDouble(arr);

// console.log(copyArrayandDoubleResult);

// ::functional programming version

// const arr = ["1", "2", "3", "4", "5"]

// const double = (element) => {
//     return 2 * element;
// }

// function copyArrayandManupulate(array, manupulate) {
//     let new_array = [];
//     array.forEach((element) => {
//         new_array.push(manupulate(element));
//     })
//     return new_array;
// }

// const copyArrayanDoubleResult = copyArrayandManupulate(arr, double);

// console.log(copyArrayandDoubleResult);

// now we can not only double the element but also do other manupulation as per as our need just by calling that function
// with out changing much code
// for example we want to triple the element so we can do is call a triple function instead of double function 
// in copyArrayandManupulateResult 

// const triple = (element) => {
//     return element * 3;
// }

// const copyArrayandTripleResult = copyArrayandManupulate(arr, triple);

// console.log(copyArrayandTripleResult);

/////////////////
// Example of Map
/////////////////


// Task : half the value

// ::Normie view 

// const arr = [1, 2, 3, 4, 5];

// const halfValue = (element) => {
//     return element / 2;
// }

// function halfEveryValue(array) {
//     let new_half_value = [];

//     array.forEach((element) => {
//         new_half_value.push(halfValue(element));
//     })

//     return new_half_value;
// }

// const halfValueArray = halfEveryValue(arr);

// console.log(halfValueArray);

// ()functional programmer how does that ??

// let numbers = [1, 2, 3, 4, 5];

// const halfValuedNumbers = numbers.map(element => element / 2);

// console.log(halfValuedNumbers);

/////////////
//////Filter
//////////// 

// Task : Make a list of Even numbers from an Array

// :: normie View

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const checkEven = (number => {
//     return !(number % 2);
// })

// const someVillain = (numbers, differentiator) => {
//     let new_array = [];

//     numbers.forEach((number) => {
//         if (differentiator(number))
//             new_array.push(number);
//     })

//     return new_array;
// }

// const EvenNumbers = someVillain(numbers, checkEven);

// console.log(EvenNumbers);

// ::functional programmer view 

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const EvenNumbers = numbers.filter(x => !(x % 2));

// console.log(EvenNumbers);

// Something to remember incase you are now in somesort of abstraction in how map and filter works

// Here is How :

// let halfValue = x => x / 2;         

// halfValue is a function same as below : 
// let halfValue = (x) => {
//     return x / 2;
// }

// const halfValueResult = halfValue(2);

// console.log(halfValueResult);

// How : Actually Map and Filter Calls the function for Every Element the array has and the parmeter is the element itself
//  and returns the result value in a new array


/////////////
//////Reduce
////////////

// Task : Get the total of an array

// Normie View :

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// function Sum(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     return sum;
// }

// const SumResult = Sum(numbers);
// console.log(SumResult);

// Funtional Programmer View 

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const SumResult = numbers.reduce((sum, value) => sum + value, 0)

// Here sum is refers to the previous value
// By default the initial value is set to 0 but here we explicitly turn it to 0 
// Value referes to the current element of the array
// then in arrow function the opertaion we are dealing with 
// Reduce Return a single Result.

// console.log(SumResult);

/////////////////////////////////////////////////////////////////////////////////////////////
///// Map /////////////////////// Filter ////////////////////////// Reduce /////////////////
/// Map calls the function for //   Same as Map //////////////////  Return single result////
/// every element of the array //////////////////////////////////// after operation on an/////
/// then after the operation it/////////////////////////////////// array////////////////////
/// returns the result in array/////////////////////////////////////////////////////////////

// Bonus on Reduce

// const add1 = num => num + 1
// const add2 = num => num + 2

// const Result = [add1, add2].reduce((input, curr_function) => curr_function(input), 2)

// console.log(Result);

// Brain Stormed ??
// this shit is same as below 

// const Result = add2(add1(2));

// console.log(Result);

// Now Be Practical 

// Suppose We want to make a cake
// Now to make cake we are follwing below steps

// ingredients --> melt --> mix --> bake --> cake

// we are assuming here that every step is a function and the functions together can make a cake

// The Melt function

// function melt(ingredients) {
//     return (ingredients + "---> melted");
// }

// // The mix function

// function mix(melted_ingredients) {
//     return (melted_ingredients + "---> mixed");
// }

// // The bake function

// function bake(mixed_ingredients) {
//     return (mixed_ingredients + "---> baked");
// }

// // The cake function

// function cake(baked_ingredients) {
//     return (baked_ingredients + "---> cake");
// }

// // Now see the magic

// // const cakeResult = [melt, mix, bake, cake].reduce((previous_form, current_procedure) => current_procedure(previous_form), "moida");

// // console.log(cakeResult);

// // now suppose we want to decorate ,
// // we can do that simple with functional programming

// function decorate(cake) {
//     return (cake + "---> decorated");

// }

// const cakeResult = [melt, mix, bake, cake, decorate].reduce((previous_form, current_procedure) => current_procedure(previous_form), "moida");

// console.log(cakeResult);

// Pure Function 

// Given the same input will ALWAYS result in same output 

// for example :

// function sum(a,b){
//     return a+b;
// }

// the upper one is a pure function cz whatever happens this will always return the same output

// So what is impure function you probably thinking 

// Example :

// function randomNumber() {
//     return Math.random();
// }

// console.log(randomNumber());

// this is impure function cz this function output is not predictable

// Closure

// let count = 5;

// const createInstance = () => {
//     let count = 0;
//     add1 = (num) => {
//         count += num;
//         console.log(count);
//     }
//     return add1;
// }

// const aInstance = createInstance();
// aInstance(1);
// aInstance(2);

// const bInstance = createInstance();
// bInstance(1);
// bInstance(2);

// What really is happening here ??

// createInstance function is returning a function 
// but in the funciton we have count but count is not declared inside the function so it tooks for count variable in 
// its parent scope , so on , global scope

// but when we make a instance of the function why count is not referning to the global scope as per rule it itself in
// global scope why it is now referening to the same inside count 
// in javascript when a instance a created it looks for all its properties(variables) as well . As count is not in the
// native scope it looks for that in the parent scope , AS for now it finds that it continue to refer that count 
// variable whenever any new instance is created though the value is copied (any change does not have any effect in that
// parent count variable)

// now say what will be the output of the following piece of code :

// let count = 5;

// const createInstance = () => {
//     add1 = (num) => {
//         count += num;
//         console.log(count);
//     }
//     return add1;
// }

// const aInstance = createInstance();
// aInstance(1);
// aInstance(2);

// const bInstance = createInstance();
// bInstance(1);
// bInstance(2);

// the output will be 6 7 8 9 

// but why here the value is changed in orginal form rather than copy the value in every instance ??

// bcz here both instance and create_instance both refering to the same scope and that is in global scope . (here global
// not mandatory) means if both are in same scope the original value will be manupulated rather than copying the stuffs

// Here is an example :

// (() => {
//     let count = 0;
//     const createInstance = () => {
//         add1 = (num) => {
//             count += num;
//             console.log(count);
//         }
//         return add1;
//     }
//     const aInstance = createInstance();
//     aInstance(1);
//     aInstance(2);

//     const bInstance = createInstance();
//     bInstance(1);
//     bInstance(2);
// })()

// adding functionality to the predefined funtions

/////////
///Function Declaration
///////


// Task : suppose we want a function to run atmost once.
// How can we do that ??

// const task_fulfiller = task => task + " fulfilled";

// function runOnce(worker) {
//     let respect = 0;
//     const establish = (task) => {
//         if (respect === 0) {
//             respect++;
//             return worker(task);
//         }
//         return "sorry";
//     }
//     return establish;
// }

// const aInstance = runOnce(task_fulfiller);

// console.log(aInstance("vaat ranna"));
// console.log(aInstance("kapor Dhowa"));

// Guess what , for "kapor Dhowa" we appointed another person :P

// const bInstance = runOnce(task_fulfiller);

// console.log(bInstance("kapor Dhowa"));