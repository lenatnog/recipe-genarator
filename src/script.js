function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "Ingredients and recipe",
    autoStart: true,
    delay: 2,
    cursor: "",
  });
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
