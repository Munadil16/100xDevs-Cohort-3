// Read a file, remove all the extra spaces and write it back to the same file.
// For example, if the file input was,
// hello     world    my    name   is       raman
// After the program runs, the output should be
// hello world my name is raman

import fs from "node:fs";

const promisifedWriteFile = (filename, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, data, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve("File cleaned!");
      }
    });
  });
};

const promisifedReadFile = (filename, encoding) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, encoding, function (err, data) {
      if (err) {
        reject(err);
      } else {
        const cleanData = data.replace(/\s+/g, " ").trim();
        resolve(cleanData);
      }
    });
  });
};

promisifedReadFile("NotSoCleanedFile.txt", "utf-8")
  .then((data) => promisifedWriteFile("NotSoCleanedFile.txt", data))
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
