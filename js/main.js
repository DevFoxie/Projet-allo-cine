fetch('./data/movies.json')
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.log('Response json : ', data)
    console.log(data[0].Title)

    let div = document.querySelector('.movies')
    data.forEach(movie => {
      div.innerHTML = div.innerHTML += `<div class="row">
            
            <div class="col s6 film_1"></div>
                <div class="row">

                <div class="col s12 m7 filmcard">
                <div id="bloc">
                <h1 class="header">${movie.Title}</h1>
                </div>
                <div class="card horizontal medium">
                  <div class="card-image">
                    <img src="${movie.Poster}">
                  </div>
                  <div class="card-stacked">
                    <div class="card-content">
                    <p>Année : ${movie.Year}</p>
                    <p>Sortie le : ${movie.Released}</p>
                    <p>Acteurs : ${movie.Actors}</p>
                    <p>Awards : ${movie.Awards}</p>
                    <p>Pays : ${movie.Country}</p>
                    <p>Réalisateur : ${movie.Director}</p>
                    <p>Genre : ${movie.Genre}</p>
                    <p>Langues : ${movie.Language}</p>
                    <p>Durée : ${movie.Runtime}</p>
                    </div>
                  </div>
                </div>
              </div>
            
                </div>
                <div class="row">
                    <div class="col s12 notation">
                    <img src="./Images/imdb.png" alt="imdb" class="imdb">${movie.Metascore} <img src="./Images/metacritic.png" alt="metacritic" class="metacritic">${movie.imdbRating}
                    </div>
                    <div class="col s12">
                    <div class="carousel" id="demo-carousel">
                    <a class="carousel-item" href="#one!"><img src="${movie.Images[0]}"></a>
                    <a class="carousel-item" href="#two!"><img src="${movie.Images[1]}"></a>
                    <a class="carousel-item" href="#three!"><img src="${movie.Images[2]}"></a>
                    <a class="carousel-item" href="#four!"><img src="${movie.Images[3]}"></a>
                    <a class="carousel-item" href="#five!"><img src="${movie.Images[4]}"></a>
                  </div>
                    </div>
                </div>
            </div>
            <hr>
        </div>`
    })
  })