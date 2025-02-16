const candidateService = require("../services/CandidateService");

const candidateController = {

    async registerCandidate(req, res){
        try {
            const candidate = await candidateService.createCandidate(req.body);
            res.status(201).json({
                message: "Candidate registered successfully",
                candidate: candidate
            });
        } catch (error) {
            res.status(500).json({
                message: "Error registering candidate",
                error: error.message
            });
        }
    },

    async getAllCandidates(req,res){
        try {
           const [candidates] = await candidateService.getAllCandidates(); 
           res.status(200).json({
            message: "Registered Candidates",
            candidates: candidates
           });
        } catch (error) {
            res.status(500).json({
                message: "Error displaying all candidates",
                error: error.message
            });
        }
    },

    async getByIdCandidate(req,res){
        const { id } = req.params;
        try {
            const candidate = await candidateService.getByIdCandidate(id);
            if(!candidate){
                return res.status(400).json({
                    message: "Candidate not found"
                })
            }
            res.status(200).json({
                message: "Candidate Found",
                candidate: candidate
            })
        } catch (error) {
            res.status(500).json({
                message: "Error in candidate search",
                error: error.message
            });
        }
    },

    async deleteCandidate(req,res){
        const { id } = req.params;
        try {
            const candidate = await candidateService.deleteCandidate(id);
            if(!candidate){
                res.status(400).json({
                    message: "Candidate not found"
                });
            }
            res.status(200).json({
                message: "Candidate successfully removed",
                candidate: candidate
            });
        } catch (error) {
            res.status(500).json({
                message: "Error in searching for the candidate to delete",
                error: error.message
            })
        }
    }

}

module.exports = candidateController;