// let myfunc=function (array,name) {
//   let sum = 0;
//   console.log(name);
//   for (let i = 0; i < array.length; i++)
//      sum += array[i];

//   return sum;

// }



// let arr1 = [1, 2, 3];

// // let sum = 0;
// // for (let i = 0; i < arr1.length; i++) sum += arr1[i];
// let sum1=myfunc(arr1,"yashika");
// console.log(sum1);

// let arr2 = [1, 2, 4, 5, 6];
// // let sum2 = 0;
// // for (let i = 0; i < arr2.length; i++) sum2 += arr2[i];
// console.log(myfunc(arr2,"sagar"));

// let arr3 = [4, 4, 6, 7];
// // let sum3 = 0;

// // for (let i = 0; i < arr3.length; i++) sum3 += arr3[i];
// console.log(myfunc(arr3,"dummy"));


//create a function for finding cube of array value
// take multiple function parameter  in function and show the working function
//object practise == create a object for student having some property 
// function below



let multiply=function(a,b){
    return a*b;
}

let addition=function(a,b){
    return a+b;
}

function process(a,b,processor){
    let c=processor(a,b);
    return c;

}

let i=2,j=6;
let value1=process(i,j,multiply);
console.log(value1);

let x=8,y10;
let value2=process(x,y,addition);
console(value2);



