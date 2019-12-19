var fs = require("fs");
var modules = fs.readFileSync("./input.txt", "utf8").split("\n");

var mapped = Array.from(modules);
var fuel = 0;

mapped.forEach(m => 
  {
    var modulefuel = 0;
    var calc = m;
    while(Math.floor(calc/3)-2 > 0){
      calc = Math.floor(calc/3) -2;
      modulefuel +=calc;
    }
    fuel+=modulefuel;
  }
  );

console.log("Fuel required: " + fuel);