const mysql = require("mysql2")


const connection = mysql.createConnection({
    host: "localhost",
    database: "voting_system",
    user: "root",
    password: ""
});

connection.connect(function(error){
    if(error) {
        throw error;
    }else {
        console.log("Se conectó a la bd correctamente")
    }
})

module.exports = connection;