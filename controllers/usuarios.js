const {response,request} = require('express');


const usuariosGet=(req=request, res= response)=> {
   const  query = req.query;
   
    res.json({
       
       "msg": "get de mi api - controlador",
       query
    });
  }


const usuariosPut = (req, res)=> {
    const id = req.params.id;

    res.json({
        
       "msg": "put de mi api - controler",
       id
    });
  }

const usuariosPost = (req, res)=> {

    const {nombre,Apellido} = req.body;
    
        

    res.status(201).json({
       "msg": "post de mi api - controller",
       nombre,Apellido
    });
  }

const usuariosDelet =  (req, res)=> {
    res.json({
       
       "msg": "delet de mi api -controler"
    });
  }  

const usuariosPatch = (req, res)=> {
    res.json({
       
       "msg": "patch de mi api - controler"
    });
  }


 module.exports={
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelet,
    usuariosPatch
 } 