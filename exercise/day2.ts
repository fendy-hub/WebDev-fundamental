// No 1
const input1: number = 5; 

if (input1 % 2 !== 0) {
    console.log(input1 + " is odd");
} else {
    console.log(input1 + " is even");
}

// No 2
function checkPrime(number = 7) {
    let i, flag = true;
    for (let i = 2; i <= number - 1; i++) {
        if (number % i == 0) {
            flag = false;
            break;
        }
    }
    if (flag == true)
        console.log(number + " is prime ");
    else
        console.log(number + " is not prime");
}
checkPrime()

// No 3
const sum1: number = 5;

let sum = 0;

for(let i = 1; i <= sum1; i++) {
    sum += i;
}
console.log('the sum of natural number', sum);

// NO 4
const fact: number = 4;

function factorial(fact) {
    let numb = 1;

    if(fact === 0)
        return 1;
    for(let i = 2; i <= fact; i++)
        numb = numb * i;
    return numb;
}
console.log(factorial(fact));

// No 5

console.log(1);
