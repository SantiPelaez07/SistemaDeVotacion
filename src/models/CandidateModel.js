require("express");
const db = require("../config/database");
const CandidateRequest = require("../dtos/request/CandidateRequest")

async function createCandidate(req) {
    try {
        const request = new CandidateRequest(req);
        const result = await db.execute(
            "INSERT INTO candidate (name, party, votes) VALUES (?,?,?)",
            [request.name, request.party, 0]
        );
        if(result[0].insertId == undefined){
          throw new error("Error getting created id: ", error);    
        }
        const candidate = await getByIdCandidate(result[0].insertId);
        return candidate;
    } catch (error) {
        console.error("An error occurred: ", error);
    }
}

async function getAllCandidates() {
    const candidates = await db.execute(
        "SELECT * FROM candidate"
    );
    return [candidates];
}

async function getByIdCandidate(id) {
    const [candidate] = await db.execute(
        "SELECT * FROM candidate WHERE id = ?",
        [id]
    );
    return candidate.length > 0 ? candidate[0] : null;
}


async function deleteCandidate(id) {
    const candidate = await getByIdCandidate(id);
    if(!candidate){
        throw new Error("Candidate not found");
    }

    await db.execute(
        "DELETE FROM candidate WHERE id = ?",
        [id]
    );
    return candidate;
}

module.exports = { createCandidate, getAllCandidates, getByIdCandidate, deleteCandidate };