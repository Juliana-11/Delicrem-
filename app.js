const express = require('express');
const index = express();


//Rutas
const mainRouter = require('./routers/main_routers');

//configuracion
index.set("view engine", "ejs");
    //motor de visualización
index.use(express.urlencoded({extended: false}));
index.use(express.json());
index.set('views', __dirname + '/views');

//Ejecución rutas
index.use('/', mainRouter);

index.listen(9015, ()=>console.log('Puerto 9015 corriendo'));
