fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=ed6c1ac8561d4ff8a0c8969668d448a6&query=breakfast&number=40&addRecipeInformation=true').then(function(result) {
  return result.json();
}).then(function(json) {
  console.log(json.results[0]);
  //displayResults(json);
});