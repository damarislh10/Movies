import movie from "../data/data.js"

// array object
let containermovies = document.getElementById("listMovies");


function listMoviesI(listMovies) {

  containermovies.innerHTML = "";
  const item= document.createElement('div')
  listMovies.forEach(movies => {
    item.innerHTML += `
     
        <div class="d-inline-flex container-info" >
        <div class="card bg-secondary m-3 " style= "width: 18rem;">
        <img class="card-img-top imageMovie" src="${movies.image}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title text-center">${movies.name}</h5>
            <button id='${movies.id}' id="verMovie" class="btn btn-primary butonVer"><a href="infoMovie.html">Ver ahora</a><button>
            </div>
        </div>
        </div>
       

        `;
  });
  
  containermovies.appendChild(item)
  eventDetalle()
}

const eventDetalle =()=>{
  movie.forEach(movies => { // toda la data 
    let botonDetalle= document.getElementById(movies.id)

    botonDetalle.addEventListener('click',()=>{
 
     localStorage.setItem('MovieId',JSON.stringify(movies.id))
    })
  })
}

document.addEventListener("DOMContentLoaded", () => {
  listMoviesI(movie)
});

