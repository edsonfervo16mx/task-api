var express = require("express");
var router = express.Router();
var Connect = require("../model/connection").Connect;

router.get("/",function(request,response){
    var sql = 'SELECT * FROM view_colaborador';
    var query = Connect.query(sql,[],function(error,result,fields){
        if(error){
            throw error;
        }else{
            if(result.length > 0){
                console.log("consultando colaboradores");
                console.log(result);
                response.json(result);
            }else{
                console.log("registro no encontrado");
            }
        }
    });
});

router.get("/:id",function(request,response){
    var sql = 'SELECT * FROM view_colaborador WHERE view_colaborador.cve_colaborador = ?';
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

router.get("/:id/tickets",function(request,response){
    var sql = 'SELECT * FROM view_ticket WHERE view_ticket.cve_colaborador = ?';
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

module.exports = router;