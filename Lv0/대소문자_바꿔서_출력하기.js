const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = [line];
}).on("close", function () {
  const convert = (string) => {
    if (string === string.toUpperCase()) {
      return string.toLowerCase();
    } else {
      return string.toUpperCase();
    }
  };

  const arr = input[0].split("");
  input[0] = arr.map((item) => convert(item)).join("");

  console.log(input[0]);
});
