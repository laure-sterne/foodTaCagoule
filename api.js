const apiKey = '__API_KEY__';
let numberOfResults = 10;

const result = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${mealTime}&number=${numberOfResults}&image=true&fillIngredients=true&addRecipeInformation=true&addRecipeInstructions=true`);
const json = await result.json();
displayResults(json);

function createListItem(selector, list, propertyItem) {
  let showedInformation = document.querySelector(selector)
  for (const element of list) {
    let listCreation = document.createElement('li');
    listCreation.textContent = `${element[propertyItem]}`;
    showedInformation.appendChild(listCreation);
  }
}

function displayResults(json) {
  const resultIndex = Math.floor(Math.random() * numberOfResults);

  let shownTitle = document.querySelector('.meal__title');
  shownTitle.textContent = json.results[resultIndex].title;

  let shownImage = document.querySelector('.meal__image');
  shownImage.src = json.results[resultIndex].image;

  createListItem('.ingredients__text', json.results[resultIndex].extendedIngredients, 'original');
  createListItem('.details__text', json.results[resultIndex].analyzedInstructions[0].steps, 'step');
}
