const fs = require("fs");

function readFile(filename) {
  fs.readFile(filename, "utf8", function (err, data) {
    if (err) throw err;

    writeFile(filename, data.split("\n"));
  });
}

async function writeFile(filename, data) {
  file = filename.split(".");
  name = "." + file[0] + file[1] + ".js";
  let writeOutString = "export default [\n";

  for (let i = 0; i < data.length; i++) {
    let string = data[i].replace(/(\r\n|\n|\r)/gm, "");
    writeOutString = writeOutString + "'" + string + "',\n";
  }

  writeOutString = writeOutString + "]";

  fs.writeFile(name, writeOutString, function (err) {
    if (err) throw err;
  });
  console.log(">> " + name + " updated");
}

function run() {
  files = [
    "./src/Lessons/Components/Level1/C101.svelte",
    "./src/Lessons/Components/Level2/Box.svelte",
    "./src/Lessons/Components/Level2/App.svelte",
  ];

  for (let i = 0; i < files.length; i++) {
    readFile(files[i]);
  }
}

run();
