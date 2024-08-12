// Write code to read contents of a file and print it to the console.
// You can use the fs library too as a black box, the goal is to understand async tasks.

import fs from "node:fs";

const promisifiedReadFile = (fileName, encoding) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, encoding, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

promisifiedReadFile("1-Counter.js", "utf-8")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// Try to do an expensive operation below the file read and see how it affects the output.
// Make the expensive operation more and more expensive and see how it affects the output.
for (let i = 0; i <= 1000000000; i++);
