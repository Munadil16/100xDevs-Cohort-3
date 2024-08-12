// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

import fs from "node:fs";

const promisifedWriteFile = (fileName, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve("File updated.");
      }
    });
  });
};

promisifedWriteFile("dummyFile.txt", "Dummy text added!")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
