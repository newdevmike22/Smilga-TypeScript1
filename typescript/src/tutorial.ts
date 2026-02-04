// Type Annotations and Type Inference

let awesomeName: string = "Doctor Funkenstein";
awesomeName = "Bootzilla";
awesomeName = awesomeName.toUpperCase();

let age: number = 16;
age = 16 + 2;
let girlName: string = "Suzy Q";

let soUnbelievable: boolean = false;
soUnbelievable = true;

console.log(`We love you ${awesomeName}!`);
console.log(`${girlName} just turned ${age} today.`);
console.log(`${awesomeName} is so funky!${soUnbelievable}`);

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
