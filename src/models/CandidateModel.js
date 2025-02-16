require("express");
const db = require("../config/database");
const candidateRequest = require("../dtos/request/CandidateRequest")

async function createCandidate(req) {
    try {
        const request = new candidateRequest(req);
        const result = await db.execute(
            "INSERT INTO candidate (name, party, votes) VALUES (?,?,?)",
            [request.name, request.party, 0]
        );
        if(result[0].insertId == undefined){
          throw new error("")      
        }
    } catch (error) {

    }
}