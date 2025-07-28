let num = 121;
let originalNum = num;
let reversed = 0;

while (num > 0) {
    let digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10); 

}

if (reversed === originalNum) {
    console.log("Pallindrome");
} 
else {
    console.log("Not a Pallindrome");
}
