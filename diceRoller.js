const numDice = Number(process.argv[2]);
const rolls = [];

for (let i = 0; i < numDice; i++) {
  const roll = Math.floor(Math.random() * 6) + 1;
  rolls.push(roll);
}

console.log(`Rolled ${numDice} dice: ${rolls.join(", ")}`);