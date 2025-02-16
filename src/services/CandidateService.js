const candidateModel = require("../models/CandidateModel");
const CandidateRequest = require("../dtos/request/CandidateRequest");

class CandidateService {
    async createCandidate(req){
        const request = convertRequest(req);
        const response = await candidateModel.createCandidate(request);
        return response;
    }

    async getAllCandidates(){
        return candidateModel.getAllCandidates();
    }

    async getByIdCandidate(id){
        return candidateModel.getByIdCandidate(id);
    }

    async deleteCandidate(id){
        return candidateModel.deleteCandidate(id);
    }
}

function convertRequest(req){
    return new CandidateRequest(req)
}

module.exports = new CandidateService();