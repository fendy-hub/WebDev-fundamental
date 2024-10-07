// No 1 example
// No 1
const height = 4;
pyramid(height);

function pyramid(height: number): void {
  let currentNumber = 1;

  for (let i = 1; i <= height; i++) {
    let numbers = "";

    for (let j = 1; j <= i; j++) {
      numbers += currentNumber.toString().padStart(2, "0") + " ";
      currentNumber++;
    }
    console.log(numbers.trim());
  }
}

// No 2
const angka1 = 6;
const output1 = fizzBuzz(angka1);

function fizzBuzz(n: number): string[] {
  const result: string[] = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i.toString());
    }
  }
  return result;
}
console.log(output1.join(", "));

// No 3
const berat = 60; // kg
const tinggi = 1.70; // meter
const results = BMI(berat, tinggi);

function BMI(weight: number, height: number): string {
  const bmi = weight / height ** 2;

  if (bmi < 18.5) {
    return "less weight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    return "ideal";
  } else if (bmi >= 25.0 && bmi < 29.9) {
    return "overweight";
  } else if (bmi >= 30.0 && bmi < 39.9) {
    return "very overweight";
  } else {
    return "obesity";
  }
}
console.log(results);

// No 4
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const angkaGanjil = filterOddNumber(numbers);

function filterOddNumber(arr: number[]): number[] {
  return arr.filter((num) => num % 2 === 0);
}
console.log(angkaGanjil);

// No 5

// continue -> skip looping