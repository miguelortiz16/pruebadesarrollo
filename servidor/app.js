var express=require('express');

var bodyParser=require('body-parser');


var app=express();


// cargar archivos de rutarutas
var usuario_routes=require('../servidor/rutes/usuarios')




//cors
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
//middleware

app.use(bodyParser.urlencoded({extend:false}));
app.use(bodyParser.json());





//rutass
app.use('/api',usuario_routes);


//exportat

module.exports=app;


