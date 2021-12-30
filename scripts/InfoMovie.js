import Movies from "../data/data.js";

//traer local strorage y data

let info = document.getElementById("container-infomovie");
let title = document.querySelector('title')

function detalleMovie() {
 
  info.innerHTML = "";
  const movieId = JSON.parse(localStorage.getItem("MovieId"));
  const dataObj = movieId !== null ? JSON.parse(movieId) : [];
  
  Movies.forEach((movie) => {
  
    if (movie.id == dataObj) {
      title.innerHTML=movie.name;
      info.innerHTML += `
    <div>
      <div class="container-movi m-5>
      <div class="container-fluid movie">
      <div class="container m-auto mb-5 mt-5 p-b ">
        <div class="row">
          <div class="col">
            <div class="pt-3">
              <!--padding-->
             
              <h3 id="nameMovie" class="ml-5 mt-3">${movie.name} </h3>
              <h6 id="duracion" class="card-title mt-3 mb-3">Duración: ${movie.duracion}</h6>
              <p class="card-text">${movie.descripcion}</p>
              </div>
              </div>
              <div class="col">
              <div class="container-form ">
              <img src="${movie.image}" class="card-img " alt="${movie.name}">
              </div>
              </div>
              </div>
              </div>
           `;
           
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  detalleMovie();
})


