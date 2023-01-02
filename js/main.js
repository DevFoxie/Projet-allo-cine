fetch('./data/movies.json')
    .then(function(response){
        return response.json()
    })
    .then(function(data) {
        console.log('Response json : ', data)
        console.log(data[0].Title)

    let div = document.querySelector('.movies')
        data.forEach(movie => {
            div.innerHTML = div.innerHTML += `<div class="row">
            
            <div class="col s6 film_1"></div>
                <div class="row">

                <div class="col s12 m7">
                <h1 class="header">${movie.Title}</h1>
                <div class="card horizontal">
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
                    <div class="col">
                    <img src="./Images/imdb.png" alt="imdb" class="imdb">${data[0].Metascore} <img src="./Images/metacritic.png" alt="metacritic" class="metacritic">${data[0].imdbRating}
                    </div>
                    <div class="col">
                        <img src="${movie.Images}" alt="" class="image_2">
                    </div>
                </div>
            </div>
            <hr>
        </div>`
        })
})