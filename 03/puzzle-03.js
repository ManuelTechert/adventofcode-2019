var fs = require("fs");
var arr1 = fs.readFileSync("./input1.txt", "utf8").split(",");
var arr2 = fs.readFileSync("./input2.txt", "utf8").split(",");

function getWirePositions(input){
    let x=0;
    let y=0;
    result = [];
    for (var i =0; i< input.length; i++){

        var instruc = input[i].split(",", 1).toString();
        var direction = instruc.substring("",1);
        var steps = instruc.substring(1);
        var intsteps = parseInt(steps);
    
        for(var j = 0; j<intsteps; j++){
            switch(direction){
                case "R":
                    x+=1;
                    break;
                case "L":
                    x -=1;
                    break;
                case "U":
                    y +=1;
                    break;
                case "D":
                    y -=1;
                    break;
                default:
                    break;
                
            }
            result.push([x,y]);
        }
    }
    return result;
}

function findIntersections(positions1,positions2){
    let intersections =[];
    for (i =0; i< positions1.length; i++){
        for (j =0; j< positions2.length; j++){
            if(positions1[i][0] == positions2[j][0] && positions1[i][1] == positions2[j][1]){
                intersections.push([positions2[j][0], positions2[j][1]]);
            }
        }
    }
    return intersections;
}

function calcManhattanDistance(intersections){
    let distances=[];
    for(var i=0; i<intersections.length; i++){
        let distance = Math.abs(intersections[i][0]) + Math.abs(intersections[i][1]);
        distances.push(distance);
    }
    return distances;
}


var wires1 = getWirePositions(arr1);
var wires2 = getWirePositions(arr2);
var intersections = findIntersections(wires1,wires2);
var distances = calcManhattanDistance(intersections);

console.log(Math.min(...distances));



