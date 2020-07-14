"use strict";

function getIngredients() {
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
  const article = document.createElement("article");

  awaitAll(5, getRecipes)
    .then((results) => {
      article.innerHTML = results
        .map((recipe) => {
          if (recipe.thumbnail) {
            ` <img src="${recipe.thumbnail}" alt="${recipe.name}" />
            <p>${recipe.ingredients}</p>
            <h3>${recipe.title}</h3>`;
          }
        })
        .join("");

      section.appendChild(article);
      console.log("asyncFinished", results);
    })
    .catch((e) => console.error(e));
}

// getIngredients();
