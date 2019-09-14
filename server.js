const express = require("express");
const PORT = process.env.PORT || 8000;
const app = express();


//display static content from "public" directory 
app.use(express.static("public"));


app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Import routes
const routes = require("./controllers/burgers_controller");

app.use(routes);

// Start server
app.listen(PORT, function () {

    console.log("main server.js listening on: http://localhost:" + PORT);
});