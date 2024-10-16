// No 2
// class Train {
//     container: string[]
//     maxSize: number;

//     constructor() {
//         this.container = ["masinis"];
//         this.maxSize = 11;
//     }

//     isFull() {
//         return this.container.length >= this.maxSize;
//     }

//     isEmpty() {
//         return this.container.length === 1;
//     }

//     showPassenger() {
//         return {
//             passenger: this.container
//             .filter{(value) => value !== "masinis"}
//             .join(", "),
//             remainingSeat: this.maxSize - this.container.length,
//         };
//     }

//     passengerIn(name: string) {
//         if (this.isFull()) {
//             return "train full";
//         }

//         if (this.container.includes(name)) {
//             return "passenger already exist";
//         }

//         this.container.push(name);
//         return "add passenger success";
//     }  

//     passengerOut(name: string) {
//         if (name === "masinis") {
//             return "cannot remove masinis"
//         }

//         if (this.isEmpty()) {
//             return "train is empty"
//         }

//         const index = this.container.indexOf(name);

//         if (index === -1) {
//             return "passenger not found"
//         }

//         this.container.splice(index, 1);

//         return "remove passenger success";
//     }
// }

// const KAI = new Train();

// console.log(KAI.passengerIn("joko"));
// console.log(KAI.passengerIn("joko"));
// console.log(KAI.passengerIn("joko"));
// console.log(KAI.passengerIn("joko"));
// console.log(KAI.passengerIn("joko"));
// console.log(KAI.passengerIn("joko"));
// console.log(KAI.passengerIn("joko"));
// console.log(KAI.passengerIn("joko"));
// console.log(KAI.passengerIn("joko"));
// console.log(KAI.passengerIn("joko"));

// console.log(KAI.showPassenger());

// console.log(KAI.passengerOut("joko"));
// console.log(KAI.passengerOut("joko"));

// console.log(KAI.showPassenger());
