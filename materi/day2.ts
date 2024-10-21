// IF STATEMENT

// syntax
// if(condition){
// codeblock
//}

// const age: number = 17;

// // kondisi harus boolean (true / false)
// if (age >= 17) {
//   console.log("Anda bisa buat KTP");
//   // kalo if ga true >= 17 tidak akan muncul
// }

// // ELSE STATEMENT
// // -backup plan dari if statement

// const age1: number = 16;
// if (age1 >= 17) {
//   console.log("Anda bisa buat KTP");
// } else {
//   console.log("Anda belum bisa buat KTP");
// }

// ELSE IF STATEMENT

// const input: string = "A";
// const grade: string = input.toLowerCase();
// if (grade === "a") {
//   console.log("nilai bagus");
// } else if (grade === "b") {
//   console.log("lumayan");
// } else if (grade === "c") {
//   console.log("nilai buruk");
// } else {
//   console.log("nilai tidak diketahui");
// }

// SWITCH CASE
// const day: string = "senin";

// switch (day) {
//   case "senin":
//     console.log("Hari senin");
//     break;
//   case "selasa":
//     console.log("Hari selasa");
//     break;
//   case "rabu":
//     console.log("Hari rabu");
//     break;
//   default:
//     console.log("Hari tidak diketahui");
//     break;
// }

// shift + alt + F Windows

// LOGICAL OPERATOR
// && -> and
// || -> or
// !  -> not

// OR -> kalau salah 1 ada yg nilai true akan menghasilkan nilai true

const car = "bmw";

if (car === "bmw" || car === "gtr") {
  console.log("mobil jerman");
} else {
  console.log("mobil jepang");
}

// AND -> harus keduanya bernilai true agar menghasilkan nilai true

const umur: number = 18;
const punyaSIM: boolean = true;

if (umur >= 18 && punyaSIM) {
  console.log("boleh bawa kendaraan");
} else {
  console.log("belum boleh bawa kendaraan");
}

// NOT ->  membalikkan nilai boolean
const isSunny: boolean = false;
const isRaining: boolean = !isSunny;

console.log(isSunny);
console.log(isRaining);

// TERNARY OPERATOR
// shortcut untuk if else condition
// condition ? true : false

const str: string = "javascript";

if (str === "javascript") {
  console.log("javascript");
} else {
  console.log("not javascript");
}

console.log(str === "javascript" ? "javascript" : "not javascript");

// console.log(
//   "typescript"
//     ? str === "javascript"
//     : str === "javascript"
//     ? "typescript"
//     : "notfound"
// );

// LOOP STATEMENT (perulangan)
// rangkaian intrusksi yang dilakukan berulang kali hingga kondisinya
// tidak terpenuhi

// type loop : for loop, while loop, dan do while loop

// FOR LOOP -> mempunyai 3 statement
// statement 1 : menginisialisasikan variable dari looping itu sendiri
// statement 2 : mendefine kondisi dari looping tersebut
// statement 3 : kode yang di eksekusi diakhir setiap iterasi

// syntax : for (statement 1;statement 2;statement 3)
// code block yang akan diulang ulang
//}

// for (let i = 0; 1 <= 5; i++) {
//   for (let j = 0; j < 6; j++) 
//     console.log("hello world");
// }

// WHILE LOOP 

let i: number = 1;

while (i < 10) {
  console.log("Hello world");
  i++;
}

// DO WHILE LOOP

let count: number = 1;

do {
  console.log("ini iterasi ke: " + count);
  count++;
} while (count <= 5);

// BREAK
// untuk menghentikan sebuah loop

let sum: number = 0;
while(true) {
  console.log("sum : " + sum);
  
  if (sum >= 5) break;

  sum++;
}

// CONTINUE
// melakukan skip pada langsung

for (let i = 0; i < 5; i++) {
  if (i === 3) continue;

  console.log(i);
}

// git config --list
// git config --global user.name "vian.angelo6@gmail.com"