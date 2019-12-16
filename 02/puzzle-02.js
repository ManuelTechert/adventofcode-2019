var fs = require("fs");
var arr = fs.readFileSync("./input.txt", "utf8").split(",");

arr = arr.map(Number);
arr[1] = 12;
arr[2] = 2;
var i=0;

while(i < arr.length){
    switch(arr[i]){
        case 1:
            arr[arr[i+3]] = arr[arr[i+1]] + arr[arr[i+2]];
            break;
        case 2:
            arr[arr[i+3]] = arr[arr[i+1]] * arr[arr[i+2]];
            break;
        case 99:
            break;
        default:
            break;
    }
    i +=4;
}

console.log(arr);
console.log("First position: " + arr[0]);