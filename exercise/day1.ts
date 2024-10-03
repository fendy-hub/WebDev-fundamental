// No 1
const panjang = 5;
const lebar = 3;
const hasil = 15;

let n: number = 5;
n*= 3;
console.log(n);


// No 2
const panjang1 = 5;
const lebar1 = 3;
const tambahan = 1;

const c = panjang1 * lebar1 + tambahan
console.log(c);


//No 3
const radius = 5;
// hasil
const diameter = 10;
const rumus = Math.PI;
const rumus2 = 2;
const circumference = 31.4159;
const area = 78.539;

let n2: number = 5;
n2*= 2;
console.log(n2); // diameter

const hasil2 = rumus2 * rumus * radius
console.log(hasil2); // circumference

const hasil3 = circumference * radius ** 2
console.log(hasil3); // area


// No 4
const sudutA: number = 80;
const sudutB: number = 65;
const sudutC: number = 180 - (80 + 65)

console.log(Math.abs(sudutC));


// No 5
// 400
const hari = 400
const tahun = Math.floor(400 / 365);
const bulan = Math.floor((400 % 365) / 30);
const tanggal = Math.floor((400  % 365) % 30);

console.log(tahun + " year " + bulan + " month " + tanggal + " day ");

// 366
const Tahun = Math.round (366 / 365);
const Bulan = Math.round ((366 % 365) / 30);
const Hari = Math.round ((366 % 365) % 30);

console.log(Tahun + " year " + Bulan + " month " + Hari + " day ");


// No 6
const date1 = new Date("2022-01-20");
const date2 = new Date("2022-01-22");
const difference = Math.abs (date2.getTime() - date1.getTime())
const bedahari: number = difference / (1000 * 3600 * 24)

console.log(bedahari);