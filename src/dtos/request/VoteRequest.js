class VoteRequest {
    constructor({voter_id = 0, candidate_id = 0}){
        this.voter_id = voter_id;
        this.candidate_id = candidate_id;
    }
}

module.exports = VoteRequest;