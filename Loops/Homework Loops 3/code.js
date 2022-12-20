let firstNames = [`Stefan`, `Zoran`, `Sara`, `Mario`, `Sanja`];
let lastNames = [`Ivanov`, `Popov`, `Nikolovska`, `Cvetkovski`, `Ristevska`];

function bookOfNames (first, last){
    let fullNames = [];
    for (let name = 0; name<first.length; name++){
        fullNames.push(`${name + 1}. ${first[name]} ${last[name]}`);
    }
    return fullNames;
}

console.log(bookOfNames(firstNames, lastNames));