// No 1
class StudentData {
  students;
  constructor(students) {
    this.students = students;
  }

  calculate() {
    const scores = this.students.map((student) => student.Score);
    const ages = this.students.map((student) => this.calculateAge(student.Age));

    return {
      Score: {
        Highest: Math.max(...scores),
        Lowest: Math.min(...scores),
        Average: this.calculateAverage(scores),
      },
      Age: {
        Highest: Math.max(...ages),
        Lowest: Math.min(...ages),
        Average: this.calculateAverage(ages),
      },
    };
  }

  calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDifference = today.getMonth() - birth.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birth.getDate())
    ) {
      age--;
    }
    return age;
  }

  calculateAverage(array) {
    const sum = array.reduce((acc, val) => acc + val, 0);
    return sum / array.length;
  }
}

// Example usage:
const students = [
  { Name: "Siti", Email: "siti@gmail.com", Age: "2002-07-19", Score: 85 },
  { Name: "Bobi", Email: "bobi@gmail.com", Age: "2003-11-30", Score: 70 },
  { Name: "Joko", Email: "joko@gmail.com", Age: "2001-12-10", Score: 95 },
];

const studentData = new StudentData(students);
const results = studentData.calculate();

console.log(results);

// No 2
class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  toString(): string {
    return `${this.name} ($${this.price.toFixed(2)})`;
  }
}

class Transaction {
  private products: { product: Product; qty: number }[] = [];
  private total: number = 0;

  addToCart(product: Product, qty: number): void {
    this.products.push({ product, qty });
    this.total += product.price * qty;
  }

  showTotal(): number {
    return this.total;
  }

  checkout(): { products: { name: string; qty: number }[]; total: number } {
    const transactionData = {
      products: this.products.map(({ product, qty }) => ({
        name: product.name,
        qty,
      })),
      total: this.total,
    };

    // Reset for a new transaction
    this.products = [];
    this.total = 0;

    return transactionData;
  }
}

// Example usage
const apple = new Product("Apple", 0.5);
const banana = new Product("Banana", 0.3);
const orange = new Product("Orange", 0.8);

const transaction = new Transaction();

// Add products to the cart
transaction.addToCart(apple, 3); // 3 apples
transaction.addToCart(banana, 2); // 2 bananas
transaction.addToCart(orange, 1); // 1 orange

// Show total
console.log(`Current total: $${transaction.showTotal().toFixed(2)}`);

// Checkout
const finalData = transaction.checkout();
console.log("Transaction completed:");
console.log(finalData);
