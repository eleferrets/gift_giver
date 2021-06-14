const express = require("express")
const Voting = require("../models/voting")
const router = express.Router()

router.get("/", async(req, res, next) => {
    const votes = await Voting.tallyVotes();
    res.status(200).json(votes)
})

// Send data to the server with a post request
// The colon is a placeholder for the parameter
router.post("/:pizzaName", async(req, res, next) => {
    const pizzaName = req.params.pizzaName;
    const votes = await Voting.recordVote(pizzaName)
    res.status(200).json(votes)
})

// This allows us to get access to this
// We get this to access our module anywhere in the application
// Export the module, then import it somewhere else
module.exports = router;