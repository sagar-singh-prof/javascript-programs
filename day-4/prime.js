  let primeno =n=> {
if (n <= 1){
      return false;
     } 
       for (let i = 2; i < n; i++) {
  if (n % i === 0)
         { return false;
   }
 }
   return true;
 }
let num= [2, 3, 4, 5, 10, 13, 15, 17];
let result=num.filter(primeno)
console.log (result);



















// let primeno = function(n) {
//   if (n <= 1){
//      return false;
//     }
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0)
//         { return false;
//   }
// }
//   return true;
// }

// let num = [2, 3, 4, 5, 10, 13, 15, 17];
// let result = [];

// for (let i = 0; i < num.length; i++) {
//   if (primeno(num[i])){
//      result.push(num[i]);
//   }
// }

// console.log(result);




