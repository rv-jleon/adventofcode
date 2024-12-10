const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) throw err;

  // Split the data into an array of strings
  const lines = data.trim().split("\n");

  const leftColumn = [];
  const rightColumn = [];
  const numbers = lines.map(line => {
    const [left, right] = line.split(/\s+/).map(Number);
    leftColumn.push(left);
    rightColumn.push(right);
  });

  const sortedLeftColumn = leftColumn.sort((a, b) => a - b);
  const sortedRightColumn = rightColumn.sort((a, b) => a - b);
  
  let total = 0;
  sortedLeftColumn.map((left, index) => {
    const right = sortedRightColumn[index];
    total += Math.abs(right - left);
  });

  console.log(total);
});