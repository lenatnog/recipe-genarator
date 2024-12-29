function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 2,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instuctionsInput = document.querySelector("#user-instructions-input");
  let apiKey = "4ebab2t0fcb344b3cao02f08bf5ec9b1";
  let prompt = `User instructions: generate a recipe with ${instuctionsInput.value} as the main ingredient. Don't show the HTML marks`;
  let context =
    "You are a cooking expert enthusiastic about helping people learn how to cook. Your mission is to generate a short, simple, and easy-to-follow recipe in basic HTML. Ensure you follow the user instructions.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
