const voterService = require("../services/VoterService");

const voterController = {
    async registerVoter(req, res) {
        try {
            const voter = await voterService.createVoter(req.body);
            res.status(201).json({
                message: "Voter registered successfully: ",
                voter: voter
            });

        } catch (e) {
            res.status(500).json({
                message: "Error registering voter: ",
                error: e.message
            });
        }
    },

    async getAllVoters(req,res){
        try {
            const [voters] = await voterService.getAllVoters();
            res.status(200).json({
                message: "Registered Voters",
                voters: voters
            });
        } catch (error) {
            res.status(500).json({
                message: "Error displaying all voters",
                error: error.message
            });
        }
    },

    async getByIdVoter(req,res){
        const { id } = req.params;
        try {
            const voter = await voterService.getByIdVoter(id);
            if(!voter){
                return res.status(404).json({
                    message: "Voter not found."
                });
            }
            res.status(200).json({
                message: "Voter Found",
                voter: voter
            })
        } catch (error) {
            res.status(500).json({
                message: "Error in voter search",
                error: error.message
            });
        }
    },

    async deleteVoterById(req,res){
        const { id } = req.params;
        try {
            const voter = await voterService.deleteVoter(id);
            if(!voter){
                res.status(400).json({
                    message: "Voter not found"
                });
            }
            res.status(200).json({
                message: "Voter successfully removed",
                voter: voter
            })
        } catch (error) {
            res.status(500).json({
                message: "Error in searching for the voter to delete",
                error: error.message
            })
        }
    }
}

module.exports = voterController;