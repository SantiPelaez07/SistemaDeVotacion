require("express");
const pool = require("../config/database");
const VoterRequest = require("../dtos/request/VoterRequest");


    async function createVoter(req){
        try{
            const requestVoter = new VoterRequest(req)
            const result = await pool.execute(
                "INSERT INTO voter (name, email, has_voted) VALUES (?,?,?)",
                [requestVoter.name, requestVoter.email, false]
            );
            if(result[0].insertId == undefined){
                throw new error("InsertID is undefined ", error);
                
            }
    
            const idVoterCreated = result[0].insertId;
            console.log("Id result: ", idVoterCreated);
            const voter = await getVoterById(idVoterCreated);
            console.log("Voter creado: ", voter);
    
            return voter;
        } catch (error){
            console.log("Error en createVoter: ", error);
            throw error;
        }
        
    }

    async function getVoters(){
        const voters = await pool.execute(
            "SELECT * FROM voter"
        )
        return [voters];
    }

    async function getVoterById(id){
        const [voter] = await pool.execute(
            "SELECT * FROM voter WHERE id = ?",
            [id]
        );
        return voter.length > 0 ? voter[0] : null;
    }

    async function deleteVoter(id){
        const voter = await getVoterById(id);
        if(!voter){
            throw new Error("Voter not found.")
        }
        await pool.execute(
            "DELETE FROM voter WHERE id = ?",
            [id]
    );
        return voter;
    }

module.exports = { createVoter, getVoters, getVoterById, deleteVoter };