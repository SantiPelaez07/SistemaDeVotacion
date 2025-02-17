const voterModel = require("../models/VoterModel");
const VoterRequest = require("../dtos/request/VoterRequest");

class voterService {
        async createVoter(req) {
                const requestVoter = convertDTO(req);
                const response = await voterModel.createVoter(requestVoter);
                return response;
        }

        async getAllVoters() {
                return voterModel.getVoters();
        }

        async getByIdVoter(id) {
                return voterModel.getVoterById(id);
        }

        async deleteVoter(id) {
                return voterModel.deleteVoter(id);
        }
}

function convertDTO(req) {
        return new VoterRequest(req);
}

module.exports = new voterService();