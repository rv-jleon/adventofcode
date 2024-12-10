const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) throw err;

  // Extract all valid mul(x,y) patterns
  const regex = /mul\((\d+),(\d+)\)/g;
  let match;
  let sum = 0;
  let count = 0; // Counter for the number of matches

  while ((match = regex.exec(data)) !== null) {
    // Extract x and y, convert to numbers
    const x = parseInt(match[1], 10);
    const y = parseInt(match[2], 10);

    console.log(match[0]);
    // Multiply x and y and add to the sum
    sum += x * y;
    count++; // Increment the counter for each match
  }

  console.log(`Sum: ${sum}`);
  console.log(`Number of matches: ${count}`);
});