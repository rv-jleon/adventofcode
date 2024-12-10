const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) throw err;

    // Split the data into an array of strings
    const lines = data.trim().split("\n");

    // Split up the numbers on each line into two separate arrays
    // and convert them to numbers
    const leftColumn = [];
    const rightColumn = [];
    lines.map(line => {
      const [left, right] = line.split(/\s+/).map(Number);
      leftColumn.push(left);
      rightColumn.push(right);
    });

    // Find similarity score. First, see how many times a number is in the
    // other column. Then, multiply the number by how many times it is in the
    // other column. Add up all the results.
    let total = 0;
    leftColumn.map((left) => {
      const similarity = rightColumn.filter(num => num === left).length;

      if (similarity > 0) {
        total += left * similarity;
      }
    })

    console.log(total);
});