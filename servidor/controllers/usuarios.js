'use strict'
//223
var Usuario=require('../models/usuarios')
///222


//229
var fs=require('fs')


///
var contoller={
home:function(req,res){
return res.status(200).send({
message:'soy la home los proyectos estan en  /api/usuarios'


});
},
test:function(req,res){
return res.status(200).send({
message:"soy el metodo test del controlador de usuario"

});
},
//223
saveusuario: function(req, res){
    var usuario = new Usuario();//creamos un objeto del modelo usuario para poder acceder a sus prodpiedades
    var params = req.body;
     usuario.name = params.name;
     usuario.email = params.email;
     usuario.state = params.state;
     usuario.city = params.city;
    
     usuario.save((err, usuarioStored)=>{
    //En el caso de que se diese algún error entonces:
    if(err) return res.status(500).send({message: 'Error al guardar'});
    //status(404) cuando se de el caso de que no exista usuarioStored( es decir, de que el proyecto NO se haya guardado)
    if(!usuarioStored) return res.status(404).send({message: 'No se ha podido guardar el proyecto'});
    //si todo se desarrollase correctamente entonces:
    return res.status(200).send({usuario: usuarioStored});
    });
    /* Este código no hace falta
    return res.status(200).send({
     usuario:usuario,
     message: 'Funciona'
    });
    */
    },
//224 listar usuario 

getusuario: function(req,res){
var usuarioId=req.params.id;
if(usuarioId==null)return res.status(404).send({
        message:'el usuarioo no existe'});



        Usuario.findById(usuarioId,(err,usuario)=>{
    if(err) return res.status(500).send({
        message:'error al devolver los datos'
    });

    if(!usuario) return res.status(404).send({
    message:'el usuarioo no existe'

    });
    return res.status(200).send({
        usuario
    });
});



},
//225 obtener todo los datos o usuarioos 
getusuarios:function(req,res){
    Usuario.find({}).exec((err,usuarios)=>{
       if(err) return res.status(500).send({message:'error al devolver los datos'});

       if(!usuarios) return res.status(404).send({message:'no hay usuarioos para mostrar'});

       return res.status(200).send({usuarios});
   })
},
//226 actualizar un usuarioo
updateusuario:function(req,res){
    var usuarioId=req.params.id;
    var update=req.body;

    Usuario.findByIdAndUpdate(usuarioId,update,{new:true},(err,usuarioUpdated)=>{
   if (err) return res.status(500).send({message:'error al actualizar '});

   if(!usuarioUpdated) return res.status(404).send({message:'no exixte el usuarioo para actualizar'});

   return res.status(200).send({
       usuario:usuarioUpdated
   });
    });
},
//227
deleteusuario:function(req,res){
    var usuarioId=req.params.id;

    Usuario.findByIdAndRemove(usuarioId,(err,usuarioRemoved)=>{
        if(err) return res.status(500).send({message:'no se ha podido borrar el usuarioo'});

        if(!usuarioRemoved) return res.status(404).send({message:'no se puede eliminar ese proecto'});

        return res.status(200).send({
            usuario:usuarioRemoved
        })
        
    })

},


};

module.exports=contoller;