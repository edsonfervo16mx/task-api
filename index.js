var express = require("express");
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var controller_proyecto = require("./controller/proyecto");
var controller_colaborador = require("./controller/colaborador");
var controller_ticket = require("./controller/ticket");


var formidable = require("express-formidable");
app.use(formidable({
	keepExtensions: true,
	encoding: 'utf-8'
}))

app.use(function(request, response, next) {
    // Set permissive CORS header - this allows this server to be used only as
    // an API server in conjunction with something like webpack-dev-server.
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    response.setHeader('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE');

    // Disable caching so we'll always get the latest comments.
    response.setHeader('Cache-Control', 'no-cache');
    next();
});

app.get("/",function(request, response){
    console.log("Index task-api");
});

app.use("/proyecto",controller_proyecto);
app.use("/colaborador",controller_colaborador);
app.use("/ticket",controller_ticket);

app.listen(3000);