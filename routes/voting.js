const express = require("express")
const router = express.Router()

const voting = {
    pepperoni: 0,
    cheese: 0,
    hawaiian: 0,
}

router.get("/", async(req, res, next) => {
    res.status(200).json(voting)
})

// This allows us to get access to this
// We get this to access our module anywhere in the application
// Export the module, then import it somewhere else
module.exports = router;