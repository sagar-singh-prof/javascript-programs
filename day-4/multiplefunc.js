// function squArray(arr) {
//   let squ = [];
//   for (let i = 0; i < arr.length; i++) {
//     squ.push(arr[i] * arr[i] );
//   }
//   return squ; 
// }

// let arr = [1, 2, 3];
// console.log("squ", squArray(arr)); 


let cube = function(num) {
    return num * num * num;
};

let arr = [2, 3, 4, 5, 6];

let cubes = [];

for (let i = 0; i < arr.length; i++) {
    cubes.push(cube(arr[i]));
}


console.log(cubes); 
