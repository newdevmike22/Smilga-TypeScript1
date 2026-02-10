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

// Union and Any Type
let tax: number | string = 10;
tax = 100;
tax = "$10";

// fancy name - literal value type
let requestStatus: "pending" | "success" | "error" = "pending";
requestStatus = "success";
requestStatus = "error";
// requestStatus = 'random';

// Type - "any"
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

const books = ["1984", "Brave New World", "The Spook Who Sat By The Door"];

let foundBook: string | undefined;

for (let book of books) {
  if (book === "1984") foundBook = book;
  foundBook = foundBook?.toUpperCase();
  break;
}

console.log(foundBook?.length);
