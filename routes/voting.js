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

// Send data to the server with a post request
// The colon is a placeholder for the parameter
router.post("/:pizzaName", async(req, res, next) => {
    console.log(req.params)

    const pizzaName = req.params.pizzaName;
    if (voting[pizzaName] || voting[pizzaName] === 0) {
        voting[pizzaName] += 1;
    }

    res.status(200).json(voting)
})

// This allows us to get access to this
// We get this to access our module anywhere in the application
// Export the module, then import it somewhere else
module.exports = router;