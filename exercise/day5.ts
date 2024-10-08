// No 1
const numbers1: number[]= [12, 5, 23, 18, 4, 45, 32];

numbers1.sort((a, b) => a - b)

    console.log("lowest:" + " " + numbers1[0]);

// No 2
const words1: string[] = ["apple", "banana", "cherry", "date"];
const lastWords: string[] = [" date"];

function list(words: string) {
    if (words.length === 0) {
        return ``;
    }
    if (words.length === 1) {
        return [0];
    }
    let words1 = words.slice(0, words.length - 1);
    let lastWords = words[words.length - 1];
}
console.log(words1.join(`, `) + ` and` + lastWords);

// No 3
const angka2: number[] =  [5, 3, 1, 7, 2, 6];

angka2.sort((a, b) => a - b);

console.log("angka terkecil kedua :" + " " + angka2[1]);

// No 4
const angka3: number[] = [1, 2, 3];
const angka4: number[] = [3, 2, 1];
const result = [];

for (let i = 0; i < angka3.length; i++) {
    result.push(angka3[i] + angka4[i])
}
console.log(result);

// No 5
const number1: number[] =  [1, 2, 3, 4]
const newElement = number1.concat(7)

console.log(newElement);

// No 6
["3", 1, "string", null, false, undefined, 2]

// No 7


// No 8
const number2: number[] =  [1, 2, 3];
const number3: number[] =  [4, 5, 6];
const result1 = number2.concat(number3)

// console.log(result1);

// No 9
const number4: number[] =  [1, 2, 2, 2, 3, 3, 4, 5, 5];

const duplicates = number4.filter((item, index) => number4.indexOf(item) !== index);
 
console.log(duplicates);

// No 10
const number5: number[] = [1, 2, 3, 4, 5];
const number6: number[] = [3, 4, 5, 6, 7];
const difference1 = 
    number5.filter((element) => !number6.includes(element));

console.log(difference1);

// No 11
type primitive = string | number | boolean | null


// No 12

// No 13