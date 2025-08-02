// function functionName(){
//     //

// }

// let func=function  (){
//     //

// }

// //arrow function
// let func2=()=>{

// }

let add = (a, b) => {
  return a + b;
};

let add1 = (a, b) => a + b;

let cube = (a) => a * a * a;

// console.log(add1(1,2));
// console.log(cube(3));


//push pop  slice

//  map  filter   reduce

//given an array []  create a new array containing squares of orignal array
//er [1,2,3]===[1,4,9]

let arr = [1, 2, 3, 4, 5];

// let result=[];

// for(let i=0;i<arr.length;i++){
//     result.push(arr[i]*2);

// }

// let result=arr.map(value=>  value * 2);

//Given an array[] return a filter a array by removing all the even value

// let result=[];

// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2!=0)
//         result.push(arr[i]);

// }

let result =arr.filter(value =>  value % 2 != 0);
// earlier inside
//   if (value % 2 != 0) return true;
//   else return false;


//Q1multiple type of syntax functions
//Q2 shortest arrow function
//Q3 given array return a new array containing triples of orinal array
//Q4 Given an array of strings of 1 return a new array with vowel  eg ['a','b','c','d','e']==['a','e']  
//Q5 Given an array of numbers return a new array of only prime numbers inside orignal arrray  [1,2,3,4,5]=[2,3,5]
//Q6 Given ............. return square root in new array 

//4 question map filter and complete it
console.log(arr);
console.log(result);
