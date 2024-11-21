// IIFE ga iod masalalar
// 1-misol
// (function(arr) {
//     console.log(arr.reduce((sum, num) => sum + num, 0));
// })([1, 2, 3, 4]); 

// 2-misol
// (function(a, b) {
//     console.log(a * b);
// })(3, 5); 


// Object Array ga oid masalalar

// 2-misol
// function addNumbers(arr) {
//     return arr.map(num => num * 2);
    
// }
// console.log(addNumbers([1, 2, 3, 4]));

// 3-misol
// function addobject(arr) {
//     return JSON.parse(JSON.stringify(arr));
// }
// console.log(addobject({ person: { name: "Ali" } }));


// Pure function ga oid
// 1-misol
// function concatArray(arr1, arr2) {
//     return [...arr1, ...arr2]
// }
// console.log(concatArray([1, 2, 3, 4], [5, 6, 7, 8]));


// Callback function ga oid
// 1-misol
// function map(arr, ) {
//     return arr.map(v => v * 2);
// }
// console.log(map([1, 2, 3])); 

// 2-misol
// function filter(arr) {
//     return arr.filter(v => v % 2 !== 0);
// }
// console.log(filter([1, 2, 3, 4])); 


// Object metodlariga oid
// 1-misol
// function objectkeys(obj) {
//     return Object.keys(obj)
// }
// console.log(objectkeys({name: "merseders", age: 2024, weight: 2000}));


// 2-misol
// function objectVal(obj) {
//     return Object.values(obj)
// }
// console.log(objectVal({name: "merseders", age: 2024, weight: 2000}));


// 3-misol
// function Objectentries(obj) {
//     return Object.entries(obj)
// }
// console.log(Objectentries({name: "merseders", age: 2024, weight: 2000}));


// JSON ga oid
// 1-misol
// function jsonObject(obj) {
//     let res = JSON.stringify(obj);
//     return JSON.parse(res);
// }
// console.log(jsonObject({ name: "Abror", age: 10 }));

// 2-misol
// function jsonparse(obj) {
//     return JSON.parse(obj10
// }
// console.log(jsonparse('{"name": "Abror", "age": 10}'));



// String metodlariga oid
// 1-misol
// function trimarray(str) {
//     return str.replace(/\s+/g, "").trim();
// }

// console.log(trimarray("salom     abror"));

// 2-misol
// function touppercase(arr) {
//     return arr.toUpperCase(arr)
// }
// console.log(touppercase("abrorjon"));


// 3-misol
// function capitalize(arr) {
//     return arr.charAt(0).toUpperCase() +arr.slice(1).toLowerCase();
// }
// console.log(capitalize("abrorjon"));

// 4-misol
// function trimendaarr(arr) {
//     return arr.trimEnd()
// }
// console.log(trimendaarr("abror      "));


// 5-misol
// function splitarr(arr) {
//     return arr.split(" ")
// }
// console.log(splitarr("salom"));


// 6-misol
// function reveresArray(arr) {
//     return arr.split("").reverse().join("")
// }
// console.log(reveresArray("abror"));


// 9-misol
// function add(arr, str) {
//     return arr.slice(str);
// }
// console.log(add("salom", 2));

// 10-misol
// function slicearray(arr, str) {
//     return arr.slice(0, str);
// }
// console.log(slicearray("salom abror", 5));

// 11-misol
// function replaceArray(arr, str1, str2) {
//     return arr.replace(str1, str2);
// }
// console.log(replaceArray("salom abror", "xayr", "abror"));

// 12-misol
// function tolovercasearray(str) {
//     return str.toLowerCase();
// }
// console.log(tolovercasearray("Abror"));


