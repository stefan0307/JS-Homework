let userRecipeTitle = prompt('Whats the name of your recipe?');
function addRecipeName (name){
    let title = document.getElementById(`table-head`);
    title.innerHTML += `<th>${name}</th>`;
}

let numberOfIngredients = parseInt(prompt(`How many ingredients does your recipe have?`));

function addRecipeIngredients (numberForRecipe){
    let ingredients = document.getElementById(`ingredient`);

    for (let i = 0; i < numberForRecipe; i++){
        let userIngredients = prompt(`Enter the ${i+1} ingredient:`);
        ingredients.innerHTML += `<tr>
        <td><hr>${i+1}. ${userIngredients}</hr></td>
        </tr>`;
    }
}

addRecipeName(userRecipeTitle);
addRecipeIngredients(numberOfIngredients);