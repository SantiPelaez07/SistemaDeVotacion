const express = require("express");
const voterController = require("../controllers/VoterController");

const router = express.Router();
router.post("/register", voterController.registerVoter);
router.get("/", voterController.getAllVoters);
router.get("/:id", voterController.getByIdVoter);
router.delete("/delete/:id", voterController.deleteVoterById);
module.exports = router;