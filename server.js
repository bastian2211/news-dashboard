require("dotenv").config();
const express = require("express"),
  expressHandlebars = require("express-handlebars"),
  bodyParser = require("body-parser"),
  routing = require("./routes"),
  session = require("express-session");

const server = express();

server.set("viewDir", "views");

server.use(express.static("public"));

server.use(
  session({
    secret: process.env.SESSION_SECRET || "PleASe_SET_seSSIon_SECret",
    resave: false,
    saveUninitialized: true,
  })
);
server.use((req, res, next) => {
  res.locals.isLoggedIn = req.session && req.session.isLoggedIn;
  res.locals.user = req.session && req.session.user;
  next();
});

server.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

server.use(bodyParser.json());

server.engine(
  "html",
  expressHandlebars({
    extname: "html",
    partialsDir: "views/partials",
  })
);

server.set("view engine", "html");

server.use("/", routing);

server.listen(process.env.PORT, () => {
  console.log("Server listening at Port " + process.env.PORT);
});
