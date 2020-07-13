"use strict";

// function getIngredients () {
//   //

// const section = document.querySelector(".ingredient-list");

const getRecipes = () => {
  return fetch(
    `http://www.recipepuppy.com/api/?i=tomato,broccoli,onion,carrot,zucchini,potato,spinach,lettuce`
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
awaitAll(11, getRecipes)
  .then((results) => console.log("asyncFinished", results))
  .catch((e) => console.error(e));



// getIngredients();