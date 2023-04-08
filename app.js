const express = require("express");
const path = require("path");
const app = express();
const expressHbs = require("express-handlebars");
const ErrorController = require("./Controllers/ErrorController");

const determinar = require("./helpers/determinar");


const home = require("./routes/home");
const admin = require("./routes/admin")
app.engine("hbs", expressHbs({

    layoutsDir: "views/layouts",
    defaultLayout: "main-layout",
    extname: "hbs",
    helpers: {

        DeterminaAccion: determinar.OptieneAccion,
        DeterminaComedia: determinar.OptieneComedia,
        DeterminaSuspenso: determinar.OptieneSuspenso,
        DeterminaDocumentales: determinar.OptieneDocumentales,
        DeterminaTerror: determinar.OptieneTerror

    }
}));


app.set("view engine", "hbs");
app.set("views", "views");

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));


app.use(home);
app.use("/admin", admin);
app.use("/", ErrorController.Get404);

app.listen(5001);