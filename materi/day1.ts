// versi JS 
//const message = "Hello world";

// versi TS
// const message: string = "Hello world";

// string build in method

const nama: string = "Mela pergi ke pasar";
const nama2: string = " beli ikan";
const nama3: string = " Tuna";

console.log(nama.toLowerCase()); // cara langsung
console.log(nama.toUpperCase()); // cara langsung
console.log(nama.replace("S","o")) // cara langsung
console.log(nama.replaceAll("i","o")) // cara langsung
console.log(nama.split("")) // cara langsung
console.log(nama.split(" ")) // cara langsung
console.log(nama.concat(nama2)) // cara langsung
console.log(nama.slice()) // cara langsung

const nama1: string = nama.toLowerCase();
console.log(nama1); // cara di tampung dulu di variable

// TEMPLATE LITERALS / TEMPLATE STRING

const nama4: string = "Fendy";
const message1: string = `Welcome ${nama4}`

console.log(message1)
console.log("Welcome" + " " + nama4); // cara manual

// NUMBER BUILD IN METHOD

const angka: string = "2000";
console.log(typeof Number(angka));
console.log(typeof angka);
console.log(typeof parseInt(angka));
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

// Type conversion
const angka1: number = 20;
console.log(String(123));
console.log(angka1.toString());

// Boolean conversion
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean("false"));

// DATE DATA TYPES
const now = new Date();

console.log(now);

console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());
console.log(now.getTime());

// Set method
now.setDate(10);
now.setMonth(5);
now.setFullYear(2040)

console.log(now);

// BASIC OPERATER
// ada + pertambahan
// - pengurangan
// * perkalian 
// / pembagian
// % modulo sisa bagi
// ** pangkat

const a = 20;
const b = 10;
const c = a + b;
console.log(c)

console.log(1 + 1);
console.log(2 - 1);
console.log(2 * 4);
console.log(4 / 2);
console.log(9 % 2);
console.log(3 ** 2);

// MODIFY IN PLACE
// n = n + 2

let n: number = 4;
n += 2; // -> shortcut
// n = n + 2 // -> cara panjang

console.log(n);

// INCREMENT & DECREMENT
let counter: number = 2;

// counter++; // increment
counter--; // decrement

console.log(counter);

// POSTFIX & PREFIX
// postfix -> ditampilkan dulu baru ditambahkan
// prefix -> ditambahkan dulu baru ditampilkan

let counter2: number = 2;

// console.log(++counter2); // prefix
console.log(counter2++);

// COMPARISON OPERATOR

// console.log(5 == "5"); // pengecakan di valuenya saja
// console.log(5 === "5"); // pengecekan di value dan tipe data

console.log(5 > 2);
console.log(5 < 2);
console.log(5 <= 5);
console.log(5 < 5);

// MATH

// Math ceil -> membulatkan angka ke atas
console.log(Math.ceil(4.2));

// Math floor -> membulatkan angka ke bawah
console.log(Math.floor(4.7));

// Math round -> membulatkan ke bilangan bulat yang terdekat
console.log(Math.round(4.3));
console.log(Math.round(4.6))

// Math max -> mengembalikan angka terbesar dari sekumpulan angka
console.log(Math.max(1,2,3,4,5,6));

// Math min -> mengembalikan angka terkecil dari sekumpulan angka
console.log(Math.min(2,3,4,5,1,6));

// Math abs -> menghilangkan tanda negatif
console.log(Math.abs(-11));

// Math random -> menghasilkan angka acak antara 0 dan 1
console.log(Math.random());
