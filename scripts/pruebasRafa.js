async function getResults() {
  const results = await fetch(
    "http://localhost:8282/http://www.recipepuppy.com/api/?i=tomato,broccoli"
  );
  console.log(results);
  return results;
}

getResults();

