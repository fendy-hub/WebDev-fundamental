// No 1
const checkObjectequal = (obj1: any, obj2: any) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  
  if (keys1.length !== keys2.length) {
    return false;
 }
 for (const key of keys1) {
   if (obj1 !== obj2) {
     return false;
    }
  }

  return true;
};

const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, b: 1 };
console.log(checkObjectequal(obj1, obj2));

// No 2
const intersection = (obj1: any, obj2: any) => {
  let duplicate = {};
  
  for (const key in obj1) {
      if (obj2.hasOwnProperty(key) && obj1[key] === obj2[key]) {
          duplicate[key]= obj1[key];
      }
  }
  
  return duplicate;
}

const objA = { a: 1, b: 2 };
const objB = { a: 1, c: 3 };

const result = intersection(objA, objB);
console.log(result);

// No 3
interface Student {
  name: string;
  email: string;
}

const combineArray = (arr1: Student[], arr2: Student[]) => {
  const combineArray = [...arr1, ...arr2];
  const temp: Student[] = [];

  for (let i = 0; i < combineArray.length; i++) {
    const existingStudent = temp.find(
      (value) => value.email === combineArray[i].email
    );

    if (!existingStudent) {
      temp.push(combineArray[i]);
    }
  }

  return temp;
};

const array1: Student[] = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 2", email: "student2@mail.com" },
];
const array2: Student[] = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 3", email: "student3@mail.com" },
];

console.log(combineArray(array1, array2));

// No 4
function switchValuesKeys(arr) {
  return arr.map(obj => {
    let swappedObj = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        swappedObj[obj[key]] = key;
      }
    }
    return swappedObj;
  });
}

const input = [{ name: 'David', age: 20 }];
const output = switchValuesKeys(input);
console.log(output);

// ======================================================

const switchKeyToValue = (data: any[]) => {
  const result: any[] = [];

  data.forEach((item) => {
    let temp: any = {};

    for (let key in item) {
      temp[item[key]] = key;
    }

    result.push(temp);
  });

  return result;
};

console.log(
  switchKeyToValue([
    { name: "David", age: 20 },
    { name: "David", age: 20 },
  ])
);

// No 5
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
    return n * factorial(n - 1);
  }

const num1 = 5;
const result2 = factorial(num1);
console.log(result2);

// ===========================================

const factorial1 = (n: number) => {
  if (n === 1) {
    return {
      steps: [1],
      total: 1,
    };
  } else {
    const next = factorial1(n - 1);
    console.log(next);

    return {
      steps: [n, ...next.steps],
      total: n * next.total,
    };
  }
};

const { steps, total } = factorial(5);
// console.log(steps.join(" x ") + " = " + total);
