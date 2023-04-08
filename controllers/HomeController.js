const MovieModel = require("../models/pelicula");


exports.GetIndex = (req, res, next) => {

    MovieModel.GetAll(function(pelis) {

        res.render("movies/index", {

            pageTitle: "Peliculas",
            pelis: pelis,
            hasMovies: pelis.length > 0,
            MovieActive: true,
        })
    });
}


exports.GetMovie = (req, res, next) => {


    const movieId = req.params.movieId;

    MovieModel.GetById(movieId, (pelis) => {
        res.render("movies/detalles", {
            pageTitle: "Detalles",
            MovieActive: true,
            peli: pelis,
        });
    });
}

exports.GenerosFiltro = (req, res, next) => {

    const genero = req.body.genero;
    let filtro = false;

    if (genero == "Accion" || genero == "Terror" || genero == "Comedia" || genero == "Suspenso" || genero == "Documentales") {

        filtro = true;

    }
    
    MovieModel.FiltroGenero(genero, (peli) => {
        res.status(200).render("movies/filtro", {
            pageTitle: "Peliculas de " + genero,
            filtro: filtro,
            pelisF: peli,
            genero: genero,
            activom: true,
            hasMoviesF: peli.length > 0,
        });
    })
}