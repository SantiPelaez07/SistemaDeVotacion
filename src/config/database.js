const mysql = require("mysql2/promise")


const pool = mysql.createPool({
    host: "localhost",
    database: "voting_system",
    user: "root",
    password: ""
});


async function testConnection() {
    try {
        const connection = await pool.getConnection();
        console.log("Se conectó a la bd correctamente");
        connection.release();
    } catch (error) {
        console.error("Se presentó un error en la conexión: ", error);
    }
}

testConnection();

module.exports = pool;