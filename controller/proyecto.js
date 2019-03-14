var express = require("express");
var router = express.Router();
var Connect = require("../model/connection").Connect;

router.get("/",function(request,response){
    var sql = 'SELECT * FROM view_proyecto ORDER BY (view_proyecto.cve_proyecto) DESC';
    var query = Connect.query(sql,[],function(error,result,fields){
        if(error){
            throw error;
        }else{
            if(result.length > 0){
                console.log(result);
                //console.log("-------------");
                //console.log(result[0].nombre_proyecto);
                response.json(result);
            }else{
                console.log("registro no encontrado");
            }
        }
    });
});

router.get("/:id",function(request,response){
    var sql = 'SELECT * FROM view_proyecto WHERE view_proyecto.cve_proyecto = ?';
    var query = Connect.query(sql,[request.params.id],function(error,result,fields){
        if(error){
            throw error;
        }else{
            if(result.length > 0){
                console.log("Consulta de un proyecto");
                console.log(request.params.id);
                console.log(result);
                response.json(result);
            }else{
                console.log("registro no encontrado de un proyecto");
                console.log(request.params.id);
            }
        }
    });
});

router.get("/:id/ticket",function(request,response){
    var sql = 'SELECT * FROM view_ticket WHERE view_ticket.cve_proyecto = ?';
    var query = Connect.query(sql,[request.params.id],function(error,result,fields){
        if(error){
            throw error;
        }else{
            if(result.length > 0){
                console.log(result);
                response.json(result);
            }else{
                console.log("registro no encontrado");
            }
        }
    });
});

//pendiente de hacerle pruebas
router.post("/registrar",function(request,response){
    console.log("peticion de registro");
    console.log(request.fields.ProyectoNombre);
    console.log(request.fields.ProyectoDescripcion);
    //return("SUCCESS");
    /* */
    var sql = 'CALL proyectoRegistrar(?,?)';
    var query = Connect.query(sql,[request.fields.ProyectoNombre,request.fields.ProyectoDescripcion],function(error,result,fields){
        if(error){
            throw error;
        }else{
            if(result.length > 0){
                console.log(result[0]);
                response.json(result[0]);
            }else{
                console.log("registro no encontrado");
            }
        }
    });
    /* */
});

router.post("/modificar",function(request,response){
    console.log("peticion de modificar");
    console.log(request.fields.ProyectoClave);
    console.log(request.fields.ProyectoNombre);
    console.log(request.fields.ProyectoDescripcion);
    //return("SUCCESS");
    /* */
    var sql = 'CALL proyectoModificar(?,?,?)';
    var query = Connect.query(sql,[request.fields.ProyectoClave,request.fields.ProyectoNombre,request.fields.ProyectoDescripcion],function(error,result,fields){
        if(error){
            throw error;
        }else{
            if(result.length > 0){
                console.log(result[0]);
                response.json(result[0]);
            }else{
                console.log("registro no encontrado");
            }
        }
    });
    /* */
});

module.exports = router;