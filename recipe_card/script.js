// use DOM to access Nodes
let name = document.getElementById('recipe-name');
let servings = document.getElementById('serving-size');
let list = document.getElementById('ingredient-list');
let item = document.querySelector('.ingredient-item');


// Recipe Object
let recipe = {
    name: 'Gluten-Free Chocolate Chip Cookies',
    servings: 12,
    ingredients: ['Almond Butter', 'Sugar', 'Egg', 'Vanilla Extract', 'Baking Soda', 'Kosher Salt','Chocolate Chips'],
    amountIngredients: ['1 cup', '3/4 cup', '1', '1 teaspoon', '1 teaspoon', '1 teaspoon', '3/4 cups'],
}


const showRecipe = function(){

    name.innerText = recipe["name"];
    servings.innerText = recipe.servings;
  
    let text = "";
    let x;
    for (x in recipe.ingredients){
        text += "<i class='fas fa-shopping-cart'></i>" + " " + recipe.amountIngredients[x] + " - " + recipe.ingredients[x] + "<br>";
    }
    item.innerHTML = text;

}

