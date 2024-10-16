// No 1
function titleToNumber(columnTitle: string): number {
    let result = 0;
    
    for (let i = 0; i < columnTitle.length; i++) {
        const charCode = columnTitle.charCodeAt(i) - 64;
        result = result * 26 + charCode;
    }
    
    return result;
}

console.log(titleToNumber("A"));

console.log(titleToNumber("B"));

console.log(titleToNumber("Z"));

console.log(titleToNumber("AA"));

console.log(titleToNumber("AB"));


// No 2
function singleNumber(nums: number[]): number {
    let result = 0;
    
    for (let num of nums) {
        result ^= num;
    }
    
    return result;
}

console.log(singleNumber([2, 2, 1]));

console.log(singleNumber([4, 1, 2, 1, 2]));

console.log(singleNumber([1]));
