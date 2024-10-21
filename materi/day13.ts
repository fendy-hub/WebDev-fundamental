// PROMISE & ASYNC AWAIT

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;

      if (success) {
        resolve("Data berhasil diambil");
      } else {
        reject("Terjadi kesalahan!");
      }
    }, 1000);
  });
}

// promise / tanpa async await
fetchData()
  .then((data) => {
    console.log(data);
    return "pp";
  })
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Promise selesai");
  });

// menggunakan async await
const getData = async () => {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getData();

// async function getData2() {}

const fetchData2 = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        return response.json();
    })
    .then((users) => {
        console.log(users);
    })
    .catch((error) => {
        console.log(error);
    });
};

fetchData2();

// menggunakan async await
const fetchData3 = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        console.log(users);
        return users;
    } catch (error) {
        console.log(error);
    };
};

fetchData3();

const user = {
    name: "budi",
    age: 40,
};

const userJSON = JSON.stringify(user); // merubah object javascript ke JSON

console.log(userJSON);

const parseJSON = JSON.parse(userJSON); // merubah JSON ke javascript object

console.log(parseJSON);

// Modules
// import { myFunc, name } from "./test";

// myFunc();

// console.log(name);

// HOISTING (masuk ujian) -> var & func declaration

// func expression
// testFuncExpression(); // gak bakalan bisa dipanngil sebelum penulisan function
const testFuncExpression = () => {};

// func declaration
testFuncDeclaration(); // ini bisa di pangggil sebelum penulisan function
function testFuncDeclaration() {} 