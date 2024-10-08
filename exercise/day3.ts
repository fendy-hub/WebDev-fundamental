// git ad .
// git commit -m "initial commit"
// git push origin main

// No 1
const angka: number = 9;

for (let i = 1; i <= 10; i++) {
  const result = i * angka;
  console.log(`${angka} x ${i}`);
}

// No 2 cara 1
function reverseString(str) {
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  console.log(newString);
  if (newString === str) {
    console.log(`palindrom`);
  } else {
    console.log(`not palindrom`);
  }
}
reverseString(`madam`);

// Cara 2
const kata: string = "madam";
const isPalindrome: boolean = kata === kata.split("").reverse().join("")
console.log(isPalindrome);

// No 3
const cm: number = 100000 ;
console.log(cm / 100000 + " km");

// No 4
const number = 1000;
console.log(number.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
  })
);


// No 5
const nama: string = "Hello world";
console.log(nama.slice());

function remove_first_occurrence(str, searchstring) {
  var index = str.indexOf(searchstring);
  if (index === -1) {
    return str;
  }
  return str.slice(0, index) + str.slice(index + searchstring.length);
}
console.log(remove_first_occurrence("Hello world", "ell"));

// No 6
const nama1 = "hello world";
const words = nama1.split(" ");

for (let i = 0; i < words.length; i++) {
  words[i] = words[i][0].toUpperCase() + words[i].slice(1);
}
console.log(words.join(" "));

// // No 7
// const str = "The QuiCk BrOwN Fox";
// const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const LOWER = "abcdefghijklmnopqrstuvwxyz";
// const result = [];

// for (let i = 0; i < str.length; i++) {
//   if (UPPER.indexOf(str[i]) !== -1) {
//     result.push(str[i].toLowerCase());
//   } else if (LOWER.indexOf(str[i]) !== -1) {
//     result.push(str[i].toUpperCase());
//   } else {
//     result.push(str[i]);
//   }
// }
// console.log(result.join(``));

// No 8
const max_townums_range = (x, y) => {
  if (x >= 20 && x <= 50) {
    if (x === y) {
      return "Numbers are the same";
    } else if (x > y) {
      return x;
    } else {
      return y;
    }
  } else {
    return "Numbers don't fit in range";
  }
};
console.log(max_townums_range(27, 42));

// No 9
const array = [42,27,18];
 
array.sort((a, b) => a - b);
 
for (let i = 0; i < 3; i++)
console.log(array[i]);

// No 10
const input: any =  "hello";

// No 11

