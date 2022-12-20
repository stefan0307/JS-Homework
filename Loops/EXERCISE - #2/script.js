function findNumber(array, type){
    let result;
    if (type === `even`){
        for (let i = 0; i<=array.length; i++){
            if (i%2===0){
                result = console.log(i);
            }
        }
    } else if (type === `odd`){
        for (let i = 0; i<=array.length; i++){
            if (i%2!==0){
                result = console.log(i);
            }
        }
    } else {
        return `invalid input`;
    }
    return result;
}

let userInput = prompt(`Even or Odd?`);
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(findNumber(arr, userInput));