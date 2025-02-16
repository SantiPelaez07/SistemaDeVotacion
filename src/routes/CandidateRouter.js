const express = require("express");
const candidateController = require("../controllers/CandidateController");

const router = express.Router();
router.post("/register", candidateController.registerCandidate);
router.get("/", candidateController.getAllCandidates);
router.get("/:id", candidateController.getByIdCandidate);
router.delete("/delete/:id", candidateController.deleteCandidate);
module.exports = router;