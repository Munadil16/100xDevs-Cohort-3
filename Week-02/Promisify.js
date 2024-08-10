// Promisified SetTimeout method

const promisifiedSetTimeOut = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello");
    }, 2000);
  });
};

promisifiedSetTimeOut().then((data) => console.log(data));

// Promisified fs.readFile method

const fs = require("fs");

const promisifiedReadFile = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf-8", function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

promisifiedReadFile("a.txt")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// fetch method is already promisifed, as it return Promise!
