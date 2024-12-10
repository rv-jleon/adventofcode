
const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) throw err;

  // Extract all valid mul(x,y) patterns
  const regex = /mul\((\d+),(\d+)\)|do\(\)|don't\(\)/g;
  let match;
  let sum = 0;
  let count = 0; // Counter for the number of matches
  let mulEnabled = true; // Track whether mul instructions are enabled

  while ((match = regex.exec(data)) !== null) {
    if (match[0] === "do()") {
      mulEnabled = true;
    } else if (match[0] === "don't()") {
      mulEnabled = false;
    } else if (mulEnabled) {
      // Extract x and y, convert to numbers
      const x = parseInt(match[1], 10);
      const y = parseInt(match[2], 10);

      // Multiply x and y and add to the sum
      sum += x * y;
      count++; // Increment the counter for each match
    }
  }

  console.log(`Sum: ${sum}`);
  console.log(`Number of matches: ${count}`);
});