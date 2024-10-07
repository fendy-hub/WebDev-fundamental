// Array

// const arr = []; // cara 1
// const arr1 = new Array(); // cara 2

// const arr: string[] = ["A", "B", "C"];
// const arr4: string[] = new Array("A", "B", "C");

// const arr3: number[] = [1, 2, 3, 4];
// const arr5: number[] = new Array(1, 2, 3, 4);

// array of object

// const students = { name: String; email: String }[] = [
//     { name: "mela", email: "mela@gmail.com"}
//     { name: "mala", email: "mala@gmail.com"}
//     { name: "meli", email: "meli@gmail.com"}
// ];

// Pascalcase
// Sinnguular

// interface murid {
//   name: String;
//   email: String;
// }
// type student = {
//   name: String;
//   email: String;
//   hobby?: String;
//   address?: {
//     // tanda ( ? ) optional
//     street?: String;
//     city?: String;
//   };
// };

// const students: student[] = [
//   { name: "mela", email: "mela@gmail.com", hobby: "menyanyi" },
//   {
//     name: "mala",
//     email: "mala@gmail.com",
//     address: {
//       street: "Taruko",
//       city: "Padang",
//     },
//   },
//   { name: "meli", email: "meli@gmail.com" },
// ];

// FOR OF
// const fruits: string[] = ["Apple", "Banana", "Orange"];

// for (const fruit of fruits) {
//   console.log(fruit);
// }

// const numbers: number[] = [1, 2, 3, 4, 5, 6];
// let total: number;

// for (const number of numbers) {
//   total += number;
// }
// console.log(total);

// FUNCTION
// ada 2 cara untuk menuliskan fungsi
// 1. function declaration
// function square(bebas: number) {
//   // parameter
//   return bebas * bebas;
// }

// const result = square(12);
// const result1 = square(45); // argument

// console.log(result);
// console.log(result1);

// 2. function expression
// const square1 = function (bebas1: number) {
//   return bebas1 * bebas1;
// };

// const result2 = square1(4);
// const result3 = square1(6);

// console.log(result2);
// console.log(result3);

// FUNCTION SCOPE
// variable yang di define di dalam function hanya bisa diakses
// di dalam functionn tsb

// function greeting() {
//   const hello = "hello";
//   console.log(hello); // ini bisa
//   return hello;
// }
// console.log(hello); // ini ga bakalan bisa
// greeting();

// PARAMETER & ARGUMENT
// parameter -> variable yang mewakili value dari argument yang dimasukkan

// argument -> value yang dimasukkan saat pemanggilan function

//                             PARAMETER
function greetings(name: String) {
  const hello = "hello";
  return hello + " " + name;
}

//                            ARGUMENT
console.log(greetings("fendy"));
console.log(greetings("mela"));

// DEFAULT PARAMATER

function multiply(a: number, b: number = 2) {
  console.log(a);
  console.log(b);
  return a * b;
}
console.log(multiply(5));
console.log(multiply(6, 32));

// REST PARAMETER
// mewakili sisa argument ke dalam 1 sisa variable parameter

