let car = {
    "Marca": "Ford",
    "Rodas" : 4,
    "portas": 2,
    "Carroceria": "coupe"
}

let jsonToString = JSON.stringify (car);

console.log(jsonToString);

let stringToJson = JSON.parse(jsonToString);

console.log(stringToJson);