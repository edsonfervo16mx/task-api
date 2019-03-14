var mysql = require("mysql");

//Conexión Mysql
var con = mysql.createConnection({
    host : 'localhost',
    user: 'edsonfer',
    password: 'hack1024',
    database: 'mydb_task',
    port: 3306,
    multipleStatements: true
});

//Verificando la conexión
con.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('Conexion correcta.');
    }
});

module.exports.Connect = con;