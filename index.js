const recipeContainer = document.getElementById('recipeContainer');
const searchBtn = document.getElementById('searchBtn');
async function fetchRecipes(query) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const data = await response.json();
    displayRecipes(data.meals);
}

function displayRecipes(recipes) {
    recipeContainer.innerHTML = '';
    if (recipes) {
        recipes.forEach(recipe => {
            const recipeDiv = document.createElement('div');
            recipeDiv.classList.add('recipe');
            recipeDiv.innerHTML = `<img src="${recipe.strMealThumb}" alt="${recipe.strMeal}">
            <h3><a href="${recipe.strSource}" target="_blank" class="viewRecipeBtn">${recipe.strMeal}</a></h3>`;
            recipeContainer.appendChild(recipeDiv);
        });
    } else {
        recipeContainer.innerHTML = '<p>No recipes found. Please try another search.</p>';
    }
}
searchBtn.addEventListener('click', () => {
    const query = document.getElementById('search').value;
    if (query) {
        fetchRecipes(query);
    }
});
