const pool = require("../config/database");


const voter = {
    async createVoter(id, name, email, has_voted){
        const [result] = await pool.execute(
            "INSERT INTO voter (name, email, has_voted) VALUES (?,?,?)",
            [name, email, has_voted]
        );

        return result;
    },

    async getVoters(){
        const [voters] = await pool.execute(
            "SELECT * FROM voter"
        )
        return voters;
    },

    async getVoterById(id){
        const [voter] = await pool.execute(
            "SELECT * FROM voter WHERE id = ?",
            [id]
        );
        return voter;
    },

    async deleteVoter(id){
        const [deleteVoter] = await pool.execute(
            "DELETE FROM voter WHERE id = ?",
            [id]
        );
        return deleteVoter;
    }
}