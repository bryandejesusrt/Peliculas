const express = require("express");
const router = express.Router();
const adminController = require("../controllers/AdminController");

router.get("/pelicula", adminController.GetIndex);
router.get("/save-pelicula", adminController.GetAddPelicula);
router.post("/save-movie", adminController.PostAddPelicula);
router.post("/borrar", adminController.EliminarPelicula);
router.get("/editar/:movieId", adminController.GetEditPelicula);
router.post("/editar", adminController.PostEditPelicula);

module.exports = router;