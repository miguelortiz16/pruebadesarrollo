'use strict'


var express=require('express');
var usuarioController=require('../controllers/usuarios')

var router=express.Router();

//228 algo que se ejecuta antes 

var multipart=require('connect-multiparty');
var multipartMiddleware=multipart({uploadDir:'./uploads'})

router.get('/home',usuarioController.home);
router.post('/test',usuarioController.test);

//223
router.post('/save-usuario',usuarioController.saveusuario);

//224

router.get('/usuario/:id?',usuarioController.getusuario);


//225
router.get('/usuarios',usuarioController.getusuarios);

//226
router.put('/usuario/:id',usuarioController.updateusuario);

//227
router.delete('/usuario/:id',usuarioController.deleteusuario);
module.exports=router;

//228



