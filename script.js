var multipleOf = prompt("Multiples of: ");
var numOfMultiples = prompt("Number of multiples of: " + multipleOf);

multipleOf = parseInt(multipleOf, 10);
numOfMultiples = parseInt(numOfMultiples, 10);

function genMult(multipleOf, numOfMultiples) {
    let multiples = [];
    for(let i = 1; i <= numOfMultiples; i++) {
        multiples.push(multipleOf * i);
    }
    return multiples;
}

const result = genMult(multipleOf, numOfMultiples);

console.log(result);