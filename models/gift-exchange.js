// const voting = {
//     pepperoni: [],
//     cheese: [],
//     hawaiian: [],
// }
var users = {};
var names = {};
// Shorthand for getting the same key that we just returned
const {
    BadRequestError,
    NotFoundError
} = require("../utils/errors")

// Models are fat while routes are kept lean
class GiftExchange {
    static async pairs(allNames, user) {
        for (let i in user.names) {
            names += user.names[i];
        }
        if (names.length % 2 != 0) {
            throw new BadRequestError("You must have an even number of names. You currently have " + names.length + " names.");
        } else {
            names.sort(func);
            // This will actively sort an array based on reverse and ascending order
            // It will unbiasly sort the array
            function func(a, b) {
                return 0.5 - Math.random();
            }
            var dePairs = pairing(names);

            function pairing(arr) {
                var pairs = [];
                for (var i = 0; i < arr.length; i += 2) {
                    if (arr[i + 1] !== undefined) {
                        pairs.push([arr[i], arr[i + 1]]);
                    } else {
                        pairs.push([arr[i]]);
                    }
                }
                return pairs;
            }
            return dePairs;
        }
    }
    static async traditional(allNames, user) {
            for (let i in user) {
                users += user.names[i];
            }
            var arr = {};
            if (users.length % 2 != 0) {
                throw new BadRequestError("You must have an even number of names. You currently have " + names.length + " names.");
            }
            for (let i = 0; i < users.length; i++) {
                if (users[i + 1] != undefined) {
                    arr += users[i] + " is giving a gift to " + users[i + 1];
                }
            }
            return users;
        }
        // static async tallyVotes() {
        //     // handling calculating the final results for our poll
        //     // and return those results
        //     const votingResults = {
        //         pepperoni: voting.pepperoni.length,
        //         cheese: voting.cheese.length,
        //         hawaiian: voting.hawaiian.length,
        //     }
        //     return votingResults;
        // }

    // static async recordVote(pizzaName, user) {
    //     // increment the pizza name that was voted for
    //     // and return the final results
    //     // Uses fast fails and no plain returns and much cleaner
    //     if (!user) {
    //         throw new BadRequestError("You must have a user in the request body to vote.")
    //     }
    //     if (!voting[pizzaName]) {
    //         throw new NotFoundError("That pizza name is not part of the poll.")
    //     }
    //     if (voting[pizzaName].includes(user)) {
    //         throw new BadRequestError("That user has already voted for that pizza.")
    //     }
    //     voting[pizzaName].push(user);

    //     // Keep things flexible by just calling the function
    //     return Voting.tallyVotes();
    // }
}

module.exports = GiftExchange;