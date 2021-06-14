const express = require("express");
const morgan = require("morgan");
// This looks for .js files by default
const giftRouter = require("./routes/gift");
const {
    NotFoundError
} = require("./utils/errors")

const app = express();
app.use(morgan("tiny"));
app.use(express.json());
// Send post requests that include post bodies
app.use("/gift", giftRouter);


// We need the response object, the request object, and then the next callback
app.get("/", async(req, res, next) => {
    res.status(200).json({ ping: "pong" });
})

app.get("/hey", async(req, res, next) => {
        res.status(200).json({ hi: "hello" });
    })
    // Handle 404 errors that were not matched with a route
app.use((req, res, next) => {
    // Get the next function to handle this
    return next(new NotFoundError());
})

// Generic error handler - anything that is unhandled will be handled here
app.use((error, req, res, next) => {
    // Get the next function to handle this
    const status = error.status || 500;
    const message = error.message;
    return res.status(status).json({
        error: { message: message, status }
    });
})

const port = 3000;

app.listen(port, () => {
    console.log(`Server listening on port ` + port)
})