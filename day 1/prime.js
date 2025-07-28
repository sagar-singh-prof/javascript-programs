
let num = 101;
let isPrime = true;

if (num <= 1) {
    isPrime = false;
} else {

    for (let i = 2; i <= (num / 2); i++) {
        if (num % i == 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(num + "  Prime Number");
} 
 else {
    console.log(num + " Not  Prime Number");
}
