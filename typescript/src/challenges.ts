/*

// ## Challenge 1
// - Create a variable of type string and try to invoke a string method on it.
// - Create a variable of type number and try to perform a mathematical operation on it.
// - Create a variable of type boolean and try to perform a logical operation on it.
let bassPlayer: string = "Bootsy Collins";
let amount: number = 35;
amount = amount + 4;
let isGrownAndSexy: boolean = true;
isGrownAndSexy = !isGrownAndSexy;

console.log(`${bassPlayer} is a great bass player.`);
console.log(`Rose just turned ${amount} on Saturday. She is now officially grown and sexy. ${isGrownAndSexy}`);

// ## Challenge 2
// - Create a variable discount of type number | string and assign it the value 20. Then, try to assign it the value '20%'.
// - Create a variable orderStatus of type 'processing' | 'shipped' | 'delivered' and assign it the value 'processing'. Then, try to assign it the values 'shipped' and 'delivered'.
let discount: number | string = 20;
discount = "20%";

let orderStatus: "processing" | "shipped" | "delivered" = "processing";
orderStatus = "shipped";
orderStatus = "delivered";

console.log(`Dear client, you just received a ${discount} discount off your next order.`);
console.log(`Dear client, your order has been ${orderStatus}.`);

// ## Challenge 4
// - Create an array temperatures of type number[] and assign it some values. Then, try to add a string value to it.
// - Create an array colors of type string[] and assign it some values. Then, try to add a boolean value to it.
// - Create an array mixedArray of type (number | string)[] and assign it some values. Then, try to add a boolean value to it.
let temperatures: number[] = [60, 75, 15];
console.log(`Today it's a lovely ${temperatures[1]} degrees outside.`);
//temperatures.push('rain');

let temperaturesTwo: (number | string)[] = [80, 65, 15, "minus five"];
console.log(`Today it's a frigid ${temperaturesTwo[3]} degrees outside.`);

let colors: string[] = ["black", "blue", "red", "gold", "silver"];
colors.push("green");
// colors.push(true);

console.log(`Here is a list of the colors our client wants to choose from: ${colors}.`);

let mixedArray: (number | string)[] = [48, "chocolate cake"];
// colors.push(false);

console.log(`Chuck wants a ${mixedArray[1]} for his ${mixedArray[0]}th birthday party.`);

// ## Challenge 5
// - Create an object bike of type { brand: string, year: number } and assign it some values. Then, try to assign a string to the year property.

let bike: { brand: string; year: number } = { brand: "Yamaha", year: 2015 };
// bike.year = 'speed';
let laptop: { brand: string; year: number } = { brand: "Apple", year: 2025 };
// laptop.year = 'power';

console.log(bike);
console.log(laptop);

let product1 = { title: "shirt", price: 25 };
let product2 = { title: "pants" };
let products: { title: string; price?: number }[] = [product1, product2];

console.log(products);

*/
