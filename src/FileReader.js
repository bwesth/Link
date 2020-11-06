const fs = require("fs");
let files = [];

function readFile(fileName) {
  return new Promise((resolve) => {
    fs.readFile(fileName, "utf8", function (err, data) {
      if (err) throw err;
      const array = data.toString().split("\n");
      files.push(array);
      console.log(files);
    });
    resolve();
  });
}

async function run() {
  await readFile("./Lessons/Components/Level1/Component101.svelte");
}

run();

