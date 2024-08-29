const fruitPieces = function(fruit){
    return fruit;
}

const fruitProcessor = function(apples, organges){
    const applePieces = fruitPieces(apples);
    const organgePieces = fruitPieces(organges);
    const juice = `Juice with ${apples} apples and ${organges} organges`;
    return juice;
}

let applesInput = prompt("How many apples?");
let organgesInput = promt("How many oranges");
console.log(fruitProcessor(applesInput,organgesInput));


