const voteModel = require("../models/VoteModel");
const VoteRequest = require("../dtos/request/VoteRequest");

class VoteService {
    async createVote(req){
        const request = convertRequest(req);
        const response = await voteModel.createVote(request);
        return response;
    }

    async getAllVotes(){
        return voteModel.getAllVotes();
    }

    async getStatistics(){
        return voteModel.getstatistics();
    }
}

function convertRequest(req){
    return new VoteRequest(req);
}

module.exports = new VoteService();