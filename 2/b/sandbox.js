const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) throw err;

  // Split the data into an array of strings
  const lines = data.trim().split("\n");
  
  // Check if the digits are increasing or decreasing at a rate
  // of 1 to 3
  const valid = [];
  lines.forEach(line => {
    const digits = line.split(" ").map(Number);
    
    let isValid = true;
    let isIncreasing = digits[1] > digits[0];

    for (let i = 0; i < digits.length - 1; i++) {
      const diff = digits[i + 1] - digits[i];
      if (Math.abs(diff) < 1 || Math.abs(diff) > 3 || (isIncreasing && diff < 0) || (!isIncreasing && diff > 0)) {
        isValid = false;
        break;
      }
    }

    if (!isValid) {
      for (let j = 0; j < digits.length; j++) {
        let tempDigits = digits.slice(0, j).concat(digits.slice(j + 1));
        isValid = true;
        isIncreasing = tempDigits[1] > tempDigits[0];
        for (let i = 0; i < tempDigits.length - 1; i++) {
          const diff = tempDigits[i + 1] - tempDigits[i];
          if (Math.abs(diff) < 1 || Math.abs(diff) > 3 || (isIncreasing && diff < 0) || (!isIncreasing && diff > 0)) {
            isValid = false;
            break;
          }
        }
        if (isValid) break;
      }
    }

    if (isValid) {
      valid.push(line);
    }
  });

  console.log(valid.length);
});