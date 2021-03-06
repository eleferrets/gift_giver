const express = require("express");
const morgan = require("morgan");
// This looks for .js files by default
const votingRouter = require("./routes/voting")

const app = express()
app.use("/voting", votingRouter)

app.use(morgan("tiny"))

// We need the response object, the request object, and then the next callback
app.get("/", async(req, res, next) => {
    res.status(200).json({ ping: "pong" })
})

app.get("/hey", async(req, res, next) => {
    res.status(200).json({ hi: "hello" })
})

const port = 3000

app.listen(port, () => {
    console.log(`Server listening on port ` + port)
})