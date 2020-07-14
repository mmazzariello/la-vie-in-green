"use strict";

// function getIngredients() {
const getRecipes = () => {
  return fetch(
    `https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?i=tomato,broccoli,onion,carrot,zucchini,potato,spinach,lettuce`
  )
    .then((res) => res.json())
    .then((data) => {
      return data.results;
    })

    .catch((error) => {
      console.log(error);
    });
};
function awaitAll(count, asyncFn) {
  const promises = [];
  for (let i = 0; i < count; ++i) {
    promises.push(asyncFn());
  }
  return Promise.all(promises);
}

const section = document.querySelector(".ingredients-list");

awaitAll(5, getRecipes)
  .then((results) => {
    const article = document.createElement("article");
    results
      .map((recipearray) => {
    recipearray.map((recipe) => {
        if (recipe.thumbnail !== "") {
          article.innerHTML = `<h3>${recipe.title}</h3>
          <img src="${recipe.thumbnail}" alt="${recipe.title}" />
            <p>${recipe.ingredients}</p>`
        }
    })

      })
      .join("");

    section.appendChild(article);
    console.log("asyncFinished", results);
  })
  .catch((e) => console.error(e));
// }

// getIngredients();
