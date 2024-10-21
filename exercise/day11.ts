// No 1
 function phoneNumber(input: string) {
    if (input.length !== 12) {
        return "Invalid phone number"
    }

    for (let i = 0; i < input.length; i++) {
        if (input[i] < "0" || input[i] > "9") {

            return "Invalid phone number"
        }
    }

    input = "62" + input.slice(1);

    let template = "(xxxx)-xxxx-xxxxx";

    input.split("").forEach((item) => {
        template = template.replace("x", item);
    });

    return template;
 }

 console.log(phoneNumber("082134453223"));
 
// No 2
class Product {
    nama: string;
    berat: number;
}

// No 3
function titleToNumber(columnTitle: string): number {
    let result = 0;
    
    for (let i = 0; i < columnTitle.length; i++) {
        const charCode = columnTitle.charCodeAt(i) - 64;
        result = result * 26 + charCode;
    }
    
    return result;
}

console.log(titleToNumber("A"));

// No 4
function singleNumber(nums: number[]): number {
    let result = 0;
    
    for (let num of nums) {
        result ^= num;
    }
    
    return result;
}

console.log(singleNumber([2, 2, 1]));

// No 5