// Arrays
let aunts: string[] = ["May", "Helen", "Barbara", "Celest"];
aunts.push("Alice");

let aunts2: string[] = ["Sarah", "Cat"];

console.log(`${aunts[0]} is my favorite aunt in the entire world!`);
console.log(`${aunts} and ${aunts2[1]} are all wonderful aunts.`);

let years: number[] = [1979, 1999, 2001, 2018, 2021, 1946];
let city: string[] = ["Cleveland", "Los Angeles", "St. Louis"];
console.log(`The Rams have played in the Super Bowl during the ${years} seasons.`);
console.log(`The Rams won their first Super Bowl in ${years[1]}.`);
console.log(`Not many people know that the Rams moved from ${city[0]} to ${city[1]} in ${years[5]}.`);

// Objects
let laptop: { brand: string; cost: number; expensive: boolean } = { brand: "Apple", cost: 1200, expensive: true };
console.log(laptop);

let car1 = { title: "BMW 228 Gran Coupe", price: 40000 };
let car2 = { title: "Lexus RX 350", price: 52000 };
let cars: { title: string; price: number }[] = [car1, car2];
console.log(cars);
