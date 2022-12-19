let numbers = [2, 200, 5, 6, 22];

function sumCalculator (array){
    let result = array[0] + array[1] + array[2] + array[3] + array[4];
    for (let i = 0; i < array.length; i++){
        if (Number.isNaN(array[i]) || typeof array[i] !== `number`) {
          console.log(`Invalid input`);
            return;
        } else {
           console.log(result);
        }
    }
}

sumCalculator(numbers);