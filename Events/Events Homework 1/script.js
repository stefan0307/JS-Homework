let btn = document.querySelector(`#btn`);

btn.addEventListener("click", function createTable() {
    let tableBody = document.querySelector(`#tbody`);
    
    let numberOfRows = parseInt(prompt(`How many rows should this table have?`));
    let numberOfColmns = parseInt(prompt(`How many colmns should this table have?`));
    function makingTable (rows, colmns){
        for (let i = 0; i < rows; i++){
            tableBody.innerHTML += `<tr></tr>`;
            let row = tableBody.children[i];
            for (let k = 0; k < colmns; k++){
                row.innerHTML += `<td>Row${i + 1} Column${k + 1}</td>`; 
            }
        }
    }
    makingTable(numberOfRows, numberOfColmns);
});