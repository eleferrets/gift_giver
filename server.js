const express = require("express")
const morgan = require("morgan")

const app = express()

app.use(morgan("tiny"))

// We need the response object, the request object, and then the next callback
app.get("/", async(req, res, next) => {
    res.status(200).json({ ping: "pong" })
})

const port = 3000

app.listen(port, () => {
    console.log(`Server listening on port ` + port)
})