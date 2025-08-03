function cubeArray(arr) {
  let cube = [];
  for (let i = 0; i < arr.length; i++) {
    cube.push(arr[i] * arr[i] * arr[i]);
  }
  return cube; 
}

let arr = [1, 2, 3];
console.log("cube", cubeArray(arr)); 
