var express = require("express");
var router = express.Router();
var Connect = require("../model/connection").Connect;

router.get("/",function(request,response){
    var sql = 'SELECT * FROM view_ticket';
    var query = Connect.query(sql,[],function(error,result,fields){
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

router.get("/:id",function(request,response){
    var sql = 'SELECT * FROM view_ticket WHERE view_ticket.cve_ticket = ?';
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

router.post("/registrar",function(request,response){
    console.log("peticion de registro - ticket");
    console.log(request.fields.TicketTitulo);
    console.log(request.fields.TicketDescripcion);
    console.log(request.fields.TicketInicio);
    console.log(request.fields.TicketVencimiento);
    console.log(request.fields.ProyectoClave);
    console.log(request.fields.TicketIdColaborador);
    /* */
    var sql = 'CALL ticketRegistrar(?,?,?,?,?,?)';
    var query = Connect.query(sql,[request.fields.TicketTitulo,request.fields.TicketDescripcion,request.fields.TicketInicio,request.fields.TicketVencimiento,request.fields.ProyectoClave,request.fields.TicketIdColaborador],function(error,result,fields){
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
    console.log(request.fields.TicketClave);
    console.log(request.fields.TicketTitulo);
    console.log(request.fields.TicketDescripcion);
    console.log(request.fields.TicketInicio);
    console.log(request.fields.TicketVencimiento);
    /* */
    var sql = 'CALL ticketModificar(?,?,?,?,?)';
    var query = Connect.query(sql,[request.fields.TicketClave,request.fields.TicketTitulo,request.fields.TicketDescripcion,request.fields.TicketInicio,request.fields.TicketVencimiento],function(error,result,fields){
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

router.get("/baja/:id",function(request,response){
    console.log("peticion de baja");
    console.log(request.params.id);
    /* */
    var sql = 'CALL taskBaja(?)';
    var query = Connect.query(sql,[request.params.id],function(error,result,fields){
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

router.get("/alta/:id",function(request,response){
    console.log("peticion de baja");
    console.log(request.params.id);
    /* */
    var sql = 'CALL ticketAlta(?)';
    var query = Connect.query(sql,[request.params.id],function(error,result,fields){
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