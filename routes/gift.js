const express = require("express");
const GiftExchange = require("../models/gift-exchange");
//const Voting = require("../models/voting");
const router = express.Router();


router.get("/", async(req, res, next) => {
    // try {
    //     //const votes = await Voting.tallyVotes();
    //     //res.status(200).json(votes);
    // } catch (err) {
    //     next(err);
    // }
    console.log('hi');

});

// Send data to the server with a post request
// The colon is a placeholder for the parameter
router.post("/:allNames", async(req, res, next) => {
    try {
        console.log(req.body);
        const allNames = req.params.allNames;
        const user = req.body.names;
        const pairs = await GiftExchange.pairs(allNames, user);
        const tradition = await GiftExchange.traditional(allNames, user);
        console.log("pairs", pairs);
        console.log("tradition", tradition)
        res.status(200).json(user);
    } catch (err) {
        next(err);
    }
})

// This allows us to get access to this
// We get this to access our module anywhere in the application
// Export the module, then import it somewhere else
module.exports = router;