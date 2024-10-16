function singleNumber(nums: number[]): number {
    let result = 0;
    for (let num of nums) {
        result ^= num;
    }
    return result;
}

const num1 = [4, 1, 2, 1, 2];
console.log(singleNumber(num1));


function mySqrt(x: number): number {
    if (x === 0 || x === 1) return x;

    let left = 1;
    let right = x;
    let result = 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (mid * mid === x) {
            return mid;
        } else if (mid * mid < x) {
            result = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result;
}

const x1 = 4
console.log(mySqrt(x1));


function isPalindrome(x: number): boolean {
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    let reversed = 0;
    let original = x;

    while (x > 0) {
        reversed = reversed * 10 + (x % 10);
        x = Math.floor(x / 10);
    }

    return original === reversed;
}

const xx = 121

console.log(isPalindrome(xx));


function lengthOfLastWord(s: string): number {
    const words = s.trim().split(/\s+/);
    return words[words.length - 1].length;
}

const s1 = "Hello world";

console.log(lengthOfLastWord(s1));


function argumentsLength(...args: any[]): number {
    return args.length;
}

function reverseWords(s: string): string {
    // Trim extra spaces, split the words by one or more spaces, reverse the array, and join with a single space
    return s.trim().split(/\s+/).reverse().join(" ");
}

function sortArrayByParity(nums: number[]): number[] {
    const evens = nums.filter(num => num % 2 === 0);
    const odds = nums.filter(num => num % 2 !== 0);
    return evens.concat(odds);
}


