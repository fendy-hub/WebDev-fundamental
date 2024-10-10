// No 1
class Emmployee {
  name: string;
  totalHours: number;

  constructor(name: string, hours: number) {
    this.name = name;
    this.totalHours = hours;
  }
}

class FulltimeEmployee extends Emmployee {
  constructor(name: string, hours: number) {
    super(name, hours);
  }

  calculateSalary(): number {
    let salary: number;
    if (this.totalHours > 6) {
      salary = 75000;
    } else {
      salary = 100000;
    }

    return this.totalHours * salary;
  }
}

class PartTimeEmployee extends Emmployee {
  constructor(name: string, hours: number) {
    super(name, hours);
  }
  calculateSalary() {
    let salary: number;
    if (this.totalHours > 6) {
      salary = 30000;
    } else {
      salary = 50000;
    }

    return this.totalHours * salary;
  }
}

const fullTimeEmp = new FulltimeEmployee("Karyawan1", 24);
const fullTimeEmp1 = new PartTimeEmployee("Karyawan2", 24);

console.log(
  `Total salary for full time ${
    fullTimeEmp.name
  } Rp.${fullTimeEmp.calculateSalary().toLocaleString("id-ID")}`
);
console.log(
  `Total salary for part time ${
    fullTimeEmp1.name
  } Rp.${fullTimeEmp1.calculateSalary().toLocaleString("id-ID")}`
);

// No 2
