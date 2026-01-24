const searchButton = document.querySelector("#submit");
const inputBox = document.querySelector("#input");
const movieContainer = document.querySelector("#movie-character");

let time;
let movieTime;

const movieFunc = async function () {
  const title = inputBox.value;
  movieContainer.innerHTML = "";

  try {
    const response = await fetch(
      `https://www.omdbapi.com/?t=${title}&apikey=898e8da4`,
    );

    movieContainer.insertAdjacentHTML(
      "afterbegin",
      '<p id="new-item"> Loading....</p>',
    );
    const data = await response.json();

    const removeLoading = document.querySelector("#new-item");
    removeLoading.remove();
    //console.log(data);

    if (data.Response === "False") {
      movieContainer.innerHTML = "<p>Movie Not Found...</p>";
    } else {
      const viewTime = function () {
        time = Number(data.Runtime.slice(0, 3));
        movieTime = `${Math.trunc(time / 60)}h ${time % 60}m `;
      };
      viewTime();
      movieContainer.insertAdjacentHTML(
        "afterbegin",
        `
        <h1>${data.Title} (${data.Year})</h1>
        <h4>Rating: ${data.Ratings[0].Value}</h4>
        <h4>${movieTime}</h4>
        <img src="${data.Poster}" alt="${data.Title}">
        <p>${data.Plot}</p>
      `,
      );

      inputBox.value = "";
    }
  } catch (err) {
    console.error(err.message);
  }
};

searchButton.addEventListener("click", movieFunc);

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") movieFunc();
});

