const db = require("../config/database");
const VoteRequest = require("../dtos/request/VoteRequest");

async function createVote(req) {
    try {
        const rq = new VoteRequest(req);
        const [candidate] = await db.execute(
            "SELECT * FROM candidate WHERE id = ?",
            [rq.candidate_id]
        );

        const [voter] = await db.execute(
            "SELECT * FROM voter WHERE id = ?",
            [rq.voter_id]
        );

        let statusVoted = false;

        if(candidate.length === 0){
            throw new Error(`The candidate with the ID: ${rq.candidate_id} does not exist in the BD.`);
        }

        if(voter.length === 0){
            throw new Error(`The voter with the ID: ${rq.voter_id}, does not exist in the DB.`);
        }else {
            statusVoted = voter[0].has_voted;
        }


        if(statusVoted){
          throw new Error(`The voter has alredy cast a Vote`);
        }

        const result = await db.execute(
            "INSERT INTO vote (voter_id, candidate_id) VALUES (?,?)",
            [rq.voter_id, rq.candidate_id]
        );
        

        await db.execute(
            "UPDATE candidate SET votes = votes + 1 WHERE id = ?",
            [rq.candidate_id]
        );

        await db.execute(
            "UPDATE voter SET has_voted = true WHERE id = ?",
            [rq.voter_id]
        );
        if(result[0].insertId == undefined){
            throw new error("Error getting created id: ", error);
        }
        const vote = await getVoteById(result[0].insertId);
        return vote;
    } catch (error) {
        console.error("An error occurred: ", error);
        throw error;
    }
}


async function getAllVotes() {
    const votes = await db.execute(
        "SELECT * FROM vote"
    );
    return [votes];
}

async function getVoteById(id) {
    const [vote] = await db.execute(
        "SELECT * FROM vote WHERE id = ?",
        [id]
    );
    return vote.length > 0 ? vote[0] : null;
    
}

async function getstatistics() {
    const [candidates] = await db.execute(
        "SELECT * FROM candidate",

    );

    const [totalVotersResult] = await db.execute(
        "SELECT COUNT(*) AS nv FROM vote"
    )
    const totalVoters = totalVotersResult[0].nv;
    const formatter = new Intl.NumberFormat("en-US", {
        style: 'percent',
        maximumFractionDigits: 0
    });

    const newStatistics = [];

    candidates.forEach(candidate => {
        const percentage = totalVoters > 0 ? candidate.votes / totalVoters : 0;
        const statistics = {
            id: candidate.id,
            name_candidate: candidate.name,
            total_votes: candidate.votes,
            percentage_votes: formatter.format(percentage),
            total_voters: totalVoters
        };
        newStatistics.push(statistics);
    });

    return newStatistics;
}

module.exports = { createVote, getAllVotes, getstatistics };