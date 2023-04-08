const Pelicula = require("../models/pelicula");

exports.GetAddPelicula = (req, res, next) => {

    res.render("admin/save-pelicula", {
        pageTitle: "Añadir Nueva Peliculas",
        AddMovieActive: true,
        editMode: false,
    });
};


exports.GetAdminPelicula = (req, res, next) => {

    Pelicula.GetAll = (pelis) => {

        res.render("admin/lista-pelis", {

            pageTitle: "Admin Movies",
            AddMovieActive: true,
            mov: pelis,
            hasMovies: pelis.length > 0,
        });
    };
};

exports.PostAddPelicula = (req, res, next) => {

    const titulo = req.body.titulo;
    const urlImg = req.body.urlImg;
    const genero = req.body.genero;
    const descripcion = req.body.descripcion;
    let activo = true;
    const Peliculas = new Pelicula(null, titulo, urlImg, genero, descripcion, activo);
    Peliculas.Save();
    res.redirect("/");
};

exports.GetEditPelicula = (req, res, next) => {

    const id = req.params.movieId;
    const edit = req.query.editMode;

    if (!edit) {
        return res.redirect("/");
    }

    Pelicula.GetById(id, (peli) => {

        res.render("admin/save-pelicula", {
            pageTitle: "Editar peliculas",
            editMode: edit,
            Pelicula: peli,
        });
    });
};

exports.PostEditPelicula = (req, res, next) => {

    const id = req.body.movieId;
    const titulo = req.body.titulo;
    const urlImg = req.body.urlImg;
    const genero = req.body.genero;
    const status = req.body.activo;
    const descripcion = req.body.descripcion;
    let evalua;
    let activo;

    if (status == "Si") {

        evalua = true;

    } else {

        evalua = false;
    }
    activo = evalua;
    const Peliculas = new Pelicula(id, titulo, urlImg, genero, descripcion, activo);
    Peliculas.Save();
    res.redirect("/");
};

exports.EliminarPelicula = (req, res, next) => {

    const id = req.body.movieId;

    Pelicula.Delete(id);

    res.redirect("/admin/pelicula");

};

exports.GetIndex = (req, res, next) => {

    Pelicula.GetAll(function(pelis) {

        res.render("admin/index", {

            pageTitle: "Generado",
            pelis: pelis,
            hasMovies: pelis.length > 0,
            MovieActive: true,
        })
    });
}