function myFunc(a: number, b: number, ...many: number[]) {
  console.log(a);
  console.log(b);
  console.log(many);
}
myFunc(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// NESTED FUNCTION
// function di dalam function

// outer function
function getMessage(firstname: string) {
  // inner function 1
  function sayHello() {
    return "Hello " + firstname + ",";
  }

  // inner function 2
  function welcomeMessage() {
    return "Welcome to Purwadhika";
  }

  return sayHello() + " " + welcomeMessage();
}

console.log(getMessage("fendy"));

// CLOSURE
// inner function selalu mempunyai akses ke variable dan parameter dari outer function bahkan
// setelah function tsb di return

function greeting2(name: string) {
  const defautMessage: string = "hello";

  return function () {
    return defautMessage + " " + name;
  };
}

const result4 = greeting2("fendy");

console.log(result4());

// RECURSIVE
// fungsi yang memanggil dirinya sendiri

function countDown(number: number) {
  console.log(number);

  let nextNumber = number - 1;

  if (nextNumber > 0) {
    countDown(nextNumber);
  }
}
countDown(10);

// ARROW FUNCTION
// shortcut untuk menuliskan function expression

// contoh function expression
const square2 = function (bebas1: number) {
  return bebas1 * bebas1;
};

// contoh jika diubah ke arrow function
const square3 = (bebas1: number) => {
  return bebas1 * bebas1;
};

// kalo misalnya cuman 1 line bisa di bikin kaya gini
const square4 = (number: number) => number * number;

// ARRAY BUILD IN METHOD

// JOIN -> menggabungkan value yang ada dalam array ke dalam bentuk string
const words: string[] = ["hello", "world"];
console.log(words.join(" "));

// POP -> menghilangkan isi value paling akhir dalam array
const words2: string[] = ["hello", "world", "hello"];
words2.pop();
console.log(words2);

// SHIFT -> menghilangkan value paling depan dalam array
const words3: string[] = ["test", "world", "hello"];
words3.shift();
console.log(words3);

// PUSH -> menambahkan value ke dalam array di paling akhir

// UNSHIFT -> menambahkan value ke urutan paing depan array
const words5: string[] = ["hello", "world"];
words5.unshift("padang");
console.log(words5);

// CONCAT > menggabungkan2 array menjadi 1 array
// const arr1: string[] = ["hello"];
// const arr2: string[] = ["world"];
// const arr3: string[] = ["dang"];

// console.log(arr1.concat(arr2));
// console.log(arr2.concat(arr1).concat(arr3));

// another option
// const mergeArr = [...arr1, ...arr2, ...arr3]; // spread
// console.log(mergeArr);

// SPLICE -> untuk menghapus, mengganti, atau menmabhakan
// value pada sebuah array
// rumus -> splice(startIndex, brpYgMaudiDelete, item)

const months: string[] = ["jan", "march", "april", "june"];

months.splice(1, 0, "feb"); // menambahkan pada index
console.log(months);

months.splice(4, 1); // menghapus pada index 4
console.log(months);

months.splice(3, 1, "may");
console.log(months);

// SLICE -> mereturn array baru dengan value yang sudah ditentukan
// inex start dan index end dari array tsb
// rumus: slice(startIndex, endIndex)

const fruits1: string[] = ["Apple", "Banana", "Orange", "Lemon", "mango"];
console.log(fruits1.slice(1, 4)); // dari depan
console.log(fruits1.slice(-4, -1)); // dari belakang

// INDEXOF -> mencari index dari value yang kita search
// kalo tidak ditemukan akan me-return -1

const fruits2: string[] = ["Apple", "Banana", "Orange", "Lemon", "mango"];
console.log(fruits2.indexOf("Lemon"));

// SORT -> mengurutkan isi array berupa string atau number

// versi string
const fruits3: string[] = ["Mango", "Apple", "Banana", "Orange", "Lemon"];
fruits3.sort();
console.log(fruits3);

// versi number
const points: number[] = [3, 5, 2, 6, 9];
points.sort();
console.log(points);

// versi number menggunakan compare function
const points2: number[] = [2, 5, 2, 9, 20];
points2.sort((a, b) => a - b); // asc (kecil ke besar)
// points2.sort((a, b) => b - a) // desc (besar ke kecil)
console.log(points2);

// REVERSE -> membalikkan urutan elemen dalam array
const points3: number[] = [2, 5, 3, 9, 20];
points3.reverse();
console.log(points3);

// FOREACH -> melakukan looping pada array tapi tidak me-return apapun
const fruits4: string[] = ["Mango", "Apple", "Banana", "Orange", "Lemon"];

const result5 = fruits4.forEach((fruit, index) => {
  console.log(index);
  console.log(fruit);
});

// MAP -> ,melakukan looping sama kaya forEach tapi me-return array baru
const fruits5: string[] = ["Mango", "Apple", "Banana", "Orange", "Lemon"];

const result7 = fruits5.map((fruit, index) => {
  return fruit;
});
console.log(result7);

// FILTER -> melakukan looping juga sama kaya map dan menghasilkan
// array array berdasarkan kondisi pada return function
const ages: number[] = [32, 15, 45, 12, 56, 40];
const result8 = ages.filter((age) => {
  return age > 18;
});
console.log(result8);

// FIND -> mencari value yang ditemukan pertama kali dalam array
const ages2: number[] = [3, 15, 45, 12, 56, 40];

const result9 = ages2.find((age) => age > 14);

console.log(result9);

// FINDINDEX -> mirip kaya find tapi yang dihasilkan adalah indexnya
const ages3: number[] = [3, 15, 45, 12, 56, 40];

const result10 = ages3.findIndex((age) => age > 14);

console.log(result10);

// REDUCE -> biasa digunakan untuk melakukan operasi aritmatika pada tiap isi array
const numbers1: number[] = [175, 50, 25];

const result11 = numbers1.reduce((a, b) => a + b);

console.log(result11);

// INCLUDES -> mengecek value pada array ada apa tidak. Hasil retur nya adalah boolean
const fruits6: string[] = ["Mango", "Apple", "Banana", "Orange", "Lemon"];

console.log(fruits6.includes("Banana"));
