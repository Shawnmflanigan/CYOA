//express server

const express = require('express');
const app = express();
const favicon = require('express-favicon');
const sequelize = require('./config/connection');
const db = require('./models');

// Static file serving
app.use(express.static("public"));

//parsing 

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(favicon(__dirname + '/public/favicon.png'));

// express-handlebars

const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// port
const PORT = 3000

//routes
require('./controllers/routes-html.js')(app)
require('./controllers/routes-api.js')(app)

// sync with sql db and listen

sequelize.sync({ force: false }).then(() => {
    app.listen((process.env.PORT || PORT), () => console.log(`Listening on PORT ${PORT}`));
});