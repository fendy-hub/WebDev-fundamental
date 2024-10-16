// No 1
class BankQueue {
    queue: string[];

    constructor() {
        this.queue = []
    }

    enqueue(customer: string) {
        return this.queue.push(customer)
        console.log(`Customer ${customer} has been added to the queue`);
    }

    dequeue() {
        return this.queue.shift();
    }

    size() {
        return this.queue.length;
    }
}

const Bank = new BankQueue();

console.log(Bank.enqueue("Customer1"));
console.log(Bank.enqueue("Customer2"));
console.log(Bank.enqueue("Customer3"));
console.log(Bank.enqueue("Customer4"));
console.log(Bank.enqueue("Customer5"));
console.log(Bank.enqueue("Customer6"));
console.log(Bank.enqueue("Customer7"));
console.log(Bank.enqueue("Customer8"));
console.log(Bank.enqueue("Customer9"));
console.log(Bank.enqueue("Customer10"));

console.log(Bank.size());

console.log(Bank.dequeue());
console.log(Bank.dequeue());
console.log(Bank.dequeue());
console.log(Bank.dequeue());

console.log(Bank.size());

// No 2
class Train {
    passenger: number;
    masinis: string;
    maximum: number;

    constructor(masinis: string, passenger: number) {
        this.passenger = passenger;
        this.masinis = masinis
        this.maximum = 10;
    }

    isFull() {
        return this.passenger >= this.maximum
    }

    isEmpty() {
        return this.passenger === 1;
    }

    showPassenger() {
        return this.passenger
    }

    passengerIn(name: string) {
        if (this.isFull) {
            return "add passenger";
        }
    }

    passengerOut(name: string) {
        if (this.isEmpty) {
            return "remove passenger succes";
        }
    }
}

const train = new Train("passenger1", 10);

// train.push("passenger1", 1);

console.log(train);

console.log(train.passengerIn("joko"));

console.log(train.showPassenger());


console.log(train.showPassenger());



