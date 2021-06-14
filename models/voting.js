const voting = {
    pepperoni: 0,
    cheese: 0,
    hawaiian: 0,
}

// Models are fat while routes are kept lean
class Voting {
    static async tallyVotes() {
        // handling calculating the final results for our poll
        // and return those results
        return voting;
    }

    static async recordVote(pizzaName) {
        // increment the pizza name that was voted for
        // and return the final results
        if (voting[pizzaName] || voting[pizzaName] === 0) {
            voting[pizzaName] += 1;
        }

        // Keep things flexible by just calling the function
        return Voting.tallyVotes();
    }
}

module.exports = Voting;