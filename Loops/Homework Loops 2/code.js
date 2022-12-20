let arr = [3, 5, 6, 8, 11, 2, `3`, `4`, `323`, true];

function sumMinMax (array){
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number' || Number.isNaN(array[i])) {
            newArray.push(array[i]);
        } else {
            newArray.splice(i);
        }
    }
    let max = newArray[0];
    let min = newArray[0];
    for (i=0; i<newArray.length; i++){
        if (newArray[i]>max){
            max = newArray[i];
        }
        if (newArray[i]<min){
            min = newArray[i];
        }
    }
    let sum = min + max;
    return sum;
}

console.log(sumMinMax(arr));