"use strict";

// function getIngredients() {
const getRecipes = () => {
  return fetch(
    `https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?i=tomato,broccoli,onion,carrot,zucchini,potato,spinach,lettuce`
  )
    .then((res) => res.json())
    .then((data) => {
    console.log("hola", data);
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

awaitAll(10, getRecipes)
  .then((results) => {
    for (let i = 0; i < results.length; i++) {
      results[i].forEach((recipe) => {
        if (recipe.thumbnail !== "") {
          // console.log(recipe);
          const article = document.createElement("article");
          article.innerHTML = `<h3>${recipe.title}</h3>
        <img src="${recipe.thumbnail}" alt="${recipe.title}" />
          <p>${recipe.ingredients}</p>`;
          section.appendChild(article);
        }
      });
      // for (let x = 0; x < results.length; x ++) {
      //   if (results[i][x].thumbnail !== "") {
      //  let recipe= results[i][x];
      //     article.innerHTML = `<h3>${recipe.title}</h3>
      //     <img src="${recipe.thumbnail}" alt="${recipe.title}" />
      //       <p>${recipe.ingredients}</p>`
      //   }
      // }
    }
    // .join("");
    // results
    //   .map((recipearray) => {
    // recipearray.map((recipe) => {
    //     if (recipe.thumbnail !== "") {

    //     }
    // })

    // })

    // console.log("asyncFinished", results);
  })
  .catch((e) => console.error(e));
// }

// getIngredients();
