// cara menuliskan object
// cara 1
const user = {};

// cara 2
const user2 = new Object();

// properties & method

interface User {
  // interface gak pake ( = )
  name: string;
  greet: () => void;
  gree2: () => void;
  hobby?: string; // optional
}
type User1 = {}; // type pake ( = )

const user3 = {
  name: "fendy",
  greet() {
    console.log("Hello");
  },
  greet2: () => {
    console.log();
  },
};

// add & delete property
const person: any = {
  name: "fendy", // name = value // "fendy" = keys
  age: 18,
};

console.log(person);
person.hobby = "Futsal"; // pake . (titik)
console.log(person);
person["Addres"] = "Jogja"; // pake square bracket [ ]
console.log(person);

// delete property
delete person.Addres;
console.log(person);

// accessing value
console.log(person.name);
console.log(person["hobby"]);

person.hobby = "billiard"; // untuk mengganti hobby
console.log(person);

console.log(Object.keys(person));
console.log(Object.values(person));

// IMMUTABLE & MUTABLE
// muttable : variale yang bisa diubah datanya (primitive data types)
// immmutable : object yang tidak bisa diubah saat dibuat (non primitive data types)

// mutable
const count: number = 4;
let count2: number = count;
count2 = 10;

console.log(count);
console.log(count2);

// immutable
let orang1: any = {
  name: "fendy",
};

// let orang2: any = orang1
let orang2: any = { ...orang1 };

orang2.age = 18;

console.log(orang1);
console.log(orang2);

// OPTIONAL CHAINING

// const test = {
//     name: "fendy"
//     address: {
//         street: "jl.magelang"
//         city: "Yogyakarta"
//     }
// }

const user4: any = {};

console.log(user4.address);
console.log(user4.address?.city); // kalo ga ada datanya pake ( ? ) optional

// FOR IN
const person2 = {
    name: "aceng",
    age: 90,
}
 for (const key in person2) {
    console.log(key);
    console.log(person2[key]);  
};

// DESTRUCTURING ASSIGMENT
// mengeluarkan property dalam object menjadi sebuah variable

// versi object
const person3 = {
    name: "aceng",
    age: 90,
};
console.log(person3.name);
console.log(person3.age);

const { name, age } = person3;

console.log(name);
console.log(age);

// versi destruc array
const array = [10, 20];
console.log(array[0]);
console.log(array[1]);

const [a, b] = [10 ,20]; // array posisi hrs sesuai

console.log(a);
console.log(b);

// SPREAD OPERATOR
// digunakan untuk copy isi object / menggabungkan object

const objectOne = {name: "Fendy", password: "Admin123"}
const objectTwo = {email: "email@gmail.com", name: "Joko"}

const result = {...objectOne, ...objectTwo}

console.log(result);

// THIS KEYWORD
// mengakses property lain di dalam sebuah object

const person4 = {
    firstName: "aceng",
    lastName: "resing",
    greet() {
        console.log(`Hello, ${this.firstName} ${this.lastName}`);
    },
};

person4.greet();

// CLASS
// template atau cetakan untuk membuat sebuah object

// class declaration
class User {
    greeting() {
        console.log("Hello world");
    }
};

// class expression
const User2 = class {
    greeting() {
        console.log("Hello world");
    }
};

// create an object from class
const human = new User();
const human2 = new User();

human.greeting();
human2.greeting();

// CONSTRUCTOR
// method bawaan dari class yang akan dijalankan pertama kalo saat kalian 
// membuat object baru menggunakan template class

class Person {
    name: string;
    #email: string;

    constructor(name: string, email: string) {
        this.name = name;
        this.#email = email;
    }
    greeting() {
        console.log(`Hello ${this.name}`);
        return `Hello ${this.name}`;
    }
    private showEmail() {
       - console.log(this.#email);
    }

    sendReminder() {
        return this.showEmail();
    }
}

const orang3 = new Person("Budi", "budi@gmail.com");

console.log(orang3.name);
// orang3.showEmail(); /// gak bakalan bisa karena showEmail adalah method private
// console.log (orang3.#email); // gak bakalan bisa karena email itu dibikin private

console.log(orang3.greeting());
// ACCESS MODIFIER -> public dan private

// GETTER & SETTER
// get -> baca data
// set -> set value di dalam object

const orang4 = {
    firstName: "Ujang",
    lastName: "resing",

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },

    set fullName(value) {
        // add more logic
        const split = value.split(" ");
        this.firstName = split[0];
        this.lastName = split[1];
    },
};

console.log(orang4.fullName); // menggunakan getter
orang4.fullName = "Budi Joko";
console.log(orang4.fullName);
// orang4.fullName("Jecky Siti");
console.log(orang4.fullName);

// Kapan menggunakan Getter dan setter

// Getter berguna ketika ingin mendapatkan nilai properti, tetapi kamu ingin menambahkan
// logika (misalnya, format atau validasi).

// Setter berguna ketika ingin memvalidasi atau menambahkan logika sebelum menetapkan
// nilai ke properti.

// Gunakan method biasa jika ingin tindakan lebih eksplisit atau jika fungsi tersebut
// melakukan lebih dari sekadar mengambil atau menetapkan nilai properti.

// ENCAPSULATION
// konsep di OOP untuk nge bundle data dalam 1 unit.
// contohnya adalah class dan object

// INHERITANCE
// perwarisan dari parent class ke child class.
// property dan method dari parent class bisa di akes oleh child class

class Product {
    productName: string;
    price: number;
    
    constructor(name: string, price: number) {
        this.productName = name;
        this.price = price;
    }
    
    readprice() {
        console.log(this.price);
        return this.price
    }
}

// tidak menggunakan konsep inheritance
// class book {
//     productName: string;
//     price: number;
//     author: string;

//     constructor(name: string, price: number, author: string) {
//         this.productName = name;
//         this.price = price;
//         this.author = author
//     }
// }
class book extends Product {
    author: string

    constructor(name: string, price: number, author: string) {
        super(name, price);
        this.author = author;
    }
}

const buku = new book("Cara jago ngoding", 100_000, "Aceng")

console.log(buku.price);
console.log(buku.productName);

// INSTANCE OF
// mengecek apakah sebuah object memiliki hubungan ke class tertentu

class Animal {}
class Rabbit extends Animal {}
class Tree {}

const rabbit = new Rabbit();

console.log(rabbit instanceof Animal);
console.log(rabbit instanceof Rabbit);
console.log(rabbit instanceof Tree);