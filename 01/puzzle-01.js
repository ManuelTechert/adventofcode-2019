var fs = require("fs");
var modules = fs.readFileSync("./input.txt", "utf8").split("\n");

var mapped = Array.from(modules);
var fuel = 0;
mapped.forEach(m => 
  {
    const calc = Math.floor(m/3)-2;
    fuel += calc;
  });

console.log("Fuel required: " + fuel);