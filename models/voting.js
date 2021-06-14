const voting = {
        pepperoni: [],
        cheese: [],
        hawaiian: [],
    }
    // Shorthand for getting the same key that we just returned
const {
    BadRequestError,
    NotFoundError
} = require("../utils/errors")

// Models are fat while routes are kept lean
class Voting {
    static async tallyVotes() {
        // handling calculating the final results for our poll
        // and return those results
        const votingResults = {
            pepperoni: voting.pepperoni.length,
            cheese: voting.cheese.length,
            hawaiian: voting.hawaiian.length,
        }
        return votingResults;
    }

    static async recordVote(pizzaName, user) {
        // increment the pizza name that was voted for
        // and return the final results
        // Uses fast fails and no plain returns and much cleaner
        if (!user) {
            throw new BadRequestError("You must have a user in the request body to vote.")
        }
        if (!voting[pizzaName]) {
            throw new NotFoundError("That pizza name is not part of the poll.")
        }
        if (voting[pizzaName].includes(user)) {
            throw new BadRequestError("That user has already voted for that pizza.")
        }
        voting[pizzaName].push(user);

        // Keep things flexible by just calling the function
        return Voting.tallyVotes();
    }
}

module.exports = Voting;