const args = process.argv;
console.log(args);

let sum = 0;

for (const arg of args) {
  const num = Number(arg);
  console.log(Number.isInteger(num)); // This will print true for integers, false for non-integers
  sum = sum + num;

}
console.log("arg", arg); // This will print the sum of all command line arguments as numbers
// Example usage: node sumArgs.js 1 2 3
console.log(sum); // This will print the sum of all command line arguments as numbers