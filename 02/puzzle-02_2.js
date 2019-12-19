const intcode = (noun, verb) => {

var fs = require("fs");
var arr = fs.readFileSync("./input.txt", "utf8").split(",");

arr = arr.map(Number);
arr[1] = noun; 
arr[2] = verb;

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
    if(arr[0] == 19690720){
        console.log("Inputs are: " + noun + " and " + verb);
        console.log("First position: is " + arr[0]);
        var answer = 100 * noun + verb;
        console.log("Answer is: " + answer);
    }
}

for(var noun = 0; noun < 100; noun++)
{
     for(verb = 0; verb < 100; verb++)
     {
        intcode(noun, verb);
     }
}
