const express = require("express");
const voteController = require("../controllers/VoteController");

const router = express.Router();
router.post("/register", voteController.createVote);
router.get("/", voteController.getAllVotes);
router.get("/statistics/", voteController.getStatistics);


module.exports = router;