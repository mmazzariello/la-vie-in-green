"use strict";

const arr = [
  "http://www.recipepuppy.com/api/?i=tomato,broccoli",
  "http://www.recipepuppy.com/api/?i=onion,carrot",
  "http://www.recipepuppy.com/api/?i=zucchini,potato",
  "http://www.recipepuppy.com/api/?i=spinach,lettuce",
];

const getRecipes = () => {
  const urlUsingHerokuCorsServer = "https://cors-anywhere.herokuapp.com";
  const urlUsingLocalCorsServer = "http://localhost:8282";

  // Replace the url below with the local or the remote heroku one if you want to run the 
  // API using the local cors server or the remote cors server. 
  //       👇
  return fetch(
    `${urlUsingLocalCorsServer}/${arr[Math.floor(Math.random() * arr.length)]}`
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

awaitAll(2, getRecipes)
  .then((results) => {
    for (let i = 0; i < results.length; i++) {
      results[i].forEach((recipe) => {
        if (recipe.thumbnail !== "") {
          const article = document.createElement("article");

          article.innerHTML = `
          <h3>${recipe.title}</h3>
        <img src="${recipe.thumbnail}" alt="${recipe.title}" />
          <p>${recipe.ingredients}</p>`;

          section.appendChild(article);
        }
      });
    }
  })
  .catch((e) => console.error(e));
