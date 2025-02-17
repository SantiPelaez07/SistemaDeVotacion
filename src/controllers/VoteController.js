const voteService = require("../services/VoteService");

const voteController = {
    async createVote(req,res){
        try {
            const vote = await voteService.createVote(req.body);
            res.status(201).json({
                message: "Vote registered successfully",
                vote: vote
            });

        } catch (error) {
            if(error.message.includes("does not exist in the DB")){
                return res.status(400).json({
                    message: "Bad request",
                    error: error.message
                })
            }
           return res.status(500).json({
                message: "Error registering Vote",
                error: error.message
            })
        }
    }, 

    async getAllVotes(req,res){
        try {
            const [votes] = await voteService.getAllVotes();
            res.status(200).json({
                message: "Registered Votes",
                votes: votes
            });
        } catch (error) {
             res.status(500).json({
                message: "Error displaying all votes",
                error: error.message
            });
        }
    },

    async getStatistics(req,res){
        try {
            const statistics = await voteService.getStatistics();
            res.status(200).json({
                message: `Candidates statistics.`,
                statistics: statistics
            })
        } catch (error) {
            res.status(500).json({
                message: "Error displaying candidate statistics",
                error: error.message
            })
        }
    }

}

module.exports = voteController;