let array = [2, 7, 11, 2, 53, 23, 3];

function printSum (array){
    let myList = document.getElementById("myList");
    myList.innerHTML = "<h3>The numbers are:</h3>"
    let sum = 0;
    let arrayNew = [];
    for (let i = 0; i<array.length; i++){
        myList.innerHTML += `<li>${i + 1}. <strong>${array[i]}</strong> </li>`;
        sum += array[i];
        arrayNew.push(array[i]);
    }
    myList.innerHTML += `<h4>The Sum of all the numbers is ${arrayNew.join('+')} = ${sum}</h4>`;
}

printSum(array);