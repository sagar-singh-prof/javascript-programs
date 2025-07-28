let num = 153; 
let originalNum = num;
let sum = 0;
let temp = num;
let count = 0;
while (temp > 0) {
    count++;
    temp = Math.floor(temp / 10);
}

temp = num;
while (temp > 0) {
    let digit = temp % 10;
    let power = 1;

    for (let i = 0; i < count; i++) {
        power *= digit;
    }

    sum += power;
    temp = Math.floor(temp / 10);
}

if (sum == originalNum) {
    console.log("Armstrong No");
}
 else {
    console.log("Not Armstrong No");
}
