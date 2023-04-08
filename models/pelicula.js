const fs = require("fs");
const path = require("path");


const dataPath = path.join(
    path.dirname(require.main.filename),
    "data",
    "movies.json"
);

const GetAllMoviesFromFile = (callBack) => {

    fs.readFile(dataPath, (error, data) => {

        if (error) {

            callBack([]);
        } else {

            callBack(JSON.parse(data));
        }
    });
}

module.exports = class Movie {

    constructor(id, titulo, urlImg, genero, descripcion, activo) {

        this.id = id;
        this.titulo = titulo;
        this.urlImg = urlImg;
        this.genero = genero;
        this.activo = activo;
        this.descripcion = descripcion;
    }

    Save() {

        GetAllMoviesFromFile((movie) => {

            if (this.id) {

                const editMovie = movie.findIndex(

                    (Mov) => Mov.id === this.id
                );

                movie[editMovie] = this;
                fs.writeFile(dataPath, JSON.stringify(movie), (error) => {

                    console.log(error);
                });

            } else {

                this.id = Math.random().toString();
                movie.push(this);
                fs.writeFile(dataPath, JSON.stringify(movie), (error) => {

                    console.log(error);
                });
            }
        });
    }

    static GetAll(callBack) {

        GetAllMoviesFromFile(callBack);
    }

    static GetById(id, callBack) {

        GetAllMoviesFromFile((movies) => {

            const movie = movies.find((peli) => peli.id === id);
            callBack(movie);
        });
    }

    static Delete(id) {

        GetAllMoviesFromFile((movies) => {

            const movie = movies.find((peli) => peli.id === id);

            const newListMovie = movies.filter((pel) => pel.id !== id);

            fs.writeFile(dataPath, JSON.stringify(newListMovie), (error) => {

                console.log(error);
            });
        });
    }

    static FiltroGenero(genero, callback) {


        GetAllMoviesFromFile((movies) => {

            const movie = movies.filter((peli) => peli.genero === genero);
            callback(movie);
        });
    }
}