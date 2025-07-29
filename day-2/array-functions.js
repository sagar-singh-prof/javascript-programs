//functions used in array apart from push and pop are:
// 1. shift()-- used to remove first element from array
   
    /* let arr = [10, 20, 30];
    arr.shift();
    console.log(arr);  */
   
 //2.unshift()--used to add one or more element at starting of array
        
      /* let arr = [20, 30];
         arr.unshift(10); 
         console.log(arr); */

//3.splice()-- add or remove element in any position of array
      
       /*  let arr = [1, 6, 3, 4];
        arr.splice(2, 1, 99);         here 2 is the index from where we have to start removing the element & 1 means one element 
                                             and 99 means add 99  
         console.log(arr); */

 //4.slice()--return a shallow copy of a portion of the array & original array is not changed 
           
        /*  let arr = [1, 2, 3, 4, 5];
           let part = arr.slice(1, 4);     here index 1 is the starting point from where the slicing will start& it will go upto
                                           index 3 means one index less as written 4
           console.log(part); */
  
//5. map()--creates a new array by applying a function 
/*
   let arr = [10, 20, 30];

  let result = arr.map(function(value, index, array) {
  console.log("value:", value, "index:", index, "array:", array);
  return value * 2;
  });
    console.log(result); 



let arr = [1, 2, 3];
let squared = arr.map(x => x * x);
console.log(squared); 
*/

