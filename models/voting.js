const voting = {
    pepperoni: [],
    cheese: [],
    hawaiian: [],
}

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
        if (voting[pizzaName]) {
            if (!voting[pizzaName].includes(user)) {
                voting[pizzaName].push(user);
            }
        }

        // Keep things flexible by just calling the function
        return Voting.tallyVotes();
    }
}

module.exports = Voting;