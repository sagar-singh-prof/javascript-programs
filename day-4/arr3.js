//not divisble by both 2 nd 3
let arr =[2,3,5,7,9,60,70,80,90];
let result =arr.filter(value =>  value % 2 != 0 && value % 3 != 0);

console.log(result);
