const express = require("express");
const voterController = require("../controllers/VoterController");

const router = express.Router();
router.post("/RegisterVoter", voterController.registerVoter);

module.exports = router;