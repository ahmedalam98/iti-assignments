var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

// a
console.log(
  fruits.every((fruit) => {
    return typeof fruit === "string";
  })
);

console.log("----------------");

// b
console.log(fruits.some((fruit) => fruit.startsWith("a")));

console.log("----------------");

// c
let filtered = fruits.filter(
  (fruit) => fruit.startsWith("b") || fruit.startsWith("s")
);
console.log(filtered);

console.log("----------------");

// d
let likedFruits = fruits.map((fruit) => `I like ${fruit}`);
console.log(likedFruits);

console.log("----------------");

// e
likedFruits.forEach((fruit) => console.log(fruit));
