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
