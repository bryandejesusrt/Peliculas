const express = require("express");
const path = require("path");

const router = express.Router();

const homeController = require("../Controllers/HomeController");

router.get("/", homeController.GetIndex);

router.get("/movies/:movieId", homeController.GetMovie);

router.post("/movies", homeController.GenerosFiltro);
module.exports = router;