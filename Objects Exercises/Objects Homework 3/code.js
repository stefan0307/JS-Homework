const person = {
    name: `Stefan`,
    lastName: `Ristov`,
    age: 22,
    height: 175
};

function checkProperty (object, property){
    if (object.hasOwnProperty(property)){
        return `The object does have ${property}`
    } else {
        return `The object doesnt have ${property}`
    }
}

console.log(checkProperty(person, `lastName`));