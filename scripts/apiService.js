"use strict";

function getIngredients() {
  const section = document.querySelector(".ingredients-list");
  const article = document.createElement("article");

  const getRecipes = () => {
    return fetch(
      `https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?i=tomato,broccoli,onion,carrot,zucchini,potato,spinach,lettuce`
    )
      .then((res) => res.json())
      .then((data) => {
        
        if ("${data.thumbnail}".length > 0) {
          article.innerHTML = data
            .map(
              (data) => ` <img src="${data.thumbnail}" alt="${data.name}" />
    <p>${data.ingredients}</p>
    <h3>${data.title}</h3>`
            )
            .join("");
        }

        section.appendChild(article);

        // return data.results;
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
  awaitAll(11, getRecipes)
    .then((results) => console.log("asyncFinished", results))
    .catch((e) => console.error(e));
}

getIngredients();
