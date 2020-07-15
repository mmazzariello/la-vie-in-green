'use strict'

const getRecipesByIngredients = () => {
console.log("hola");

console.log(ingredientInput.value);

  return fetch(
    `https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?i=${ingredientInput}`)
  
    .then((res) => res.json())
    .then((data) => {
      return data.results;
    })
    .catch((error) => {
      console.log(error);
    });
};
  
  const buttonSearch = document.querySelector("#buttonsearch")
  const ingredientInput = document.querySelector("#formulario")


  buttonSearch.addEventListener('click', getRecipesByIngredients);







