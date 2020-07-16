"use strict";

const getRecipesByIngredients = () => {
  const urlUsingHerokuCorsServer = "https://cors-anywhere.herokuapp.com";
  const urlUsingLocalCorsServer = "http://localhost:8282";

  const searchTerm = ingredientInput.value;

  // Replace the url below with the local or the remote heroku one if you want to run the 
  // API using the local cors server or the remote cors server. 
  //       👇
  return fetch(
    `${urlUsingHerokuCorsServer}/http://www.recipepuppy.com/api/?i=${searchTerm}`
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.results.length === 0) {
        alert(`We couldn't find any results for the ingredient: ${searchTerm}`);
      }

      if (data.results && data.results.length > 0) {
        section.innerHTML = "";
      }
      data.results.forEach((recipe) => {
        if (recipe.thumbnail !== "") {
          const article = document.createElement("article");

          article.innerHTML = `
              <h3>${recipe.title}</h3>
            <img src="${recipe.thumbnail}" alt="${recipe.title}" />
              <p>${recipe.ingredients}</p>`;

          section.appendChild(article);
        }
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

const buttonSearch = document.querySelector("#buttonsearch");
const ingredientInput = document.querySelector("#formulario");

buttonSearch.addEventListener("click", getRecipesByIngredients);
